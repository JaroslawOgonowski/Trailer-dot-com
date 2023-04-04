import styled from "styled-components";

export const TagsContainer = styled.div`
  align-items: center;
  color:${({ theme }) => theme.color.mainText};
  font-family: 'Noto Sans Sinhala', sans-serif;
  font-style: normal;
  font-weight: 400;
  display: flex;
  gap: 8px;
`;

export const Year = styled.div`
  width: max-content;
    
  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    font-size: 0.9vw;
    margin-right: 0.3vw;
  };
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
  
  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    font-size: 0.9vw;
  };
`;

export const Episodes = styled.div`
  width: fit-content; 
  display: flex;
  align-items: center;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) { 
    font-size: 8px;
    text-align: center;
  };

  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    font-size: 0.9vw;
    margin: 0 0.3vw;
    wrap: none;
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
    
  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    font-size: 0.9vw;
  };
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
    
  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    width: 2vw;
    height: 2vw;
  };
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