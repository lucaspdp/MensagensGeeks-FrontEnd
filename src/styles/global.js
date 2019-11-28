import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  html, body, #root{
    min-height: 100%;
  }
  body{
    background: linear-gradient(#230808, #5A1616);
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button{
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  button{
    cursor: pointer;
  }
`;