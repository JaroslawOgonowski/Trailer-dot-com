import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-top:80px;
  width: 100%;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) {
    width:100%;
    @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
  height: fit-content;
  };  
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

export const ActorRole = styled.div`
  text-align: center;
  height: 25px;
`;

export const CarouselButton = styled.button`
  cursor: pointer;
  position: fixed;
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
margin-top: 25px;
  width: 150px;
  //height: 600px;
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
//height: 700px;
  };  
`;

export const ActorDetail = styled.div`
background-color:${({ theme }) => theme.color.menuBackground};
color:${({ theme }) => theme.color.mainText};
width: 100%;
height: 500px;
margin: 50px 0;
justify-content: center;
align-self: center;
position: relative;
bottom: 20px;
border-radius:5px;
@media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
  bottom: 20px;
}
`;

export const DetailPhoto = styled.img` 
width: 30%;
height: 100%;
`

export const DetailName = styled.div``

export const DetailRole = styled.div``

export const DetailFacts = styled.div``