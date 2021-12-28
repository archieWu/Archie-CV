import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    position: relative;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 62.5%;
    overflow: hidden;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Montserrat', 'Noto Sans TC', 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    overflow: hidden;
    color: #ffffff;
    background-color: #202060;
  }

  #root {
    display: flex;
    height: 100%;
  }
`;

export default GlobalStyle;
