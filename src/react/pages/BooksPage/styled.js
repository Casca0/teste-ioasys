import styled, { createGlobalStyle } from 'styled-components';
import background from '../../images/books-background.svg';

export const MainWrapper = styled.div`
	height: 100%;
	width: 100%;
`;

export const Styles = createGlobalStyle`
	body {
		background: url(${background});
	}
`;