import React, { FC } from "react";

import { Info, Exit, InfoFilm, InfoDirector } from "../style/film_style";
import { FilmTypes, DirectTypes } from "../types/film";
import logo from "../assets/logo.png";

interface IProps {
  director: DirectTypes | null;
  film: FilmTypes | null;
  newFilm: (next: boolean) => string;
  respons730: boolean;
}

const FilmInfo: FC<IProps> = ({ film, director, respons730, newFilm }) => {
  return (
    <Info>
      <Exit to="/">
        <img src={logo} alt="logo" />
      </Exit>
      {film ? (
        <InfoFilm>
          <div>
            <p>{film.nameRu}</p>
            <p>{film.nameEn}</p>
          </div>

          <div>
            {film.countries.map((item, index) =>
              index < 2 ? <span key={index}>{item.country} </span> : null
            )}
            <p>{film.year}</p>
          </div>
        </InfoFilm>
      ) : (
        <p>loading</p>
      )}
      {director ? (
        <InfoDirector>
          <img src={director[0].posterUrl} alt={director[0].nameEn} />
          <div>
            <p>{director[0].nameRu}</p>
            <p>{director[0].nameEn}</p>
          </div>
        </InfoDirector>
      ) : (
        <p>loading</p>
      )}
    </Info>
  );
};

export default FilmInfo;
