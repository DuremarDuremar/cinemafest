import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router";
import { useTypeSelector } from "../hooks/useTypeSelector";

import { Content } from "../style/film_style";

interface ParamTypes {
  id: string;
}

const Film: FC = () => {
  let { id } = useParams<ParamTypes>();
  const { data } = useTypeSelector((state) => state.films);
  const [film, setFilm] = useState<object[]>([{}]);

  useEffect(() => {
    setFilm(data.filter((item) => item.filmId.toString() === id));
  }, [data, id]);

  console.log("films", film[0]);

  return (
    <Content>
      {" "}
      {film[0] ? (
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
