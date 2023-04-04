import styled, { css } from "styled-components";

export const StyledPage = styled.div`
  list-style: none;
  margin: 0 100px 250px 100px;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) {
    margin: 0 16px 120px 16px;
    padding: 0;
  };
`;

