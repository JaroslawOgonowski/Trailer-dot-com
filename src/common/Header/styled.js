import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 54px 100px 0 100px;

  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) {
    margin: 48px 16px 0 16px;
  };
`

export const Options = styled.div`
  position: fixed;
  top:54px;
  right: 50px;
  display: flex;
  gap: 30px;
  animation-name: optionsAnimation;
  animation-duration: 1s;
  animation-timing-function: linear;
  
  @keyframes optionsAnimation {
    0%, 90%{opacity: 0%;}
    100%{opacity: 100%}   
  };
  
  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) {
    margin-top: 30px;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 20px;
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

  &:hover{
    color: ${({ theme }) => theme.color.hoverRed};
  };

  &&{
    ${({ hide }) => hide && css`{
      display: none;
    }`};
  };
`;