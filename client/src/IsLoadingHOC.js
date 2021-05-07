import React, { useState } from "react";
import styled from "styled-components";
import { VscLoading } from "react-icons/vsc";

export const IsLoadingHOC = (WrappedComponent) => {
  const HOC = (props) => {
    const [isLoading, setLoading] = useState(true);

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };

    return (
      <>
        {isLoading && <LoadingIcon />}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  };

  return HOC;
};

export default IsLoadingHOC;

export const LoadingIcon = styled(VscLoading)`
  position: absolute;
  width: 150px;
  height: 150px;
  left: calc(50vw - 75px);
  top: calc(50vh - 75px);
  transform: translate(-50%, -50%);

  animation: rotation 3s infinite linear;
  color: #007837;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
