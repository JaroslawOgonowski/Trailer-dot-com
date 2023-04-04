import styled, { css } from "styled-components";

export const Marker = styled.div`
  position: absolute;
  top:0px;
  
  &&{
    ${({ hideTrailer }) => hideTrailer && css`{
      display: none;
    }`};
  };
`;

export const MovieBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  
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
  font-size: 80px;
  margin: 50px 0 0 0;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) { 
    align-self: center;
    text-align: center;
    padding-bottom: 0;
    font-size: 12vw;
  };
`;

export const Trailer = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;    
  margin: 50px 0;
  &&{
    ${({ hideTrailer }) => hideTrailer && css`{
      display: none;
    }`};
  };
  
  @media(max-width: ${({ theme }) => theme.breakPoint.fullPage}px) {
    width: 600px;
  };
  
  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) { 
    align-self: center;
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) { 
    width: 500px;
    margin 0;
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) { 
    width: 80vw;
    align-self: center;
  };
  `;