import styled, { createGlobalStyle } from 'styled-components';
import background from '../../images/books-background.svg';

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
	}
`;