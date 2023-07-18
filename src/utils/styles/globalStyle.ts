import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Inter:wght@300;400;500;600;700;800&display=swap');

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    line-height: 1.5;
    font-family: Hiragino Kaku Gothic Pro;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #414141;
    font-weight: 300;
     background-color: #ffffff;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0 0 10px;
    overflow-wrap: break-word;
  }

  a,
  button {
    transition: all 0.3s ease;
    color: inherit;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    border: 0;
    cursor: pointer;
    font-family: inherit;
  }

  input, button, textarea, select {
    font: inherit;
    outline: none;
  }

  img, video, canvas, svg {
    width: 100%;
    max-width: 100%;
    display: block;
  }

  .font-comfortaa {
    font-family: 'Comfortaa', cursive;
  }

  .font-inter {
    font-family: 'Inter', sans-serif;
  }

  .container {
    max-width: 1000px;
    padding: 0 20px;
    width: 100%;
    margin: 0 auto;
  }

  .section {
    padding: 24px 0;

    &:first-child {
      padding-top: 56px;
    }

    &:last-child {
      padding-bottom: 56px;
    }
  }
`;

export default GlobalStyle;
