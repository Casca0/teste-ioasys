import React from 'react';
import { useBooksContext } from '../../contexts/BooksContext';

import BookCard from '../../pages/BooksPage/components/BookCard';
import * as S from './styled';

const BookList = () => {
	const { book } = useBooksContext();
	console.log('Data livros', book.data);

	return (
		<S.Books>
			{book.data?.map(( book ) => <BookCard
				key={book.id}
				image={book.imageUrl}
				title={book.title}
				author={book.authors}
				info={book.pageCount, book.publisher, book.published}
			/>)}
		</S.Books>
	);
};

export default BookList;