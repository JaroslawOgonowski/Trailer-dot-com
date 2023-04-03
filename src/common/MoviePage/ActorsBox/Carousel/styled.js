import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-top:80px;
  width: 100%;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) {
    width:100%;
  };  
  
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    height: fit-content;
    margin-top: 30px;
  };  
`;

export const StyledCarousel = styled.div`
background-color:${({ theme }) => theme.color.buttonBackground};
border-radius: 5px;
margin: 0;
padding: 0;
`;

export const Actor = styled.div`
  color:${({ theme }) => theme.color.secondaryText};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1s;
  cursor: pointer;
  
  &:hover{
    transform: scale(1.05);
    color:${({ theme }) => theme.color.mainText}
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
  width: 100%;

  };
`;

export const ActorPhoto = styled.img`
  border-radius: 5px;
  object-fit: cover;
  padding: 2px;
  filter: grayscale(90%);
  transition: 1.6s;
  
  &:hover{
    filter: grayscale(0%);
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
  width: 100%;
  height: 50vw;
  object-position: 50% 20% 
  };
`;

export const ActorRole = styled.div`
  text-align: center;
  height: 42px;
`;

export const ActorName = styled.div`
  display: none;

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    display: block;
  };
`;

export const ActorFacts = styled.div`
  display: none;

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    display: block;
    width: 95%;
  };
`;
export const CarouselButton = styled.button`
  cursor: pointer;
  position: absolute;
  top:15px;
  background-color:${({ theme }) => theme.color.menuBackground};
  box-shadow: -13px 3px 33px 4px rgba(0, 0, 0, 0.81);
  border: none; 
  height: 236px;
  opacity:0.5;
  transition: 0.5s;

  &:hover{
    opacity: 1;    
    transform: scale(1.1)
  };

  &&{ 
    ${({ next }) => next && css`
  right: 0;
  `}
  };

  &&{ 
    ${({ previous }) => previous && css`
  left:0;
  `}
  };
`;

export const Box = styled.div`
  margin-top: 25px;

  width: 150px; 
  
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: 90%;  
    margin-left:30px;
  };
`;

export const ActorDetail = styled.div`
  background-color:${({ theme }) => theme.color.menuBackground};
  color:${({ theme }) => theme.color.mainText};
  box-shadow: -13px 3px 33px 4px rgba(0, 0, 0, 1);
  width: 100%;
  height: auto;
  margin: 20px 0;
  justify-items: center;
  align-self: center;
  position: relative;
  bottom: 20px;
  border-radius:5px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  transition: 0.8s;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    display: none;
  };
`;

export const DetailPhoto = styled.img` 
  width: 100%;
  transition: 1s;
  height: 60vh;
  scale:0.95;  
  object-fit: cover;
  border-radius: 5px;
  object-position: 50% 20%;
`;

export const DetailTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  align-items: center;
  justify-content: flex-start;
  margin: 0 3vh 3vh;
`;

export const DetailName = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-top: 50px;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin: 0;
    font-size: 30px;
  };
`;

export const DetailRole = styled.h3`
  text-align: center;
  font-size: 28px;
  margin: 0;
  color:${({ theme }) => theme.color.secondaryText};
  
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 22px;
  };
`;

export const DetailFacts = styled.div`
  font-size: 20px;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 16px;
  };
`;

export const Item = styled.div` 
  width: fit-content;
`;

