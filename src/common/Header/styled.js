import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  margin: 0;
  position: sticky;
  top:-1px;
  z-index: 9;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 300px;
  height: auto;
  opacity: 0.6;
  transition: 1s;
  margin: -20px 0 0 50px;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin: -20px 16px 0 16px;
    max-width: 250px;  
    height: auto;
  };  

  &:hover{
    opacity: 1;
    cursor: pointer;
  };
  
  &:active{
   transform: scale(1.5);
  };
`;

export const Menu = styled.div`
  margin: 0;
  height: fit-content;;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.menuText};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  transition: 0.5s;
  width: 100%;

  &:hover{
    color: ${({ theme }) => theme.color.mainText}; 
  };
`;

export const MenuFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  margin: 0;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  padding: 10px 0;
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    background-color: ${({ theme }) => theme.color.menuBackground};
  };
`;

export const MenuElement = styled.div`
  margin-right: 50px;
`;

export const Box = styled.div`
  position: absolute;
  top:70px;
  align-self: flex-end;
  margin: 0 10px 0 0;
  &&{
    ${({ hideMenu }) => hideMenu && css`{
      visibility: hidden;
    }`};
  };
`;

export const SearchMovieInput = styled.input`
  text-align: center;
  padding: 8px;
  display: block;
  width: 200px;
  color: ${({ theme }) => theme.color.menuText};
  text-decoration:none;
  background: none;
  border-radius: 5px;
  border: 1px solid gray;
  margin: 0;
  cursor: pointer;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  transition: 0.5s;
  background-color: ${({ theme }) => theme.color.menuBackground};

  &:hover{
    color: ${({ theme }) => theme.color.mainText};
    };
  
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin-right: 20px;
  };
`;

export const ListOfMoviesComponent = styled.ul`
  margin: 0;
  text-align: center;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  text-decoration: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 5px;
  animation-name: rotateX;
  animation-duration: 0.5s;
  animation-timing-function: linear;     
  background-color: ${({ theme }) => theme.color.menuBackground};
  border: 1px solid gray;

  @keyframes rotateX {
    0% {
        opacity: 0;
        transform: rotateX(-90deg);
    }
    50% {
        transform: rotateX(-20deg);
    }
    100% {
        opacity: 1;
        transform: rotateX(0deg);
    };
  };
  
  &:hover{
    color: ${({ theme }) => theme.color.hoverRed};
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin-right: 20px;
  };
`;

export const NoSearchResultMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.menuBackground};
`;