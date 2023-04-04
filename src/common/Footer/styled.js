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

  @media(min-width: ${({ theme }) => theme.breakPoint.tv}px) {
    font-size: 1.1vw;
  };
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.star};
`;