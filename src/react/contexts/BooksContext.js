import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchBooks } from '../services/fetchBooks';

const BooksContext = createContext({});

export function BooksProvider({ children }) {
	const [books, setBooks] = useState([]);

	useEffect( () => {
		async function fetchData() {
			const response = await fetchBooks();
			const { data } = response;

			setBooks(data);
		}
		fetchData();
	}, []);

	return (
		<BooksContext.Provider value={{ books }}>
			{children}
		</BooksContext.Provider>
	);
}

export function useBooksContext() {
	const context = useContext(BooksContext);

	return context;
}