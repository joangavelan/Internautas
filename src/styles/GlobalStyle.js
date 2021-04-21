import { createGlobalStyle } from 'styled-components/macro'
import theme from './theme'
const { fonts } = theme;

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box
  }

  @font-face {
    font-family: 'Neue Haas';
    src: local('Neue Haas'), url('../fonts/NeueHaasDisplay-Roman.ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Neue Haas';
    src: local('Neue Haas'), url('../fonts/NeueHaasDisplay-Mediu.ttf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Neue Haas';
    src: local('Neue Haas'), url('../fonts/NeueHaasDisplay-Black.ttf');
    font-weight: 700;
  }

  body {
    font-family: ${fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
`

export default GlobalStyle;