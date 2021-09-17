import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router";
import { useTypeSelector } from "../hooks/useTypeSelector";

import { Content } from "../style/film_style";

interface ParamTypes {
  id: string;
}

interface FilmTypes {
  [index: number]: { filmId: number; nameEn: string };
}

const Film: FC = () => {
  let { id } = useParams<ParamTypes>();
  const { data } = useTypeSelector((state) => state.films);
  const [film, setFilm] = useState<FilmTypes>([]);

  useEffect(() => {
    if (data.length) {
      setFilm(data.filter((item) => item.filmId.toString() === id));
    }
  }, [data, id]);

  console.log("films", film[0].nameEn);

  return (
    <Content>
      {film ? (
        <div>
          <p>{id}</p>
          <p></p>
        </div>
      ) : (
        <p>loading</p>
      )}
    </Content>
  );
};

export default Film;
