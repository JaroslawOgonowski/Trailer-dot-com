import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;  
  gap: 22px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 30px;

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) { 
    align-items: center;
    justify-content: center;
  };
  
  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) { 
    gap:20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  };
  
  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    gap: 1vw;
  };
`;

export const Box = styled.a`
  background: none;
  border: none;
  width: fit-content;
  text-decoration: none;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color:${({ theme }) => theme.color.buttonBackground};
  color: ${({ theme }) => theme.color.secondaryText};
  border-radius: 32px;
  border: 3px solid ${({ theme }) => theme.color.buttonBorder};
  cursor: pointer;
  font-weight: 600;
  font-size: 21px;
  transition: 0.5s;
  
  &:hover{
    transform: scale(1.1);
    border: 3px solid ${({ theme }) => theme.color.buttonBorderHover};
    color: ${({ theme }) => theme.color.mainText};
  };
  
  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    width: 10vw;
    height: 2.5vw;
    border-radius: 2vw;
    font-size: 1vw;
  };
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 10px;
  margin-right: 20px;
  border-radius: 50%;
  border: 3px solid currentColor;
  width: 30px;
  height: 30px;
  
  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    width: 1.4vw;
    height: 1.4vw;
  };
`;