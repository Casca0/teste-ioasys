import React, { createContext, useContext } from 'react';
import { fetchBooks } from '../services/fetchBooks';

const BooksContext = createContext({});

export function BooksProvider({ children }) {
	const { getBooks } = fetchBooks();

	return (
		<BooksContext.Provider value={{ getBooks }}>
			{children}
		</BooksContext.Provider>
	);
}

export function useBooksContext() {
	const context = useContext(BooksContext);

	return context;
}