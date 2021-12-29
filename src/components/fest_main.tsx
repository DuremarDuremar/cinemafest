import React, { FC, useState, useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { Transition } from "react-transition-group";
import { animateScroll } from "react-scroll";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchMenu } from "../reducer/actions/menuA";
import { filmsDelete } from "../reducer/actions/filmsA";
import {
  Wrapper,
  Content,
  Item,
  ItemAdap,
  Animation,
} from "../style/fest_main_style";
import Loading from "./loading_fest";
import { date } from "../reducer/arrayLink";
import FestFilms from "./fest_films";

interface IProps {
  choiceFest: string;
}

export const api = `https://kinopoiskapiunofficial.tech/api/v2.1/films/`;

const FestMain: FC<IProps> = ({ choiceFest }) => {
  const dispatch = useDispatch();
  const { respons520, respons730, respons950 } = useTypeSelector(
    (state) => state.respons
  );
  const { data } = useTypeSelector((state) => state.menu);
  const { films } = useTypeSelector((state) => state);
  const [choiceYear, setChoiceYear] = useState("");

  const nodeRef = useRef(null);
  // получаем рандомные обложки для списка десятилетий
  // выбраного фестиваля
  useEffect(() => {
    if (respons520) {
      setTimeout(() => {
        dispatch(fetchMenu(choiceFest, api));
      }, 400);
    }
  }, [dispatch, choiceFest, respons520]);

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

  const renderFilms = (item: number) => {
    console.log(item);

    setTimeout(() => {
      yearFest[item] === choiceYear
        ? setChoiceYear("")
        : setChoiceYear(yearFest[item]);
    }, 100);
  };

  const render = () => {
    return (
      <Wrapper>
        <Transition
          nodeRef={nodeRef}
          in={choiceYear.length ? true : false}
          timeout={900}
        >
          {(state) => (
            <Animation state={state} respons950={respons950}>
              <h3>{choiceYear}</h3>
              <i
                className="fas fa-play fa-4x fa-rotate-270"
                onClick={() => setChoiceYear("")}
              ></i>
              {choiceYear.length && (
                <FestFilms
                  linkFest={`${choiceFest + choiceYear}`}
                  choiceFest={choiceFest}
                />
              )}
            </Animation>
          )}
        </Transition>
        {respons520 ? (
          <Content respons730={respons730}>
            {data.length &&
              Array.from([...new Array(data.length)].keys())
                .map((item) => {
                  return (
                    <Item
                      key={item}
                      background={data[item].posterUrl}
                      choice={yearFest[item] === choiceYear ? true : false}
                      choiceActive={choiceYear.length ? true : false}
                      onClick={() => {
                        animateScroll.scrollToTop();
                        renderFilms(item);
                      }}
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
        ) : (
          yearFest.map((item) => (
            <ItemAdap
              key={item}
              onClick={() =>
                item === choiceYear ? setChoiceYear("") : setChoiceYear(item)
              }
            >
              {item}
            </ItemAdap>
          ))
        )}
      </Wrapper>
    );
  };

  return data.length || !respons520 ? (
    render()
  ) : (
    <Loading choiceFest={choiceFest} />
  );
};

export default FestMain;
