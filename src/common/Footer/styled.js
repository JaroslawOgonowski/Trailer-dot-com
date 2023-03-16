import styled from "styled-components";

export const FooterContent = styled.div`
margin-top: 800px;
color: ${({ theme }) => theme.color.secondaryText};
text-align: center;
font-size: 14px;
padding-bottom: 100px;
`;

export const StyledLink = styled.a`
text-decoration: none;
color: ${({ theme }) => theme.color.star};
`;