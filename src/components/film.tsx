import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

import { arrayLink } from "../reducer/arrayLink";

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
import { setTimeout } from "timers";

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

interface DirectTypes {
  [index: number]: {
    nameEn?: string;
    nameRu?: string;
    posterUrl: string;
    personId: number;
  };
}

interface FrameTypes {
  frames: [{ image: string }];
}

const Film: FC = () => {
  let { id } = useParams<ParamTypes>();

  const [state, seState] = useState<number[]>(
    Object.values(arrayLink)
      .map((fest: any) => {
        return fest.filter((item: number[]) => item[0] === Number(id));
      })
      .flat(2)
  );

  const [film, setFilm] = useState<FilmTypes | null>(null);
  const [director, setDirector] = useState<DirectTypes | null>(null);
  const [frame, setFrame] = useState<FrameTypes | null>(null);

  useEffect(() => {
    getAxiosFilm(state[0].toString()).then((response) => {
      setFilm(response);
    });

    setTimeout(() => {
      if (state.length > 2) {
        getAxiosDirectTwo(state.slice(1)).then((response) => {
          setDirector(response);
        });
      } else {
        getAxiosDirect(state[1].toString()).then((response) => {
          setDirector([response]);
        });
      }
    }, 500);

    setTimeout(() => {
      getAxiosFrame(state[0].toString()).then((response) => {
        setFrame(response);
      });
    }, 1000);
  }, [state]);

  console.log(state);
  if (director) {
    console.log(film);
    console.log(frame);
    console.log(director[0]);
  }

  return (
    <Content>
      {" "}
      <Header>
        <button>1</button>
        <button>2</button>
      </Header>
      <Main>
        {film ? (
          <Image>
            <img src={film.posterUrlPreview} alt={film.nameEn} />
          </Image>
        ) : (
          <p>loading</p>
        )}
        <Info>
          {film ? (
            <InfoFilm>
              <p>{film.nameRu}</p>
              <p>{film.nameEn}</p>
              <div>
                {film.countries.map((item, index) => (
                  <span key={index}>{item.country} </span>
                ))}
              </div>
              <p>{film.year}</p>
            </InfoFilm>
          ) : (
            <p>loading</p>
          )}
          {director ? (
            <InfoDirector>
              <div>
                <img src={director[0].posterUrl} alt={director[0].nameEn} />
              </div>
              <div>{director[0].nameRu}</div>
              <div>{director[0].nameEn}</div>
            </InfoDirector>
          ) : (
            <p>loading</p>
          )}
        </Info>
        {frame ? <Frames>123</Frames> : <p>loading</p>}
      </Main>
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
  return res.data;
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

const getAxiosDirectTwo = async (state: number[]) => {
  const listRes = await state.map((item: any) => {
    const res = axios.get(
      `https://kinopoiskapiunofficial.tech/api/v1/staff/${item.toString()}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
        },
      }
    );

    return res;
  });

  const resAll = await Promise.all(listRes).then(function (values) {
    return values.map((item: any) => item.data);
  });

  return resAll;
};
