import React, { FC } from "react";

import { Image, LinkImage } from "../style/film_style";
import { FilmTypes } from "../types/film";

interface IProps {
  state: number[];
  film: FilmTypes;
  arrayFilm: number[][];
}

const FestPoster: FC<IProps> = ({ state, film, arrayFilm }) => {
  const newFilm = (next: boolean) => {
    const link = arrayFilm
      .map((item: number[], index: number, array: number[][]) => {
        if (state[0] === item[0] && state[1] === item[1]) {
          return next ? array[index + 1] : array[index - 1];
        } else {
          return [];
        }
      })
      .filter(Boolean)
      .flat(1);
    if (link[0]) {
      return link[0].toString();
    } else {
      return state[0] === arrayFilm[0][0]
        ? arrayFilm[arrayFilm.length - 1][0].toString()
        : arrayFilm[0][0].toString();
    }
  }; // функция перебора массива

  return (
    <Image>
      <img src={film.posterUrlPreview} alt={film.nameEn} />
      <LinkImage to={() => newFilm(true)} className="link" next="next">
        <i className="fas fa-arrow-right fa-4x" />
      </LinkImage>
      <LinkImage to={() => newFilm(false)} className="link">
        <i className="fas fa-arrow-right fa-4x" />
      </LinkImage>
    </Image>
  );
};

export default FestPoster;
