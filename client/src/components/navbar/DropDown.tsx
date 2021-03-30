import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DropDown = ({ click, handleClick }: any) => {
  return (
    <DropDownContainer click={click}>
      <Col>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/browse/fruit-veg">
            Fruit & Veg
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/browse/meat-seafood">
            Meat & Seafood
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/browse/fridge-deli">
            Fridge & Deli
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/browse/frozen">
            Frozen
          </DropDownLink>
        </DropDownItem>
      </Col>
      <Col>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/browse/pantry">
            Pantry
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/browse/beer-wine">
            Beer & Wine
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/browse/drinks">
            Drinks
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/browse/health-beauty">
            Health & Beauty
          </DropDownLink>
        </DropDownItem>
      </Col>
      <Col>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/browse/household">
            Household
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/browse/baby-child">
            Baby & Child
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/browse/pet">
            Pet
          </DropDownLink>
        </DropDownItem>
      </Col>
    </DropDownContainer>
  );
};

export default DropDown;

const DropDownContainer = styled.ul<{ click: Boolean }>`
  background: white;
  width: 100%;
  position: absolute;
  top: 138px;
  left: 0;
  list-style: none;
  text-align: start;
  display: ${({ click }) => (click ? "none" : "flex")};
  justify-content: space-between;
  cursor: default;
  border-bottom: solid 4px #007837;
  z-index: 999;

  @media screen and (max-width: 1030px) {
    position: relative;
    top: 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 0;
    background: #39464e;
    color: white;
  }
`;

const DropDownItem = styled.li``;

const DropDownLink = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #39464e;
  font-size: 14px;
  padding: 5px;

  @media screen and (max-width: 1030px) {
    color: lightgray;
    text-align: left;
    font-weight: bolder;
    padding: 8px 0;
  }

  &:hover {
    background-color: #ececec;
  }
`;

const Col = styled.div`
  padding: 12px 16px;
  flex: 0.33;
`;
