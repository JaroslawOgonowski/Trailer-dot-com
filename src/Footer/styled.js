import styled from "styled-components";

export const Button = styled.button`
  margin-top: 140px;
  margin-left: 100px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:${({ theme }) => theme.color.buttonBackground};
  color: white;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.color.buttonBorder};
  cursor: pointer;
  font-weight: 600;
  font-size: 21px;
  transition: 0.5s;
  &:hover{
    transform: scale(1.1);
    border: 4px solid ${({ theme }) => theme.color.buttonBorderHover};
  };
`;