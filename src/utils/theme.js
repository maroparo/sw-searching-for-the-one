import { createGlobalStyle, css } from "styled-components";
import StarJedi from "assets/fotns/star-jedi.ttf";
import Soloist from "assets/fotns/soloist.otf";

const appTheme = {
  FontPrimary:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',  sans-serif",
  Base: "#5C677D",
  Dark: "#33415C",
  BaseUnit: 8,
};

export const sizes = {
  hd: 1440,
  desktopLg: 1240,
  desktop: 1064,
  tablet: 768,
  phoneLg: 510,
  phone: 374,
  phoneSm: 320,
};

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
const calcEm = (pixels) => `${pixels / 16}em`;

const customQueries = {
  phoneSmToLg: `@media (max-width:${calcEm(
    sizes.phoneLg
  )}) and (min-width:${calcEm(sizes.phoneSm)})`,
  phoneSmToTablet: `@media (max-width:${calcEm(
    sizes.phoneSm
  )}) and (min-width:${calcEm(sizes.tablet)})`,
};

export const media = Object.keys(sizes).reduce((accumulator, size) => {
  accumulator[size] = `@media (min-width: ${calcEm(sizes[size])})`;
  return accumulator;
}, customQueries);

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body { 
    min-height: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${({ theme }) => theme.FontPrimary};
  }
  
  @font-face {
    font-family: StarJedi;
    src: url(${StarJedi}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }  
  
  @font-face {
    font-family: Soloist;
    src: url(${Soloist}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  
`;

export const flexCenterContent = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default appTheme;
