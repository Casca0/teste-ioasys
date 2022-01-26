import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchBooks } from '../services/fetchBooks';

const BooksContext = createContext({});

export function BooksProvider({ children }) {
	const [book, setBook] = useState([]);

	useEffect( () => {
		async function fetchData() {
			const response = await fetchBooks();
			console.log('data context', response.data);
			setBook(response.data);
		}
		fetchData();
	}, []);

	return (
		<BooksContext.Provider value={{ book }}>
			{children}
		</BooksContext.Provider>
	);
}

export function useBooksContext() {
	const context = useContext(BooksContext);

	return context;
}