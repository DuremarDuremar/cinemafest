import React, { FC, useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchMenu } from "../reducer/actions/menuA";
import { filmsDelete } from "../reducer/actions/filmsA";
import { Content, Item, LoadingFest } from "../style/fest_main_style";
import { date } from "../reducer/arrayLink";
import FestFilms from "./fest_films";
import Spinner from "./spinner";
import Cannes from "../assets/Cannes.png";
import Berlin from "../assets/Berlin.png";
import Venice from "../assets/Venice.png";
import Sundance from "../assets/Sundance.png";

interface IProps {
  choiceFest: string;
}

const FestMain: FC<IProps> = ({ choiceFest }) => {
  const dispatch = useDispatch();
  // const { respons615 } = useTypeSelector((state) => state.respons);
  const { data } = useTypeSelector((state) => state.menu);
  const { films } = useTypeSelector((state) => state);
  const [choiceYear, setChoiceYear] = useState("");

  console.log(films.data);

  // получаем рандомные обложки для списка десятилетий
  // выбраного фестиваля
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchMenu(choiceFest));
    }, 400);
  }, [dispatch, choiceFest]);

  console.log("choiceYear", choiceYear);

  // удаляем фильмы из глобального стэйта
  // при отжатии выбора года
  useEffect(() => {
    if (films.data.length && !choiceYear.length) {
      dispatch(filmsDelete());
    }
  }, [choiceYear.length, films.data.length, dispatch]);

  // определяем сетку для отрисовки и сбрасываем выбор года
  // при переходе на новый фестиваль
  const yearFest = useMemo(() => {
    setChoiceYear((prev) => (prev.length ? "" : prev));

    return choiceFest === "Sundance"
      ? date.slice(4)
      : choiceFest === "Berlin"
      ? date.slice(1)
      : date;
  }, [choiceFest]);

  const render = () => {
    return (
      <>
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
        {choiceYear.length ? (
          <FestFilms linkFest={`${choiceFest + choiceYear}`} />
        ) : null}
      </>
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
          : choiceFest === "Venice"
          ? Venice
          : Sundance
      }
    >
      <div className="img-fest">
        <Spinner />
      </div>
    </LoadingFest>
  );
};

export default FestMain;
