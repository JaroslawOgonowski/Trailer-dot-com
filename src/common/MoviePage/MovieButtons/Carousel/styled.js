import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-top:80px;
  width: 90%;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) {
    width:100%;  
  };
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
`;

export const ActorPhoto = styled.img`
  width: 150px;
  height: 180px;
  border-radius: 5px;
  object-fit: cover;
  padding: 2px;
  filter: grayscale(90%);
  transition: 1.6s;
  
  &:hover{
    filter: grayscale(0%);
  };
`;

export const ActorName = styled.div`
  text-align: center;
`;

export const ActorRole = styled.div`
  text-align: center;
`;

export const ActorFacts = styled.div`
text-align: center;
position: absolute;
bottom: 0;
left: 0;
width: 230px;
padding: 20px;
height: auto;
align-self: auto;
background-color: #070303c1;
border-radius: 4px;
color: white;
margin-top: 30px;
display: none;

${Actor}:hover &{
display: flex;
justify-content: center;
position: relative;
bottom:0;
};
`;

export const CarouselButton = styled.button`
  cursor: pointer;
  position: absolute;
  background-color: #000000ad;
  border: none;
  top:0;
  height: 236px;
  opacity:0.5;
  transition: 0.5s;
  box-shadow: -13px 3px 33px 4px rgba(0, 0, 0, 0.81);

  &:hover{
    opacity: 1;
  };

  &&{ 
    ${({ next }) => next && css`
  right: 0;
  `}
  };

  &&{ 
    ${({ previous }) => previous && css`
  transform: rotate(180deg);
  left:0;
  `}
  };
`;

export const Box = styled.div`
  width: 150px;
  height: 600px;
`;