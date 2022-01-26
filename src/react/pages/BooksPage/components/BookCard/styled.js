import styled from 'styled-components';

export const CardWrapper = styled.div`
	background: #fff;
	display: flex;
	box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
	cursor: pointer;
	width: 272px;
	height: 160px;

	&:hover {
		box-shadow: 0px 16px 80px rgba(84, 16, 95, 0.32);
	}
`;

export const BookImage = styled.image`
	height: 122px;
	width: 81px;
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
`;

export const BookInfoContainer = styled.div``;

export const BookInfo = styled.div`
	font-family: 'Heebo', sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 20px;
	color: #999999;
`;