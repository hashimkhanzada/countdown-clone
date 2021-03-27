import React from "react";
import { Link } from "react-router-dom";

import { PageMapContainer, HomeIcon, Arrow } from "./PageMap.styles";

interface Props {
  pageName?: string;
}

const PageMap = (props: Props) => {
  return (
    <PageMapContainer>
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <HomeIcon />
      </Link>

      <Arrow />
      <p>{props.pageName}</p>
    </PageMapContainer>
  );
};

export default PageMap;
