import styled from "styled-components";

export const StyledTags = styled.div`
color: #FFFFFF;
font-family: 'Segoe UI';
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
width: max-content;
border: 1px solid ${({ theme }) => theme.color.buttonBorder};
display: flex;
justify-content: center;
align-items: center;
`;
export const Episodes = styled.div`

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