import React from "react";
import { FiTruck } from "react-icons/fi";
import { BsBag } from "react-icons/bs";

import {
  CheckoutContainer,
  CheckoutMain,
  MainContainer,
  DeliveryRow,
  TimeslotRow,
} from "./Checkout.styles";
import { Button } from "../../styles/globalStyles";

const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutMain>
        <MainContainer>
          <DeliveryRow>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3 className="num">1</h3>
              <h3>Delivery or Pick up?</h3>
            </div>
            <div style={{ display: "flex", margin: "20px 0" }}>
              <button className="selected">
                <FiTruck />
                <p>Delivery</p>
              </button>
              <button>
                <BsBag />
                <p>Pickup</p>
              </button>
            </div>
            <div className="address">
              <h4>Deliver to:</h4>
              <span>
                <strong>Durie Hill, Whanganui 4500</strong>{" "}
                <p>Change address {">"}</p>
              </span>
            </div>
          </DeliveryRow>
          <TimeslotRow>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <h3 className="num">2</h3>
              <h3>Choose a day</h3>
            </div>
            <p style={{ marginLeft: "10px" }}>Next available slot:</p>
            <div style={{ display: "flex", margin: "5px 0" }}>
              <button className="selected">
                <p>Monday</p>
              </button>
              <button>
                <p>Tuesday</p>
              </button>
              <button>
                <p>Wednesday</p>
              </button>
              <button>
                <p>Thursday</p>
              </button>
              <button>
                <p>Friday</p>
              </button>
            </div>
          </TimeslotRow>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button propWidth="20%" extraMargin="40px 10px">
              Continue
            </Button>
          </div>
        </MainContainer>
      </CheckoutMain>
    </CheckoutContainer>
  );
};

export default Checkout;
