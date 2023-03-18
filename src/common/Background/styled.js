import styled from "styled-components";

export const StyledBackground = styled.li`
  list-style: none;
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;  
  animation-name: ${(props) => props.name};
  animation-duration: 35s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes ${(props) => props.name} {
    0%, 25%{background-image: url(${(props) => props.firstBackground});    
    background-position-x: ${(props) => props.firstPositionX};}
    30%, 60%{background-image: url(${(props) => props.secondBackground});
    background-position-x: ${(props) => props.secondPositionX};}
    65%, 90% {background-image: url(${(props) => props.thirdBackground});
    background-position-x: (${(props) => props.thirdBackground});}
    95%, 100%{background-image: url(${(props) => props.firstBackground});
    background-position-x:${(props) => props.firstPositionX};}   
  };
`;

export const ClasicBackground= styled.li`
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;  
  animation-name: classicBackgroundAnimation;
  animation-duration: 35s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes classicBackgroundAnimation {
    0%, 25%{background-image: url(https://wallpaperaccess.com/full/2063938.png);    
    background-position-x: 50%;}
    30%, 60%{background-image: url(https://blog.frame.io/wp-content/uploads/2022/04/B0414-featured-image-atomos-v2-1300x731.jpg);
    background-position-x: 50%;}
    65%, 90% {background-image: url(https://wallpapercave.com/wp/2TrmmSi.jpg);
    background-position-x: 30%;}
    95%, 100%{background-image: url(https://wallpaperaccess.com/full/2063938.png);
    background-position-x:50%;}   
};
`;