import React from "react";
import styled from "styled-components";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
}

const HomeCard = ({ imageUrl, title, description }: Props) => {
  return (
    <HomeCardContainer>
      <img src={imageUrl} alt={title} />
      <div>
        <p>{title}</p>
        <h4>{description}</h4>
      </div>
    </HomeCardContainer>
  );
};

export default HomeCard;

export const HomeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  max-width: 280px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  cursor: pointer;
  overflow: hidden;
  transition: all 200ms;

  &:hover {
    box-shadow: 0 2px 4px rgb(0 0 0 / 25%), 0 0 12px 4px rgb(0 0 0 / 25%);
  }

  img {
    width: 280px;
    object-fit: contain;
    transition: transform 400ms;

    &:hover {
      transform: scale(1.05);
    }
  }

  div {
    padding: 20px;

    p {
      font-size: 12px;
    }

    h4 {
      font-size: 19px;
      font-weight: normal;
    }
  }
`;
