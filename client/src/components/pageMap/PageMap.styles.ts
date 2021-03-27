import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

export const PageMapContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 12px 16px;

  > * {
    margin: 0 1px;
    color: #535e65;
  }

  p {
    font-size: 16px;
    text-transform: capitalize;
  }
`;

export const HomeIcon = styled(AiOutlineHome)`
  font-size: 24px;
  color: #535e65;
`;

export const Arrow = styled(IoIosArrowForward)`
  font-size: 20px;
  color: #535e65;
`;
