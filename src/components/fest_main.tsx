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

  useEffect(() => {
    dispatch(fetchMenu(choiceFest));
  }, [dispatch, choiceFest]);

  const yearFest =
    choiceFest === "Sundance"
      ? date.slice(4)
      : choiceFest === "Berlin"
      ? date.slice(1)
      : date;

  return (
    <Content>
      {data.length &&
        date &&
        Array.from([...new Array(data.length)].keys())
          .map((item) => {
            return (
              <Item key={item} background={data[item].posterUrl}>
                <p>
                  {yearFest[item] &&
                    yearFest[item]
                      .split("")
                      .map((item, index) => (
                        <strong key={index}>{item}</strong>
                      ))}
                </p>
                <div></div>
              </Item>
            );
          })
          .reverse()}
    </Content>
  );
};

export default FestMain;
