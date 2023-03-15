import styled, { css } from "styled-components";

export const StyledPage = styled.ul`
  margin: 146px 100px 0 100px;
  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) {
    margin: 48px 16px 0 16px;
  };
`;
export const Item = styled.li`
text-decoration: none;
`;

export const MovieBox = styled.div`
  display: flex;
  align-items: center;
  gap: 180px;
  @media(max-width: ${({ theme }) => theme.breakPoint.fullPage}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  };
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.mainText};
  font-family: 'Stranger back in the Night', sans-serif;                                                
  font-style: normal;
  font-weight: 400;
  font-size: 250px;
  margin: 0;
  padding-bottom: 80px;
  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) { 
    align-self: center;
    padding-bottom: 0;
    font-size: 120px;
  }
`;

export const Trailer = styled.iframe`
width: 500px;
height: 300px;
  &&{
    ${({ hideTrailer }) => hideTrailer && css`{
      display: none;
    }`};
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.fullPage}px) {
    margin-bottom: 46px;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) { 
    width: 250px;
    height:150px;
    align-self: center;
  }
`;

export const MovieInformation = styled.div`
  font-family: 'Segoe UI';
  font-style: normal;
  color: ${({ theme }) => theme.color.mainText};
  display: flex;
  gap: 45px;
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
  display: flex;
  align-items: center;
`;

export const Top = styled.div`
  margin-top: 16px;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: white;
`;

export const Content = styled.div`
  margin-left: 11px;
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