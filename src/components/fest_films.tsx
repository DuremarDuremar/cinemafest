import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchFilms } from "../reducer/actions/filmsA";

import { Content, Item, Info, Image } from "../style/fest_films_style";

interface IProps {
  linkFest: string;
}

const FestFilms: FC<IProps> = ({ linkFest }) => {
  const dispatch = useDispatch();

  const { data } = useTypeSelector((state) => state.films);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchFilms(linkFest, 0));
    }, 400);
  }, [linkFest, dispatch]);

  const render = () => {
    return (
      <Content>
        {data.map((item, index) => (
          <Item key={index}>
            <Info>
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
