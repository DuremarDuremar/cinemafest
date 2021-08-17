import React, { FC } from "react";

import { Content, Logo, Menu } from "../style/fest_header_style";

const FestHeader: FC = () => {
  const btns = ["Cannes", "Venice", "Berlin", "Sundance"];

  return (
    <Content>
      <Menu>
        <ul>
          {btns.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </Menu>
      <Logo>
        <div></div>
        <div></div>
      </Logo>
    </Content>
  );
};

export default FestHeader;
