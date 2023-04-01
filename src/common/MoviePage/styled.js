import styled, { css } from "styled-components";

export const StyledPage = styled.ul`
  list-style: none;
  margin: 146px 100px 250px 100px;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) {
    margin: 48px 16px 120px 16px;
    padding: 0;
  };
`;

