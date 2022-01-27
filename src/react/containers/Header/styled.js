import styled from 'styled-components';
import logout from '../../images/logout.svg';

export const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	padding-left: 115px;
	margin-bottom: 20px;
	@media screen and (max-width: 768px){
		padding-left: 16px;
		padding-top: 42px;
		width: 100%;
		position: relative;
	}
`;

export const HeaderTitle = styled.h1`
	font-family: 'Heebo', sans-serif;
	font-size: 28px;
	font-weight: 100;

	strong {
		font-weight: 600;
		font-size: 34px !important;
		padding-right: 15px;
	}
`;

export const HeaderUsername = styled.span`
	font-family: 'Heebo', sans-serif;
	font-size: 12px;
	line-height: 16px;
	text-align: right;
	position: absolute;
	right: 15%;
	top: 4%;

	@media screen and (max-width: 768px){
		display: none;
	}
`;

export const HeaderLogout = styled.div`
	border: 1px solid rgba(51, 51, 51, 0.2);
	border-radius: 50px;
	background: url(${logout}) no-repeat;
	background-position: center;
	padding: 15px;
	position: absolute;
	right: 10%;
	cursor: pointer;

	@media screen and (max-width: 768px){
		top: 55%;
		right: 16px;
	}
`;