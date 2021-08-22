import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchMenu } from "../reducer/actions/menuA";
import { Content, Item } from "../style/fest_main_style";
import { date } from "../reducer/arrayLink";

interface IProps {
  choiceFest: string;
}

const FestMain: FC<IProps> = ({ choiceFest }) => {
  const dispatch = useDispatch();
  const { respons615 } = useTypeSelector((state) => state.respons);
  const { data } = useTypeSelector((state) => state.menu);
  const numberGrid =
    choiceFest === "Sundance" ? 5 : choiceFest === "Berlin" ? 8 : 9;

  useEffect(() => {
    dispatch(fetchMenu(choiceFest));
  }, [dispatch, choiceFest]);

  console.log(date.reverse());

  return (
    <Content>
      {/* {Array.from([...new Array(numberGrid)].keys()).map((item) => {
        return <Item key={item}>{item + 1}</Item>;
      })} */}
      {data &&
        data
          .map((item, index) => {
            return (
              <Item key={item.filmId}>
                <img src={item.posterUrl} alt={item.filmId} />
                {/* <p>{date && date.reverse()[index]}</p> */}
              </Item>
            );
          })
          .reverse()}
    </Content>
  );
};

export default FestMain;
