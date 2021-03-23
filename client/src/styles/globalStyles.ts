import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans','Source Sans Pro', sans-serif, 'pfs-bold';
 } 

 body{
   background-color:#f1f2f3;
 }
`;

interface ButtonProps {
  extraMargin?: string;
  maxWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  background: #007837;
  white-space: nowrap;
  padding: 8px 12px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: ${({ extraMargin }) => extraMargin && extraMargin};
  width: ${({ maxWidth }) => maxWidth && "100%"};
  transition: all 0.3s ease-out;

  &:hover {
    background-color: darkgreen;
  }

  @media screen and (max-width: 1030px) {
    display: none;
  }
`;
