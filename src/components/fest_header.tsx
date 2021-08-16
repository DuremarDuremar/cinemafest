import React, { FC } from "react";

import { Content, Logo, Menu } from "../style/fest_header_style";

const FestHeader: FC = () => {
  return (
    <Content>
      <Menu>1</Menu>
      <Logo>
        <div></div>
        <div></div>
      </Logo>
    </Content>
  );
};

export default FestHeader;
