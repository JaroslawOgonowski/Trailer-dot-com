import styled from "styled-components";

export const Box = styled.div`
  margin-bottom: 50px;
`;

export const InfoMarker = styled.div`
  position: relative;
  top:-25px;
`;

export const Avaible = styled.div`
  font-size: 22px;
  position: relative;
  bottom: -10px;
  left:0px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    flex-wrap : wrap;
  };
`;

export const StreamingLogo = styled.img`
  width:180px;
  height: auto;
  margin-top: 16px;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: 100px;
  };
`;