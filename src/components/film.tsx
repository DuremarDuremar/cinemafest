import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

import { arrayLink } from "../reducer/arrayLink";
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
  filmId: number;
  posterUrlPreview: string;
  nameEn?: string;
  nameRu?: string;
  countries: [{ country: string }];
  year: number;
}

const Film: FC = () => {
  let { id } = useParams<ParamTypes>();
  const { data } = useTypeSelector((state) => state.films);

  const [state, seState] = useState<number[]>(
    Object.values(arrayLink)
      .map((fest: any) => {
        return fest.filter((item: number[]) => item[0] === Number(id));
      })
      .flat(2)
  );

  const [film, setFilm] = useState<FilmTypes | null>(null);

  // useEffect(() => {
  //   if (data.length) {
  //     setFilm(data.filter((item) => item.filmId.toString() === id));
  //   }
  // }, [data, id]);

  useEffect(() => {
    getAxiosFilm(state[0].toString()).then((response) => {
      setFilm(response);
    });
  }, [state]);

  // const initialState = Object.values(arrayLink)
  //   .map((fest: any) => {
  //     return fest.filter((item: number[]) => item[0] === Number(id));
  //   })
  //   .flat(2);

  console.log(film);

  return (
    <Content>
      {film ? (
        <>
          <Header>
            <button>1</button>
            <button>2</button>
          </Header>
          <Main>
            <Image>
              <img src={film.posterUrlPreview} alt={film.nameEn} />
            </Image>
            <Info>
              <InfoFilm>
                <p>{film.nameRu}</p>
                <p>{film.nameEn}</p>
                <div>
                  {film.countries.map((item, index) => (
                    <span key={index}>{item.country}</span>
                  ))}
                </div>
                <p>{film.year}</p>
              </InfoFilm>
              <InfoDirector>
                <div>foto</div>
                <div>name</div>
              </InfoDirector>
            </Info>
            <Frames>123</Frames>
          </Main>
        </>
      ) : (
        <p>loading</p>
      )}
    </Content>
  );
};

export default Film;

const getAxiosFilm = async (id: string) => {
  const res = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
      },
    }
  );
  return res.data.data;
};

const getAxiosFrame = async (id: string) => {
  const res = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/frames`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
      },
    }
  );
};

const getAxiosDirect = async (id: string) => {
  const res = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v1/staff/${id}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
      },
    }
  );
  return res.data;
};
