import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Netflix Sans', sans-serif;
  transition: 1s;
};

*, ::after, ::before {
  box-sizing: inherit;
};
`