import { createGlobalStyle } from 'styled-components';
import image from './images/background.svg';

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${image});
  }
`;

export default GlobalStyle;