import React from 'react';
import { useBooksContext } from '../../contexts/BooksContext';
import Desktop from '../Responsive/Desktop';
import Mobile from '../Responsive/Mobile';
import * as S from './styled';

const Pagination = () => {
	const { totalPages, page, setPage } = useBooksContext();

	function next() {
		if (page + 1 <= totalPages) {
			setPage(page + 1);
		}
	}

	function prev() {
		if (page - 1 > 0) {
			setPage(page - 1);
		}
	}

	const isFirstPage = page === 1;
	const isFinalPage = page === Math.trunc(totalPages);

	return (
		<S.PaginationWrapper>
			<Desktop>
				Página <strong>{page}</strong> de <strong>{Math.trunc(totalPages)}</strong>
				<S.PrevButton className={isFirstPage ? 'is--disabled' : ''} disabled={isFirstPage} onClick={() => prev()} />
				<S.NextButton className={isFinalPage ? 'is--disabled' : ''} disabled={isFinalPage} onClick={() => next()} />
			</Desktop>
			<Mobile>
				<S.PrevButton className={isFirstPage ? 'is--disabled' : ''} disabled={isFirstPage} onClick={() => prev()} />
				Página <strong>{page}</strong> de <strong>{Math.trunc(totalPages)}</strong>
				<S.NextButton className={isFinalPage ? 'is--disabled' : ''} disabled={isFinalPage} onClick={() => next()} />
			</Mobile>
		</S.PaginationWrapper>
	);
};

export default Pagination;