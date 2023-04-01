import styled, { css } from "styled-components";

export const StyledPage = styled.ul`
  list-style: none;
  margin: 146px 100px 200px 100px;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) {
    margin: 48px 16px 0 16px;
    padding: 0;
  };
`;

export const Marker = styled.div`
  position: absolute;
  top:200px;
  
  &&{
    ${({ hideTrailer }) => hideTrailer && css`{
      display: none;
    }`};
  };
`;

export const MovieBox = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 100px;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.fullPage}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  };
  
  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) {
    margin-bottom: 50px;
  };
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.mainText};
  font-family: 'Fredericka the Great', cursive;                                               
  font-style: normal;
  width: 100%;
  font-weight: 400;
  font-size: 90px;
  margin: 0;
  padding-bottom: 130px;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) { 
    align-self: center;
    text-align: center;
    padding-bottom: 0;
    font-size: 12vw;
    margin-bottom: 80px;
  };
`;

export const Trailer = styled.iframe`
  width: 100%;
  height: 22vw;
  
  &&{
    ${({ hideTrailer }) => hideTrailer && css`{
      display: none;
    }`};
  };
  
  @media(max-width: ${({ theme }) => theme.breakPoint.fullPage}px) {
    width: 600px;
    height: 350px;
  };
  
  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) { 
    align-self: center;
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) { 
    width: 500px;
    height: 300px;
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) { 
    width: 80vw;
    height:30vh;
    align-self: center;
  };
  `;

export const Box = styled.div`
  margin-bottom: 50px;
`;

export const InfoMarker = styled.div`
  position: relative;
  top:-80px;
`;

export const Avaible = styled.div`
  font-size: 22px;
  position: relative;
  bottom: 10px;
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