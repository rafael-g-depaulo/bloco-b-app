import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    min-height: 100%;

    font-family: Calibri;
    font-size: ${({ theme }) => theme.fontSize};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
  }

`

export default GlobalStyles