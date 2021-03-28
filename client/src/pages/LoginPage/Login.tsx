import React from "react";
import PageMap from "../../components/pageMap/PageMap";
import { Button } from "../../styles/globalStyles";

import { LoginContainer, LoginMain, TitleRow, MainForm } from "./Login.styles";

interface Props {}

const Login = (props: Props) => {
  return (
    <>
      <PageMap pageName="Login" />
      <LoginContainer>
        <LoginMain>
          <TitleRow>
            <h1>Sign In</h1>
          </TitleRow>
          <MainForm>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                required
              />
            </div>
            <Button
              propPadding="8px 12px"
              propWidth="100%"
              extraMargin="10px 0"
            >
              Sign In
            </Button>
            <p>
              Don't have an account? <span>Register Now</span>
            </p>
          </MainForm>
        </LoginMain>
      </LoginContainer>
    </>
  );
};

export default Login;
