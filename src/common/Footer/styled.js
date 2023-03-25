import styled from "styled-components";

export const FooterContent = styled.div`
  color: ${({ theme }) => theme.color.secondaryText};
  text-align: center;
  font-size: 14px;
  margin-bottom: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) {
  margin-bottom: 0; 
  };
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.star};
`;