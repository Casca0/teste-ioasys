import React from 'react';
import Header from '../../containers/Header';
import BookList from '../../containers/BookList';

import * as S from './styled';

const BooksPage = () => {
	return (
		<>
			<S.Styles />
			<S.MainWrapper>
				<Header />
				<BookList />
			</S.MainWrapper>
		</>
	);
};

export default BooksPage;