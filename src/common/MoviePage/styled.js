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

export const MovieInformation = styled.div`
font-family: 'Noto Sans Sinhala', sans-serif;
  font-style: normal;
  color: ${({ theme }) => theme.color.mainText};
  display: flex;
  gap: 45px;
  padding: 8px;
  margin-bottom: 60px;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    flex-direction: column;
  };
  
  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) {
    background: linear-gradient(${({ theme }) => theme.color.buttonBackground}, ${({ theme }) => theme.color.black});
    padding: 8px;
  };
`;

export const Specification = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tags = styled.div`
  align-items: center;
  color:${({ theme }) => theme.color.mainText};
  font-family: 'Noto Sans Sinhala', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  gap: 8px;
`;

export const Year = styled.div`
  width: max-content;
`;

export const AgeGroup = styled.div`
  font-size: 14px;
  padding-left: 4px;
  padding-right: 4px;
  width: fit-content; 
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Episodes = styled.div`
  width: fit-content; 
  display: flex;
  align-items: center;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) { 
    font-size: 8px;
    text-align: center;
};
`;

export const HighestStandard = styled.div`
  font-size: 11.2px;
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};
  border-radius: 3px;
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AudioStream = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Subtitles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  padding-top: 2px;
`;

export const Top = styled.div`
  margin-top: 16px;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: white;
`;

export const Subtitle = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

export const Description = styled.div`
  margin-top: 16px;
  font-size: 16px;
  max-width: 470px;
`;

export const MovieData = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0;
  font-size: 14px;
 `;

export const Label = styled.div`
  color:${({ theme }) => theme.color.secondaryText};
  max-width: 240px;
  margin-bottom: 14px;
`;

export const OtherInfo = styled.span`
  color: white;
  margin-bottom: 14px;
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