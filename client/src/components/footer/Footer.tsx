import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="col">
          <h3>Browse</h3>
          <FooterLink to="/">Departments</FooterLink>
          <FooterLink to="/">Specials</FooterLink>
          <FooterLink to="/">Recipes</FooterLink>
          <FooterLink to="/">Shopping List</FooterLink>
          <FooterLink to="/">myCountdown App</FooterLink>
        </div>
        <div className="col">
          {" "}
          <h3>My List</h3>
          <FooterLink to="/">My Favourites</FooterLink>
          <FooterLink to="/">My Saved Lists</FooterLink>
          <FooterLink to="/">My Past Orders</FooterLink>
          <FooterLink to="/">My Saved Recipes</FooterLink>
          <FooterLink to="/">Useful Lists</FooterLink>
        </div>
        <div className="col">
          {" "}
          <h3>My Account</h3>
          <FooterLink to="/">My Details</FooterLink>
          <FooterLink to="/">My Addresses</FooterLink>
          <FooterLink to="/">My Orders</FooterLink>
          <FooterLink to="/">My Onecards</FooterLink>
          <FooterLink to="/">My Delivery Savers</FooterLink>
          <FooterLink to="/">My Settings</FooterLink>
        </div>
        <div className="col">
          {" "}
          <h3>Help</h3>
          <FooterLink to="/">FAQs</FooterLink>
          <FooterLink to="/">New to Online Shopping</FooterLink>
          <FooterLink to="/">Managing Your Account</FooterLink>
          <FooterLink to="/">Browsing The Store</FooterLink>
          <FooterLink to="/">The Checkout Process</FooterLink>
          <FooterLink to="/">Store Policies</FooterLink>
          <FooterLink to="/">Terms and Conditions</FooterLink>
        </div>
        <div className="col">
          {" "}
          <h3>About us</h3>
          <FooterLink to="/">Contact Us</FooterLink>
          <FooterLink to="/">Store Locator</FooterLink>
          <FooterLink to="/">Careers</FooterLink>
        </div>
      </FooterContainer>
      <CopyrightContainer>
        © Web Application created by Hashim Khanzada 2021{" "}
        <span>
          - no rights just filling up empty space |<span>Privacy policy</span> |{" "}
          <span>Terms & conditions</span>| <span>Sitemap</span>
        </span>
      </CopyrightContainer>
    </>
  );
};

export default Footer;

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
  padding: 48px 64px;
  background-color: white;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
  }

  .col {
    display: flex;
    flex-direction: column;

    h3 {
      color: #007837;
      border-bottom: solid 1px #39464e;
      padding-bottom: 5px;
      margin-bottom: 12px;
    }
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #39464e;
  margin: 4px 0;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #007837;
  font-size: 14px;
  color: white;
  padding: 22px;

  span {
    padding: 0 5px;
    cursor: pointer;

    @media screen and (max-width: 1030px) {
      display: none;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
