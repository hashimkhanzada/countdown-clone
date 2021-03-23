import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export const Nav = styled.nav`
  background: white;
`;

export const NavbarContainer = styled.div`
  padding: 12px 16px;
`;

export const NavLogo = styled(Link)`
  img {
    height: 70px;
    width: 269px;
  }
`;

export const NavHeader = styled.div`
  display: flex;
`;

export const NavToolBar = styled.div`
  display: flex;
  list-style: none;
  flex-grow: 1;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #535e65;
  text-decoration: none;
  font-weight: bolder;
  font-size: 14px;
  padding: 8px 20px;
  border-bottom: 4px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    border-bottom: 4px solid #007837;
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
`;

export const QuickNavItem = styled(Link)`
  padding: 0 16px 0 0;
  font-size: 14px;
  color: #39464e;
  text-decoration: none;
`;
