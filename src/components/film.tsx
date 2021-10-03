import React, { FC, useState, useCallback, useMemo, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

import { arrayLink } from "../reducer/arrayLink";
import logo from "../assets/logo.png";

import {
  Content,
  Main,
  Image,
  Info,
  InfoFilm,
  InfoDirector,
  Frames,
  Exit,
  LinkImage,
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
  frames: [FrameItemTypes];
}

interface FrameItemTypes {
  image: string;
  preview: string;
}

const Film: FC = () => {
  let { id } = useParams<ParamTypes>();

  let arrayFilm = useMemo(() => Object.values(arrayLink).flat(1), []);

  const renderId = useCallback(
    (id: string) => {
      return arrayFilm
        .map((item: number[]) => {
          if (item[0] === Number(id)) {
            return item;
          } else {
            return [];
          }
        })
        .filter(Boolean)
        .flat(1);
    },
    [arrayFilm]
  );

  console.log(renderId(id));

  const [state, setState] = useState<number[]>(renderId(id));
  const [film, setFilm] = useState<FilmTypes | null>(null);
  const [director, setDirector] = useState<DirectTypes | null>(null);
  const [frame, setFrame] = useState<FrameTypes | null>(null);

  useEffect(() => {
    setFilm(null);
    setDirector(null);
    setFrame(null);
    setState(renderId(id));
  }, [id, renderId]);

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

  const newFilm = (next: any) => {
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
  };

  return (
    <Content>
      <Main>
        {film ? (
          <Image>
            <img src={film.posterUrlPreview} alt={film.nameEn} />
            <LinkImage to={() => newFilm(true)} className="link" next="next">
              <i className="fas fa-arrow-right fa-4x" />
            </LinkImage>
            <LinkImage to={() => newFilm(false)} className="link">
              <i className="fas fa-arrow-right fa-4x" />
            </LinkImage>
          </Image>
        ) : (
          <p>loading</p>
        )}
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
            <p>loadinge</p>
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
        {frame ? (
          <Frames>
            {frame.frames
              .slice(0, 8)
              .map((item: FrameItemTypes, index: number) => {
                return (
                  <div key={index}>
                    <img src={item.preview} alt={index.toString()} />
                  </div>
                );
              })}
          </Frames>
        ) : (
          <p>loading</p>
        )}
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
