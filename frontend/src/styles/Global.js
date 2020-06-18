import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px;
  }
  #root {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-image: url("laptop.jpg");
  }
  button {
    cursor: pointer;
  }
`