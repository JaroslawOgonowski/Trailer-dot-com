import styled, { css } from "styled-components";

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