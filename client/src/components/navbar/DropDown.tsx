import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {}

const DropDown = (props: Props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <DropDownContainer click={click}>
      <Col>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/fruit-veg">
            Fruit & Veg
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/meat-seafood">
            Meat & Seafood
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/fridge-deli">
            Fridge & Deli
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/frozen">
            Frozen
          </DropDownLink>
        </DropDownItem>
      </Col>
      <Col>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/pantry">
            Pantry
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/beer-wine">
            Beer & Wine
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/drinks">
            Drinks
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/health-beauty">
            Health & Beauty
          </DropDownLink>
        </DropDownItem>
      </Col>
      <Col>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/household">
            Household
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/baby-child">
            Baby & Child
          </DropDownLink>
        </DropDownItem>
        <DropDownItem>
          <DropDownLink onClick={handleClick} to="/pet">
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

  &:hover {
    background-color: #ececec;
  }
`;

const Col = styled.div`
  padding: 12px 16px;
  flex: 0.33;
`;
