import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PageMap from "../../components/pageMap/PageMap";
import { Button } from "../../styles/globalStyles";
import { createAPIEndpoint, ENDPOINTS } from "../../api/axios";
import IsLoadingHOC from "../../IsLoadingHOC";

import { useDispatch } from "react-redux";
import { changeDeliveryAddress } from "../../features/delivery/deliverySlice";

import { LoginContainer, LoginMain, TitleRow, MainForm } from "./Login.styles";

const initialState = {
  email: "",
  password: "",
};

const Login = ({ setLoading }: any) => {
  const [form, setForm] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await createAPIEndpoint(ENDPOINTS.USERS)
      .userSignIn(form)
      .then(({ data }: any) => {
        setLoading(false);
        localStorage.setItem("profile", JSON.stringify(data));
        dispatch(changeDeliveryAddress(data.result.address));
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageMap pageName="Login" />
      <LoginContainer>
        <LoginMain>
          <TitleRow>
            <h1>Sign In for online shopping</h1>
          </TitleRow>
          <MainForm onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
            </div>
            <Button
              propPadding="8px 12px"
              propWidth="100%"
              extraMargin="10px 0"
              type="submit"
            >
              Sign In
            </Button>
            <p>
              Don't have an account?{" "}
              <span>
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Register Now
                </Link>
              </span>
            </p>
          </MainForm>
        </LoginMain>
      </LoginContainer>
    </>
  );
};

export default IsLoadingHOC(Login);
