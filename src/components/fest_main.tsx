import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

// import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchMenu } from "../reducer/actions/menuA";
import { Content, Item } from "../style/fest_main_style";

interface IProps {
  choiceFest: string;
}

const FestMain: FC<IProps> = ({ choiceFest }) => {
  const dispatch = useDispatch();
  const numberGrid =
    choiceFest === "Sundance" ? 5 : choiceFest === "Berlin" ? 8 : 9;

  useEffect(() => {
    dispatch(fetchMenu(choiceFest));
  }, [dispatch, choiceFest]);

  return (
    <Content>
      {Array.from([...new Array(numberGrid)].keys()).map((item) => {
        return <Item key={item}>{item + 1}</Item>;
      })}
    </Content>
  );
};

export default FestMain;
