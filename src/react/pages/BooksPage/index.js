import React from 'react';
import Header from '../../containers/Header';
import BookList from '../../containers/BookList';
import BookPopup from './components/BookPopup';
import Pagination from '../../components/Pagination';

import * as S from './styled';
import { useBooksContext } from '../../contexts/BooksContext';

const BooksPage = () => {
	const { showPopup, bookInfo } = useBooksContext();

	return (
		<>
			<S.Styles />
			<S.MainWrapper>
				<Header />
				<BookList />
				<Pagination />
				{showPopup && <BookPopup
					key={bookInfo?.id}
					img={bookInfo?.imageUrl}
					title={bookInfo?.title}
					authors={bookInfo?.authors}
					pags={bookInfo?.pageCount}
					publisher={bookInfo?.publisher}
					published={bookInfo?.published}
					lang={bookInfo?.language}
					isbn10={bookInfo?.isbn10}
					isbn13={bookInfo?.isbn13}
					review={bookInfo?.description}
					id={bookInfo?.id}
				/>}
			</S.MainWrapper>
		</>
	);
};

export default BooksPage;