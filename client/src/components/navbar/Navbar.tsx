import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import DropDown from "./DropDown";
import { FaBars, FaTimes } from "react-icons/fa";
import decode from "jwt-decode";

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
  const location = useLocation();
  const history = useHistory();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile") || "{}")
  );

  const logout = () => {
    history.push("/");

    localStorage.clear();
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken: any = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile") || "{}"));
  }, [location]);

  const [imgUrl, setImgUrl] = useState(
    "https://static.countdown.co.nz/assets/images/Header/countdown-desktop-logo.svg"
  );

  const showMobileLogo = () => {
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
    showMobileLogo();
  }, []);

  window.addEventListener("resize", showMobileLogo);

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
            {user?.result ? (
              <QuickNavItem to="/" onClick={logout}>
                Sign Out
              </QuickNavItem>
            ) : (
              <>
                <QuickNavItem to="/register">Register</QuickNavItem>
                <QuickNavItem to="/login">Sign In</QuickNavItem>
              </>
            )}
          </QuickNav>
        </NavHeader>
      </Nav>
    </>
  );
};

export default Navbar;
