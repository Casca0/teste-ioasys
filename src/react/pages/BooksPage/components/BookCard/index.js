import React from 'react';

import * as S from './styled';

import missing from '../../../../images/missing-book.svg';
import { useBooksContext } from '../../../../contexts/BooksContext';

const BookCard = ({ image, title, author, pags, publisher, datePublished, id }) => {

	const { searchBook } = useBooksContext();

	return (
		<S.CardWrapper onClick={() => searchBook(id)}>
			<S.BookImage src={image ? image : missing}/>
			<S.BookInfoContainer>
				<S.BookInfoTop>
					<S.BookTitle>{title}</S.BookTitle>
					{author.map( (item) => <S.BookAuthor key={Math.random()}>{item}</S.BookAuthor> )}
				</S.BookInfoTop>
				<S.BookInfoBottom>
					<S.BookInfo>{pags} páginas</S.BookInfo>
					<S.BookInfo>{publisher}</S.BookInfo>
					<S.BookInfo>{datePublished}</S.BookInfo>
				</S.BookInfoBottom>
			</S.BookInfoContainer>
		</S.CardWrapper>
	);
};

export default BookCard;
