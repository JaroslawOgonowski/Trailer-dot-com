import { createGlobalStyle } from "styled-components";
import firstImage from "./backgroundImage/firstImage.png"
import secondImage from "./backgroundImage/secondImage.png"
import thirdImage from "./backgroundImage/thirdImage.png"

export const GlobalStyle = createGlobalStyle`
html {
  margin: 0 auto;
  background-image: url("${firstImage}");
  background-repeat: no-repeat;
  background-size: cover;  
  animation-name: backgroundAnimation;
  animation-duration: 35s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
@keyframes backgroundAnimation {
    0%, 25%{background-image: url("${firstImage}");
    background-position-x: 75%;}
    30%, 60%{background-image: url("${secondImage}");
    background-position-x: center;}
    65%, 90% {background-image: url("${thirdImage}");
    background-position-x: center;}
    95%, 100%{background-image: url("${firstImage}");
    background-position-x: 75%;}   
};
  font-family: 'Netflix Sans', sans-serif;
  transition: 1s;
};

*, ::after, ::before {
  box-sizing: inherit;
};
`