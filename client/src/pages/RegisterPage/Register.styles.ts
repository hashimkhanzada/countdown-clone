import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #39464e;
`;

export const RegisterMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  max-width: 1200px;
`;

export const TitleRow = styled.div`
  display: flex;
  color: #39464e;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  border-bottom: solid 1px #e9f2fc;
  max-width: 1200px;
  padding: 20px;

  h1 {
    padding: 0 18px 4px 8px;
  }
`;

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 24rem;
  padding: 20px 10px;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0;

    input {
      padding: 0.5rem 0.75rem;
      border: 1px solid #b4b9bc;
      border-radius: 0.25rem;
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }
  }

  p {
    margin: 10px 0 15px 0;

    span {
      color: #007837;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
