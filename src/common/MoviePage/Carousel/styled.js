import styled from "styled-components";

export const Wrapper = styled.div`
margin-top:80px;
`;
export const AliceCarousel = styled.div`
`;

export const Actor = styled.div`
color:${({ theme }) => theme.color.mainText};
display: flex;
flex-direction: column;
align-items: center;
`;

export const ActorPhoto = styled.img`
width: 150px;
height: 180px;
border-radius: 5px;
object-fit: cover;
padding: 2px;
`;

export const ActorName = styled.div`
text-align: center
`;

export const ActorRole = styled.div`
text-align: center
`;

export const PreviousButton = styled.button`
position: absolute;
top:25%;
left:0;
background:none;
`;

export const NextButton = styled.button`
position: absolute;
top:25%;
right:0
`;

export const Box = styled.div`
width: 150px;
height: 250px;
`;