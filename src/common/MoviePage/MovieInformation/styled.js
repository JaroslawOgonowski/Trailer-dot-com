import styled from "styled-components";

export const MovieInformationContainer = styled.div`
  max-width: 700px;
  font-family: 'Noto Sans Sinhala', sans-serif;
  font-style: normal;
  color: ${({ theme }) => theme.color.mainText};
  background: ${({ theme }) => theme.color.buttonBackground};
  display: flex;
  gap: 20px;
  padding: 8px;
  margin-bottom: 60px;
  border-radius: 5px;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    flex-direction: column;
    background: linear-gradient(${({ theme }) => theme.color.buttonBackground}, ${({ theme }) => theme.color.black});
  };

  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    max-width: 45vw;
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

  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    font-size: 1.2vw;
    margin-right: 0.3vw;
  };
`;

export const Subtitle = styled.div`
  font-size: 20px;
  margin-top: 20px;
  
  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    font-size: 1.8vw;
    margin-right: 2vw;
  };
`;

export const Description = styled.div`
  margin-top: 16px;
  font-size: 16px;
  max-width: 460px;
  
  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    font-size: 1.1vw;
    margin-right: 2vw;
    max-width: 22vw;
  };
`;

export const MovieData = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0;
  font-size: 14px;
  justify-content: flex-end;
  
  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    font-size: 1.1vw;
    margin-right: 2vw;
  };
 `;

export const Label = styled.div`
  color:${({ theme }) => theme.color.secondaryText};
  max-width: 240px;
  margin-bottom: 14px;
 
  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    max-width: 100%
  };
`;

export const OtherInfo = styled.span`
  color: white;
  margin-bottom: 14px;
`;