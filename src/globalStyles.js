import { createGlobalStyle, css } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    --dark-blue: #0C0D34;
    --light-blue: #7B7C8C;
    --white: #fafafa;
    --red: #fe0222;
    --sky: #2ECDCD;
    --gray: #ACACAC;
    --dark-gray: #A5A5A5;
    --text-first-color: #F6F6F6;
    --container-bg: #F2F5F9;
    --modal-bg-color: #fff;
    --pink: #ECEDEA;
    --btn-color: #F8FAFC;
    --btn-text-first-color: #D9D9D9;
    --loading-bar-color: #D9D9D9;
    --line-color: #D9D9D9;
    --shadow-color: #000000a1;
    --blur: #747474f5;
    --input-bg: #D9D9D9;

    --font-weight-thin: 100;
    --font-weight-extra-light: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;
    --font-weight-black: 900;

    --transition: .5s
  }
`;

const breakpoints = {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
};

export const devices = {
    xs: `(min-width: ${breakpoints.xs})`,
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
    xl: `(min-width: ${breakpoints.xl})`,
    "2xl": `(min-width: ${breakpoints["2xl"]})`,
}

export const media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)}
      }
    `;
    return acc;
}, {});