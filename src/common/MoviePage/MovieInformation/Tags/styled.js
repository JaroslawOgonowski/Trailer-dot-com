import styled from "styled-components";

export const TagsContainer = styled.div`
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