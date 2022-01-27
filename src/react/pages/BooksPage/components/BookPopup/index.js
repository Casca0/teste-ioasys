import React from 'react';
import * as S from './styled';

export const BookPopup = (img, title, authors, pags, publisher, published, lang, isbn10, isbn13, review) => {
	return (
		<S.PopupContainer>
			<S.PopupImg src={img} />
			<S.PopupTitle>{title}</S.PopupTitle>
			<S.PopupAuthors>{authors}</S.PopupAuthors>

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

				<S.PopupInfoTitlesLeft>
					<S.PopupInfos>{pags} páginas</S.PopupInfos>
					<S.PopupInfos>{publisher}</S.PopupInfos>
					<S.PopupInfos>{published}</S.PopupInfos>
					<S.PopupInfos>{lang}</S.PopupInfos>
					<S.PopupInfos>{isbn10}</S.PopupInfos>
					<S.PopupInfos>{isbn13}</S.PopupInfos>
				</S.PopupInfoTitlesLeft>
			</S.PopupInfoWrapper>

			<S.PopupReviewContainer>
				<S.PopupReviewTitle>RESENHA DA EDITORA</S.PopupReviewTitle>
				<S.PopupReview>{review}</S.PopupReview>
			</S.PopupReviewContainer>

		</S.PopupContainer>
	);
};