import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { Image, LinkImage } from "../style/film_poster_style";
import { FilmTypes } from "../types/film";
import { transitionNewPage } from "../reducer/actions/transitionA";

interface IProps {
  newFilm: (next: boolean) => string;
  film: FilmTypes;
}

const FestPoster: FC<IProps> = ({ newFilm, film }) => {
  const dispatch = useDispatch();

  return (
    <Image>
      <img src={film.posterUrlPreview} alt={film.nameEn} />
      <LinkImage
        onClick={() => dispatch(transitionNewPage(true))}
        to={() => newFilm(true)}
        className="link"
        next="next"
      >
        <i className="fas fa-arrow-right fa-2x" />
      </LinkImage>
      <LinkImage
        onClick={() => dispatch(transitionNewPage(false))}
        to={() => newFilm(false)}
        className="link"
      >
        <i className="fas fa-arrow-right fa-2x" />
      </LinkImage>
    </Image>
  );
};

export default FestPoster;
