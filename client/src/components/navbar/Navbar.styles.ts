import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export const Nav = styled.nav`
  background: white;
  width: 100%;
`;

export const NavbarContainer = styled.div`
  display: flex;
  padding: 12px 16px;

  @media screen and (max-width: 1030px) {
    align-items: center;
    justify-content: center;
  }
`;

export const NavLogo = styled(Link)`
  img {
    height: 70px;
    width: 269px;
  }

  @media screen and (max-width: 1030px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    img {
      height: 40px;
      width: 40px;
    }
  }
`;

export const NavHeader = styled.div`
  display: flex;
`;

export const NavToolBar = styled.ul<{ click: Boolean }>`
  display: flex;
  list-style: none;
  flex-grow: 1;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: ${({ click }) => (click ? "92vh" : 0)};
    position: absolute;
    top: 65px;
    visibility: ${({ click }) => (click ? "visibile" : "hidden")};
    right: 0;
    opacity: ${({ click }) => (click ? 1 : 0)};
    transition: all 0.5s ease;
    background: #39464e;
    z-index: 999;
  }
`;

export const NavToolBarItem = styled.li`
  border-bottom: 4px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;

  @media screen and (max-width: 1030px) {
    border-bottom: none;
  }

  &:hover {
    border-bottom: 4px solid #007837;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 14px;
  color: #535e65;
  text-decoration: none;
  padding: 8px 20px;

  @media screen and (max-width: 1030px) {
    color: lightgray;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }
`;

export const FavIcon = styled(FaHeart)`
  margin-right: 7px;
  fill: #007837;
`;

export const QuickNav = styled.div`
  display: flex;
  list-style: none;
  align-items: center;

  @media screen and (max-width: 1030px) {
    display: none;
  }
`;

export const QuickNavItem = styled(Link)`
  padding: 0 16px 0 0;
  font-size: 14px;
  color: #39464e;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1030px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
