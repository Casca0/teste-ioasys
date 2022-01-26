import styled from 'styled-components';

export const LoginWrapper = styled.main`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100vh;
`;

export const LoginContainer = styled.div`
	padding-left: 115px;

	@media screen and (max-width: 768px) {
		padding-left: 0px;
		margin-left: auto;
		margin-right: auto;
	}
`;

export const LoginTitle = styled.h1`
	color: white;
	font-family: 'Heebo', sans-serif;
	font-size: 28px;
	font-weight: 100;
	padding-bottom: 50px;

	strong {
		font-weight: 600;
		font-size: 34px !important;
		padding-right: 15px;
	}
`;