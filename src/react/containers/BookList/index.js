import React from 'react';
import { useBooksContext } from '../../contexts/BooksContext';

// import * as S from './styled';

const BookList = () => {
	const { getBooks } = useBooksContext();

	document.addEventListener('DOMContentLoaded', getBooks());

	return (
		<h1>
			teste
		</h1>
	);
};

export default BookList;