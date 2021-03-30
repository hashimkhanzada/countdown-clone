import React, { useState, useEffect } from "react";
import { FiTruck } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../styles/globalStyles";
import { Link } from "react-router-dom";
import { format } from "date-fns";

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

  const [deliveryDays, setDeliveryDays] = useState<string[]>([]);

  useEffect(() => {
    const tempArr: string[] = [];
    for (let i = 0; i < 5; i++) {
      tempArr.push(
        format(new Date(Date.now() + i * 24 * 60 * 60 * 1000), "EEEE, do MMMM")
      );
    }

    setDeliveryDays(tempArr);
  }, []);

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
                  name={deliveryDays[0]}
                  className={deliveryDate === deliveryDays[0] ? "selected" : ""}
                >
                  {deliveryDays[0]}
                </button>
                <button
                  onClick={setDeliveryDate}
                  name={deliveryDays[1]}
                  className={deliveryDate === deliveryDays[1] ? "selected" : ""}
                >
                  {deliveryDays[1]}
                </button>
                <button
                  onClick={setDeliveryDate}
                  name={deliveryDays[2]}
                  className={deliveryDate === deliveryDays[2] ? "selected" : ""}
                >
                  {deliveryDays[2]}
                </button>
                <button
                  onClick={setDeliveryDate}
                  name={deliveryDays[3]}
                  className={deliveryDate === deliveryDays[3] ? "selected" : ""}
                >
                  {deliveryDays[3]}
                </button>
                <button
                  onClick={setDeliveryDate}
                  name={deliveryDays[4]}
                  className={deliveryDate === deliveryDays[4] ? "selected" : ""}
                >
                  {deliveryDays[4]}
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
