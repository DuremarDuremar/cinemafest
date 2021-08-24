import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchMenu } from "../reducer/actions/menuA";
import { Content, Item, LoadingFest } from "../style/fest_main_style";
import { date } from "../reducer/arrayLink";
import Cannes from "../assets/Cannes.png";
import Berlin from "../assets/Berlin.png";

interface IProps {
  choiceFest: string;
}

const FestMain: FC<IProps> = ({ choiceFest }) => {
  const dispatch = useDispatch();
  const { respons615 } = useTypeSelector((state) => state.respons);
  const { data } = useTypeSelector((state) => state.menu);
  const [choiceYear, setChoiceYear] = useState("");

  useEffect(() => {
    dispatch(fetchMenu(choiceFest));
  }, [dispatch, choiceFest]);

  const yearFest =
    choiceFest === "Sundance"
      ? date.slice(4)
      : choiceFest === "Berlin"
      ? date.slice(1)
      : date;

  console.log(`${choiceFest}`);

  const render = () => {
    return (
      <Content>
        {data.length &&
          date &&
          Array.from([...new Array(data.length)].keys())
            .map((item) => {
              return (
                <Item
                  key={item}
                  background={data[item].posterUrl}
                  choice={yearFest[item] === choiceYear ? true : false}
                  choiceActive={choiceYear.length ? true : false}
                  onClick={() =>
                    yearFest[item] === choiceYear
                      ? setChoiceYear("")
                      : setChoiceYear(yearFest[item])
                  }
                >
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

  return data.length ? (
    render()
  ) : (
    <LoadingFest
      background={
        choiceFest === "Cannes"
          ? Cannes
          : choiceFest === "Berlin"
          ? Berlin
          : null
      }
    />
  );
};

export default FestMain;
