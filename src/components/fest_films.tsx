import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchFilms } from "../reducer/actions/filmsA";
import Loading from "./loading_fest";
import { Content, Item, Info, Image } from "../style/fest_films_style";

interface IProps {
  linkFest: string;
  choiceFest: string;
}

const FestFilms: FC<IProps> = ({ linkFest, choiceFest }) => {
  const [num, setNum] = useState(0);

  const dispatch = useDispatch();

  const { data } = useTypeSelector((state) => state.films);
  const { respons730 } = useTypeSelector((state) => state.respons);

  const { ref, inView } = useInView({
    threshold: 0,
  });

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

  // console.log(num);

  const render = () => {
    return (
      <Content>
        {data.map((item, index) => (
          <Item
            key={index}
            ref={index + 1 === data.length ? ref : null}
            id={item.kinopoiskId}
          >
            {item.kinopoiskId ? (
              <>
                <Info fs={respons730 ? "4px" : "8px"}>
                  <div>
                    <span>{item.nameRu || item.nameEn}</span>&nbsp;
                    <span>__ {item.nameEn || null}</span>
                  </div>
                  <p>{item.year}</p>
                </Info>
                <Image to={`/${item.kinopoiskId}`}>
                  <img src={item.posterUrlPreview} alt={item.kinopoiskId} />
                </Image>
              </>
            ) : (
              <p>loading</p>
            )}
          </Item>
        ))}
      </Content>
    );
  };

  return data.length ? render() : <Loading choiceFest={choiceFest} />;
};

export default FestFilms;
