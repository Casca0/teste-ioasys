import React from 'react';
import * as S from './styled';
import missing from '../../../../images/missing-book.svg';
import { useBooksContext } from '../../../../contexts/BooksContext';

const BookPopup = ({img, title, authors, pags, publisher, published, lang, isbn10, isbn13, review}) => {
	const { setShowPopup } = useBooksContext();
	
	return (
		<S.PopupOverlay>
			<S.PopupContainer>
				<S.PopupImg src={img ? img : missing}/>
				<S.PopupWrapper>
					<S.PopupInfoBlock>
						<S.PopupTitle>{title}</S.PopupTitle>
						<S.PopupAuthors>{authors?.join(', ')}</S.PopupAuthors>
					</S.PopupInfoBlock>

					<S.PopupInfoWrapper>
						<S.PopupInfoTitlesLeft>
							<S.PopupInfoTitles>INFORMAÇÕES</S.PopupInfoTitles>
							<S.PopupInfoTitles>Páginas</S.PopupInfoTitles>
							<S.PopupInfoTitles>Editora</S.PopupInfoTitles>
							<S.PopupInfoTitles>Publicação</S.PopupInfoTitles>
							<S.PopupInfoTitles>Idioma</S.PopupInfoTitles>
							<S.PopupInfoTitles>Título Original</S.PopupInfoTitles>
							<S.PopupInfoTitles>ISBN-10</S.PopupInfoTitles>
							<S.PopupInfoTitles>ISBN-13</S.PopupInfoTitles>
						</S.PopupInfoTitlesLeft>

						<S.PopupInfoTitlesRight>
							<S.PopupInfos>{pags} páginas</S.PopupInfos>
							<S.PopupInfos>{publisher}</S.PopupInfos>
							<S.PopupInfos>{published}</S.PopupInfos>
							<S.PopupInfos>{lang}</S.PopupInfos>
							<S.PopupInfos>{title}</S.PopupInfos>
							<S.PopupInfos>{isbn10}</S.PopupInfos>
							<S.PopupInfos>{isbn13}</S.PopupInfos>
						</S.PopupInfoTitlesRight>
					</S.PopupInfoWrapper>

					<S.PopupReviewContainer>
						<S.PopupReviewTitle>RESENHA DA EDITORA</S.PopupReviewTitle>
						<S.PopupReview>{review}</S.PopupReview>
					</S.PopupReviewContainer>
				</S.PopupWrapper>

			</S.PopupContainer>
			<S.PopupClose onClick={() => setShowPopup(false)}>X</S.PopupClose>
		</S.PopupOverlay>
	);
};

export default BookPopup;