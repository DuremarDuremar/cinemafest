import React, { FC } from "react";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { Content, Logo, Menu } from "../style/fest_header_style";
import logo from "../assets/logo.png";

const FestHeader: FC = () => {
  const { respons950 } = useTypeSelector((state) => state.respons);
  const btns = ["Cannes", "Venice", "Berlin", "Sundance"];

  return (
    <Content>
      <Menu respons950={respons950}>
        <ul>
          {btns.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </Menu>
      <Logo respons950={respons950}>
        <div>
          <img src={logo} alt="logo" />
          <p>Cinema Festivals</p>
        </div>
        <div></div>
      </Logo>
    </Content>
  );
};

export default FestHeader;
