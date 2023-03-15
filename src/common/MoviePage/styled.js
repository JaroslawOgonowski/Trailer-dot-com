import styled, { css } from "styled-components";

export const StyledPage = styled.div`
margin: 146px 33% 0 100px
`;

export const MovieBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const Title = styled.h1`
color: #FFFFFF;
font-family: 'Stranger back in the Night', sans-serif;                                                
font-style: normal;
font-weight: 400;
font-size: 330px;
margin: 0;
`;

export const Trailer = styled.iframe`
&&{
    ${({ hideTrailer }) => hideTrailer && css`{
      display: none;
    }`  
  };
};
`;

export const MovieInformation = styled.div`
font-family: 'Segoe UI';
font-style: normal;
color: #FFFFFF;
display: flex;
gap: 45px;
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
color:rgba(153, 153, 153, 1);
max-width: 240px;
max-height: 40px;
margin-bottom: 14px;
`;

export const OtherInfo = styled.span`
line-height: 20px;
color: white;
margin-bottom: 14px;
`;



