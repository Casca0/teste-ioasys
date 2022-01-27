import styled from 'styled-components';

export const PopupContainer = styled.div`
	background: #FFFFFF;
	border-radius: 4px;
	display: flex;
	flex-direction: row;
	position: absolute;
`;

export const PopupInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const PopupImg = styled.img`
	width: 350px;
	height: 510px;
	filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
`;

export const PopupTitle = styled.h1`
	font-family: Heebo;
	font-style: normal;
	font-weight: 500;
	font-size: 28px;
	line-height: 40px;
`;

export const PopupAuthors = styled.p`
	font-family: Heebo;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 20px;
	color: #AB2680;
`;

export const PopupInfoTitlesLeft = styled.div``;

export const PopupInfoTitlesRight = styled.div``;

export const PopupInfoTitles = styled.section`
	font-family: Heebo;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 28px;
	color: #333333;
`;

export const PopupInfos = styled.section`
	font-family: Heebo;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 20px;
	text-align: right;
	color: #999999;
`;

export const PopupReviewContainer = styled.section``;

export const PopupReviewTitle = styled.h3`
	font-family: Heebo;
`;

export const PopupReview = styled.section`
	font-family: Heebo;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 20px;
	width: 100%;
`;

