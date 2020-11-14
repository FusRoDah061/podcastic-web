import { createGlobalStyle } from 'styled-components';
import { colors, dims } from './variables';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
    overflow: hidden;
  }

  body {
    background: ${colors.white};
    color: ${colors.textLight};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button,
  textarea {
    font: 400 1.6rem Roboto;
    color: ${colors.textLight};
  }

  input::placeholder {
    color: ${colors.textPlaceholder};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  @media (min-width:  ${dims.tabletBreak}) {
    :root {
      font-size: 62.5%;
    }
  }

  /* Browser scrollbar styling */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${colors.textDark} ${colors.textPlaceholder};
  }

  /* Chrome/Edge/Safari */
  *::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }
  *::-webkit-scrollbar-track {
    background: ${colors.textLight};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${colors.textPlaceholder};
  }
`;
