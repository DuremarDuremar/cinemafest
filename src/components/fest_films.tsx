import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchFilms } from "../reducer/actions/filmsA";

import { Content, Item, Info, Image } from "../style/fest_films_style";

interface IProps {
  linkFest: string;
}

const FestFilms: FC<IProps> = ({ linkFest }) => {
  const [num, setNum] = useState(0);

  const dispatch = useDispatch();

  const { data } = useTypeSelector((state) => state.films);
  const { respons950, respons730 } = useTypeSelector((state) => state.respons);

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  console.log(inView);
  console.log(entry?.target.id);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchFilms(linkFest, num));
    }, 400);
  }, [linkFest, dispatch, num]);

  useEffect(() => {
    if (inView) {
      setNum((prev) => prev + 1);
    }
  }, [inView]);

  console.log(num);

  const render = () => {
    return (
      <Content respons950={respons950}>
        {data.map((item, index) => (
          <Item
            key={index}
            ref={index + 1 === data.length ? ref : null}
            id={item.filmId}
            respons950={respons950}
          >
            <Info fs={respons730 ? "4px" : "8px"}>
              <div>
                <span>{item.nameRu || item.nameEn}</span>&nbsp;
                <span>__ {item.nameEn || null}</span>
              </div>
              <p>{item.year}</p>
            </Info>
            <Image>
              <img src={item.posterUrlPreview} alt={item.filmId} />
            </Image>
          </Item>
        ))}
      </Content>
    );
  };

  return data.length ? render() : <div>{linkFest}</div>;
};

export default FestFilms;
