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

  h1 {
    @media screen and (max-width: 1030px) {
      font-size: 25px;
    }
  }
`;

export const IconRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 0 40px;
  margin: 35px 0;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    padding: 0;
  }

  .row {
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 1030px) {
      width: 100%;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 40px;
      text-align: center;

      @media screen and (max-width: 1030px) {
        margin: 10px 0;
        max-width: 90px;
      }

      p {
        margin-top: 7px;
        font-size: 14px;
      }
    }
  }
`;

export const SpecialsRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-top: 5px;
  justify-content: space-between;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > * {
      margin: 10px 0;
    }
  }
`;
