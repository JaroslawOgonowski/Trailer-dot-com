import styled from "styled-components";

export const MovieInformationContainer = styled.div`
font-family: 'Noto Sans Sinhala', sans-serif;
  font-style: normal;
  color: ${({ theme }) => theme.color.mainText};
  background: ${({ theme }) => theme.color.buttonBackground};
  display: flex;
  gap: 45px;
  padding: 8px;
  margin-bottom: 60px;
  border-radius: 5px;
  
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