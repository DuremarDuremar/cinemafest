import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router";
import { useTypeSelector } from "../hooks/useTypeSelector";

import {
  Content,
  Header,
  Main,
  Image,
  Info,
  InfoFilm,
  InfoDirector,
  Frames,
} from "../style/film_style";

interface ParamTypes {
  id: string;
}

interface FilmTypes {
  [index: number]: {
    filmId: number;
    posterUrlPreview: string;
    nameEn?: string;
    nameRu?: string;
    countries: [{ country: string }];
    year: number;
  };
}

const Film: FC = () => {
  let { id } = useParams<ParamTypes>();
  const { data } = useTypeSelector((state) => state.films);
  const [film, setFilm] = useState<FilmTypes | null>(null);

  useEffect(() => {
    if (data.length) {
      setFilm(data.filter((item) => item.filmId.toString() === id));
    }
  }, [data, id]);
  if (film) {
    console.log("films", film[0].countries);
  }

  return (
    <Content>
      {film ? (
        <>
          <Header></Header>
          <Main>
            <Image>
              <img src={film[0].posterUrlPreview} alt={film[0].nameEn} />
            </Image>
            <Info>
              <InfoFilm>
                <p>{film[0].nameRu}</p>
                <p>{film[0].nameEn}</p>
                <div>
                  {film[0].countries.map((item, index) => (
                    <span key={index}>{item.country}</span>
                  ))}
                </div>
                <p>{film[0].year}</p>
              </InfoFilm>
              <InfoDirector></InfoDirector>
            </Info>
          </Main>
        </>
      ) : (
        <p>loading</p>
      )}
    </Content>
  );
};

export default Film;
