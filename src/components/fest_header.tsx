import React, { FC } from "react";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { Content, Logo, Menu, Name } from "../style/fest_header_style";
import logo from "../assets/logo.png";

interface IProps {
  choiceFest: string;
  setChoiceFest: React.Dispatch<React.SetStateAction<string>>;
}

const FestHeader: FC<IProps> = ({ choiceFest, setChoiceFest }) => {
  const { respons950, respons730 } = useTypeSelector((state) => state.respons);
  const btns = ["Cannes", "Venice", "Berlin", "Sundance"];

  return (
    <Content>
      <Menu respons950={respons950} respons730={respons730}>
        <ul>
          {btns.map((item, index) => {
            return (
              <Name
                key={index}
                onClick={() => setChoiceFest(item)}
                active={item === choiceFest ? true : false}
              >
                {item}
              </Name>
            );
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
