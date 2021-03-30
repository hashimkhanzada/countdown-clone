import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PageMap from "../../components/pageMap/PageMap";
import { Button } from "../../styles/globalStyles";
import { createAPIEndpoint, ENDPOINTS } from "../../api/axios";
import IsLoadingHOC from "../../IsLoadingHOC";

import {
  RegisterContainer,
  RegisterMain,
  TitleRow,
  MainForm,
} from "./Register.styles";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
};

const Register = ({ setLoading }: any) => {
  const [form, setForm] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await createAPIEndpoint(ENDPOINTS.USERS)
      .userRegister(form)
      .then(({ data }: any) => {
        setLoading(false);
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageMap pageName="Register" />
      <RegisterContainer>
        <RegisterMain>
          <TitleRow>
            <h1>Register for online shopping</h1>
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
            <div
              style={{
                border: "solid 1px #d3d3d3",
                padding: "20px",
                borderRadius: "5px",
                margin: "30px 0",
              }}
            >
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="address">Street Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button
              propPadding="8px 12px"
              propWidth="100%"
              extraMargin="10px 0"
            >
              Register
            </Button>
            <p>
              Already have a Countdown account?{" "}
              <span>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                  type="submit"
                >
                  Sign In
                </Link>
              </span>
            </p>
          </MainForm>
        </RegisterMain>
      </RegisterContainer>
    </>
  );
};

export default IsLoadingHOC(Register);
