import React from 'react';
import { useBooksContext } from '../../contexts/BooksContext';

import BookCard from '../../pages/BooksPage/components/BookCard';
import * as S from './styled';

const BookList = () => {
	const { books } = useBooksContext();

	return (
		<S.Books>
			{books?.map(( book ) => <BookCard
				key={book.id}
				image={book.imageUrl}
				title={book.title}
				author={book.authors}
				pags={book.pageCount}
				publisher={book.publisher}
				datePublished={book.published}
				id={book.id}
			/>)}
		</S.Books>
	);
};

export default BookList;