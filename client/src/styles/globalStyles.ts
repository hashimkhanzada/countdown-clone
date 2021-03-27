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
  propWidth?: string;
  hideMobile?: boolean;
  maxWidthMobile?: boolean;
  propPadding?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #007837;
  white-space: nowrap;
  padding: 12px 12px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: ${({ extraMargin }) => extraMargin};
  padding: ${({ propPadding }) => propPadding};
  width: ${({ propWidth }) => propWidth};
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #00411e;
  }

  @media screen and (max-width: 1030px) {
    display: ${({ hideMobile }) => hideMobile && "none"};
    width: ${({ maxWidthMobile }) => maxWidthMobile && "100%"};
  }
`;
