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

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle;