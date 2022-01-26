import { createGlobalStyle } from 'styled-components';
import image from './images/background.svg';
import backgroundMobile from './images/background-mobile.svg';

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${image}) no-repeat;
		background-position: center;
		background-size: cover;
		height: 100%;

		@media screen and (max-width: 768px){
			background: url(${backgroundMobile}) no-repeat;
		}
  }
`;

export default GlobalStyle;