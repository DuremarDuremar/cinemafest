import React, { FC } from "react";

import { Image, LinkImage } from "../style/film_poster_style";
import { FilmTypes } from "../types/film";

interface IProps {
  newFilm: (next: boolean) => string;
  film: FilmTypes;
}

const FestPoster: FC<IProps> = ({ newFilm, film }) => {
  return (
    <Image>
      <img src={film.posterUrlPreview} alt={film.nameEn} />
      <LinkImage to={() => newFilm(true)} className="link" next="next">
        <i className="fas fa-arrow-right fa-2x" />
      </LinkImage>
      <LinkImage to={() => newFilm(false)} className="link">
        <i className="fas fa-arrow-right fa-2x" />
      </LinkImage>
    </Image>
  );
};

export default FestPoster;
