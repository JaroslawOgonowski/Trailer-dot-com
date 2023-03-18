import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 54px 100px 0 100px;
  width: 300px;

  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) {
    margin: 48px 16px 0 16px;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) {
    margin: 60px 16px 0 16px;
    width: 150px;
  };
  };
  `;

export const Options = styled.div`
  text-decoration: none;
  position: fixed;
  top:30px;
  right: 40px;
  display: flex;
  gap: 30px;
  animation-name: optionsAnimation;
  animation-duration: 2s;
  animation-timing-function: linear;
  
  @keyframes optionsAnimation {
    0%, 90%{opacity: 0%;}
    100%{opacity: 100%}   
  };
  
  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) {
    gap: 20px;
    top:8px;
    right: 8px;
  };
`;

export const OptionsButton = styled.a`
  color: ${({ theme }) => theme.color.menuText};
  text-decoration:none;
  background: none;
  border: none;
  cursor: pointer;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  transition: 0.5s;
  
  &:hover{
    transform: scale(1.2);
    color: ${({ theme }) => theme.color.mainText};
  };
`;

export const Menu = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  text-decoration:none;
  background: none;
  border: none;
  cursor: pointer;
  gap: 20px;
  color: ${({ theme }) => theme.color.menuText};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  transition: 0.5s;

  &:hover{
    color: ${({ theme }) => theme.color.mainText};
    transform: scale(1.2);
    };
`

export const Item = styled.li`
  text-decoration: none;
  margin-top: 10px;
  animation-name: rotateX;
  animation-duration: 0.5s;
  animation-timing-function: linear; 
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

  &&{
    ${({ hide }) => hide && css`{
      display: none;
    }`};
  };
`;