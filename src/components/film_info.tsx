import React, { FC } from "react";

import {
  Info,
  Exit,
  InfoFilm,
  InfoDirector,
  Wrapper,
  Arrow,
} from "../style/film_info_style";
import { FilmTypes, DirectTypes } from "../types/film";
import logo from "../assets/logo.png";
import Spinner from "./spinner";

interface IProps {
  director: DirectTypes | null;
  film: FilmTypes | null;
  newFilm: (next: boolean) => string;
  respons730: boolean;
}

const FilmInfo: FC<IProps> = ({ film, director, respons730, newFilm }) => {
  console.log(director);

  return (
    <Info
      respons730={respons730}
      backgroundPoster={film && !respons730 ? film.posterUrlPreview : null}
    >
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
        <Spinner />
      )}
      {director ? (
        <InfoDirector>
          {!respons730 && (
            <>
              <Arrow to={() => newFilm(false)}>
                <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
              </Arrow>
              <Arrow to={() => newFilm(true)}>
                <i className="fas fa-arrow-alt-circle-right fa-2x"></i>
              </Arrow>
            </>
          )}
          <Wrapper>
            <img src={director[0].posterUrl} alt={director[0].nameEn} />
            <div>
              <p>{director[0].nameRu}</p>
              <p>{director[0].nameEn}</p>
            </div>
          </Wrapper>
          {director[1] && (
            <Wrapper>
              <img src={director[1].posterUrl} alt={director[1].nameEn} />
              <div>
                <p>{director[1].nameRu}</p>
                <p>{director[1].nameEn}</p>
              </div>
            </Wrapper>
          )}
        </InfoDirector>
      ) : (
        <Spinner />
      )}
    </Info>
  );
};

export default FilmInfo;
