import styled, { createGlobalStyle } from 'styled-components';

import background from '../../images/books-background.svg';
import mobile from '../../images/books-background-mobile.svg';

export const MainWrapper = styled.div`
	height: 100%;
	width: 100%;
`;

export const Styles = createGlobalStyle`
	body {
		background: url(${background}) no-repeat;
		background-position: center;
		background-size: cover;
		height: 100%;
		position: relative;

		@media screen and (max-width: 768px){
			background: url(${mobile}) no-repeat;
			background-position: center;
			background-size: cover;
		}
	}
`;