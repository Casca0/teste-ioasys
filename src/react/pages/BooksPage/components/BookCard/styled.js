import styled from 'styled-components';

export const CardWrapper = styled.div`
	background: #fff;
	display: flex;
	box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
	cursor: pointer;
	width: 272px;
	min-height: 160px;
	border-radius: 4px;
	padding: 23px 15px;

	@media screen and (max-width: 768px){
		width: 100%;
	}

	&:hover {
		box-shadow: 0px 16px 80px rgba(84, 16, 95, 0.32);
	}
`;

export const BookImage = styled.img`
	height: 122px;
	width: 81px;
	margin-right: 20px;
	filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`;

export const BookTitle = styled.h3`
	font-family: 'Heebo', sans-serif;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
`;

export const BookAuthor = styled.p`
	font-family: 'Heebo', sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 20px;
	color: #AB2680;
	display: block;
`;

export const BookInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const BookInfo = styled.div`
	font-family: 'Heebo', sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 20px;
	color: #999999;
`;

export const BookInfoTop = styled.span``;

export const BookInfoBottom = styled.span`

`;