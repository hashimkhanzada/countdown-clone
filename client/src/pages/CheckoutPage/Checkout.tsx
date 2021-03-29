import React, { useState } from "react";
import { FiTruck } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../styles/globalStyles";
import { Link } from "react-router-dom";

import {
  CheckoutContainer,
  CheckoutMain,
  MainContainer,
  DeliveryRow,
  TimeslotRow,
} from "./Checkout.styles";

import {
  selectDelivery,
  changeDeliveryDate,
  selectDeliveryDate,
} from "../../features/delivery/deliverySlice";
import PageMap from "../../components/pageMap/PageMap";

const Checkout = () => {
  const deliveryAddress = useSelector(selectDelivery);
  const deliveryDate = useSelector(selectDeliveryDate);
  const dispatch = useDispatch();

  const [deliveryType, setDeliveryType] = useState("Delivery");

  const [user] = useState(JSON.parse(localStorage.getItem("profile") || "{}"));

  const setDeliveryDate = (e: any) => {
    dispatch(changeDeliveryDate(e.target.name));
  };

  return (
    <>
      <PageMap pageName="Checkout" />
      <CheckoutContainer>
        <CheckoutMain>
          <MainContainer>
            <DeliveryRow>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h3 className="num">1</h3>
                <h3>Delivery or Pick up?</h3>
              </div>
              <div className="deliveryButtons">
                <button
                  onClick={() => setDeliveryType("Delivery")}
                  name="Delivery"
                  className={deliveryType === "Delivery" ? "selected" : ""}
                >
                  <FiTruck />
                  <p>Delivery</p>
                </button>
                <button
                  onClick={() => setDeliveryType("Pickup")}
                  name="Pickup"
                  className={deliveryType === "Pickup" ? "selected" : ""}
                >
                  <BsBag />
                  <p>Pickup</p>
                </button>
              </div>
              <div className="address">
                <h4>Deliver to:</h4>
                <span>
                  <strong>{deliveryAddress}</strong>
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
              <div className="deliveryButtons">
                <button
                  onClick={setDeliveryDate}
                  name="Monday"
                  className={deliveryDate === "Monday" ? "selected" : ""}
                >
                  Monday
                </button>
                <button
                  onClick={setDeliveryDate}
                  name="Tuesday"
                  className={deliveryDate === "Tuesday" ? "selected" : ""}
                >
                  Tuesday
                </button>
                <button
                  onClick={setDeliveryDate}
                  name="Wednesday"
                  className={deliveryDate === "Wednesday" ? "selected" : ""}
                >
                  Wednesday
                </button>
                <button
                  onClick={setDeliveryDate}
                  name="Thursday"
                  className={deliveryDate === "Thursday" ? "selected" : ""}
                >
                  Thursday
                </button>
                <button
                  onClick={setDeliveryDate}
                  name="Friday"
                  className={deliveryDate === "Friday" ? "selected" : ""}
                >
                  Friday
                </button>
              </div>
            </TimeslotRow>
            {user?.result ? (
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link
                  to="/payment"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button propPadding="8px 24px" extraMargin="40px 10px">
                    {" "}
                    Continue
                  </Button>{" "}
                </Link>
              </div>
            ) : (
              <div className="checkoutOptions">
                <>
                  <div className="checkoutMethod">
                    <h3>Returning Customer</h3>

                    <p>
                      Sign In to continue checkout, if you have an existing
                      countdown account
                    </p>
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Button
                        propPadding="8px 24px"
                        propWidth="100%"
                        extraMargin="20px 0 0 0"
                      >
                        Log In
                      </Button>
                    </Link>
                  </div>
                  <div className="checkoutMethod">
                    <h3>New Customer</h3>
                    <p>
                      Sign up for a countdown account - it's quick and easy!
                    </p>
                    <Link
                      to="/register"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Button
                        propPadding="8px 24px"
                        propWidth="100%"
                        extraMargin="20px 0 0 0"
                      >
                        Register
                      </Button>{" "}
                    </Link>
                  </div>
                </>
              </div>
            )}
          </MainContainer>
        </CheckoutMain>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
