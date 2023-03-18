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
  animation-direction: alternate;
  animation-iteration-count: 1;
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
    0%, 25%{background-image: url(https://hdwallpaperim.com/wp-content/uploads/2017/08/23/472571-film_reel-movies-748x403.jpg);    
    background-position-x: 50%;}
    30%, 60%{background-image: url(https://magicmomentsstudio.pl/wp-content/uploads/2021/05/behind-the-scenes-of-video-production-in-studio-which-filming-a-online-movie-with-professional-set-u-1024x434.jpg);
    background-position-x: 50%;}
    65%, 90% {background-image: url(https://wallpaperaccess.com/full/2063938.png);
    background-position-x: 30%;}
    95%, 100%{background-image: url(https://hdwallpaperim.com/wp-content/uploads/2017/08/23/472571-film_reel-movies-748x403.jpg);
    background-position-x:50%;}   
};
`;