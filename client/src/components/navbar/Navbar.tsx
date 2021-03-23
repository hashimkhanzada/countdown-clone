import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Nav,
  NavLogo,
  NavHeader,
  NavToolBar,
  NavToolBarItem,
  NavbarContainer,
  QuickNav,
  QuickNavItem,
  FavIcon,
  NavLink,
  MobileIcon,
} from "./Navbar.styles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [imgUrl, setImgUrl] = useState(
    "https://static.countdown.co.nz/assets/images/Header/countdown-desktop-logo.svg"
  );

  const showButton = () => {
    if (window.innerWidth <= 1030) {
      setImgUrl(
        "https://static.countdown.co.nz/assets/images/Mobile/icon-wapple.svg"
      );
    } else {
      setImgUrl(
        "https://static.countdown.co.nz/assets/images/Header/countdown-desktop-logo.svg"
      );
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 1030) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1030) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <img src={imgUrl} alt="Countdown Logo" />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </NavbarContainer>

        <NavHeader>
          <NavToolBar onClick={handleClick} click={click}>
            <NavToolBarItem>
              <NavLink to="/" onClick={closeMobileMenu}>
                HOME
              </NavLink>
            </NavToolBarItem>

            <NavToolBarItem
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink to="#" onClick={closeMobileMenu}>
                BROWSE
              </NavLink>
              {dropdown && <DropDown />}
            </NavToolBarItem>

            <NavToolBarItem>
              <NavLink to="/specials" onClick={closeMobileMenu}>
                SPECIALS
              </NavLink>
            </NavToolBarItem>

            <NavToolBarItem>
              <NavLink to="/recipes" onClick={closeMobileMenu}>
                RECIPES
              </NavLink>
            </NavToolBarItem>

            <NavToolBarItem>
              <NavLink to="/favourites" onClick={closeMobileMenu}>
                <FavIcon />
                MY FAVOURITES
              </NavLink>
            </NavToolBarItem>
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
