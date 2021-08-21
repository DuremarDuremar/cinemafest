import React, { FC } from "react";
import { Content, Item } from "../style/fest_main_style";

interface IProps {
  choiceFest: string;
}

const FestMain: FC<IProps> = ({ choiceFest }) => {
  const numberGrid =
    choiceFest === "Sundance" ? 5 : choiceFest === "Berlin" ? 8 : 9;

  return (
    <Content>
      {Array.from([...new Array(numberGrid)].keys()).map((item) => {
        return <Item key={item}>{item + 1}</Item>;
      })}
    </Content>
  );
};

export default FestMain;
