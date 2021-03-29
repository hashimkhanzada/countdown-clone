import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #39464e;
  margin-top: 20px;
`;

export const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;

export const IconRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 24px;
  padding: 0 80px;
  margin: 35px 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin-top: 7px;
      font-size: 14px;
    }
  }
`;

export const SpecialsRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-top: 5px;
  justify-content: space-between;
`;
