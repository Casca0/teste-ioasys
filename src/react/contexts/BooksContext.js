import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchBooks } from '../services/fetchBooks';
import { togglePopup } from '../hooks/showPopup';

const BooksContext = createContext({});

export function BooksProvider({ children }) {
	const [books, setBooks] = useState([]);
	const { searchBook, showPopup, bookInfo, setShowPopup } = togglePopup();
	const [totalPages, setTotalPages] = useState(0);
	const [page, setPage] = useState(1);

	useEffect( () => {
		async function fetchData() {
			const response = await fetchBooks(page);
			const { data } = response;
            
			setTotalPages(response.totalPages);
			setBooks(data);
		}
		fetchData();
	}, [page]);

	return (
		<BooksContext.Provider value={{ books, totalPages, page, setPage, searchBook, showPopup, bookInfo, setShowPopup }}>
			{children}
		</BooksContext.Provider>
	);
}

export function useBooksContext() {
	const context = useContext(BooksContext);

	return context;
}