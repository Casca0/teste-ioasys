import styled from 'styled-components';

import quotes from '../../../../images/Quotes.svg';

export const PopupOverlay = styled.section`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopupContainer = styled.div`
	background: #FFFFFF;
	border-radius: 4px;
	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: max-content;
	padding: 48px;

	@media screen and (max-width: 768px){
		flex-direction: column;
		width: 340px;
		padding: 24px;
		height: 100%;
		position: none;
		margin: 64px 0;
	}
`;

export const PopupInfoBlock = styled.section`
	display: flex;
	flex-direction: column;
`;

export const PopupInfoWrapper = styled.section`
	display: flex;
`;

export const PopupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 15px;
	justify-content: space-between;

	@media screen and (max-width: 768px){
		margin-left: 0;
	}
`;

export const PopupImg = styled.img`
	width: 350px;
	height: 510px;
	filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
	margin-right: 48px;

	@media screen and (max-width: 768px){
		width: 240px;
		height: 350px;
		margin-right: auto;
		margin-left: auto;
	}
`;

export const PopupTitle = styled.h1`
	font-style: normal;
	font-weight: 500;
	font-size: 28px;
	line-height: 40px;
`;

export const PopupAuthors = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 20px;
	color: #AB2680;
`;

export const PopupInfoTitlesLeft = styled.div``;

export const PopupInfoTitlesRight = styled.div`
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	margin-left: auto;
	margin-top: auto;
`;

export const PopupInfoTitles = styled.section`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	color: #333333;

	&:first-child {
		margin-bottom: 16px;
	}
`;

export const PopupInfos = styled.section`
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 20px;
	text-align: right;
	color: #999999;
`;

export const PopupReviewContainer = styled.section`
	width: 400px;
	p {
		text-indent: 24px;
	}

	@media screen and (max-width: 768px){
		width: fit-content;
	}
`;

export const PopupReviewTitle = styled.h3`
	margin-bottom: 14px;

	@media screen and (max-width: 768px){
		margin-top: 30px;
	}
`;

export const PopupReview = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 20px;
	color: #999999;
	display: flex;

	&::before{
		content: '';
		background: url(${quotes}) no-repeat;
		display: block;
		width: 18px;
		height: 14px;
		position: absolute;
	}
`;

export const PopupClose = styled.div`
	border: 1px solid rgba(51, 51, 51, 0.2);
	background-color: #fff;
	margin: 20px;
	max-width: 45px;
	max-height: 45px;
	border-radius: 50px;
	cursor: pointer;
	margin-left: auto;
	padding: 12px;
	text-align: center;

	@media screen and (max-width: 768px){
		position: fixed;
		right: 0;
	}
`;

