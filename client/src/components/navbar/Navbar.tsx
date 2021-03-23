import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Nav,
  NavLogo,
  NavHeader,
  NavToolBar,
  NavbarContainer,
  QuickNav,
  QuickNavItem,
  FavIcon,
  NavLink,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img
              src="https://static.countdown.co.nz/assets/images/Header/countdown-desktop-logo.svg"
              alt="Countdown Logo"
            />
          </NavLogo>
        </NavbarContainer>

        <NavHeader>
          <NavToolBar>
            <NavLink to="/">HOME</NavLink>

            <NavLink to="/browse">BROWSE</NavLink>

            <NavLink to="/specials">SPECIALS</NavLink>

            <NavLink to="/recipes">RECIPES</NavLink>

            <NavLink to="/favourites">
              <FavIcon />
              MY FAVOURITES
            </NavLink>
          </NavToolBar>
          <QuickNav>
            <QuickNavItem to="/">My Account</QuickNavItem>
            <QuickNavItem to="/">Help</QuickNavItem>
            <QuickNavItem to="/">Contact</QuickNavItem>
            <QuickNavItem to="/">Register</QuickNavItem>
            <QuickNavItem to="/">Sign In</QuickNavItem>
          </QuickNav>
        </NavHeader>
      </Nav>
    </>
  );
};

export default Navbar;
