import React from 'react';

import * as S from './styled';

const BookCard = ({ image, title, author, info }) => {
	return (
		<S.CardWrapper>
			<S.BookImage src={image}/>
			<S.BookInfoContainer>
				<S.BookTitle>{title}</S.BookTitle>
				<S.BookAuthor>{author.map( (item) => item )}</S.BookAuthor>
				<S.BookInfo>{info}</S.BookInfo>
			</S.BookInfoContainer>
		</S.CardWrapper>
	);
};

export default BookCard;