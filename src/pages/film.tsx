import React, { FC, useState, useCallback, useMemo, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { setTimeout } from "timers";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { arrayLink } from "../reducer/arrayLink";
import { ParamTypes, FilmTypes, DirectTypes, FrameTypes } from "../types/film";
import FestPoster from "../components/film_poster";
import FilmInfo from "../components/film_info";
import FilmFrames from "../components/film_frames";
import FilmModal from "../components/film_modal";
import { Content, Main } from "../style/film_style";

const Film: FC = () => {
  let { id } = useParams<ParamTypes>();

  let arrayFilm = useMemo(() => Object.values(arrayLink).flat(1), []);

  const { respons950, respons1025, respons520 } = useTypeSelector(
    (state) => state.respons
  );

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

  const [state, setState] = useState<number[]>(renderId(id));
  const [film, setFilm] = useState<FilmTypes | null>(null);
  const [director, setDirector] = useState<DirectTypes | null>(null);
  const [frame, setFrame] = useState<FrameTypes | null>(null);
  const [modalFrame, setModalFrame] = useState<number | null>(null);
  // if (frame) {
  //   console.log(frame.frames[0].preview);
  // }

  console.log(modalFrame);

  console.log(state, "kk");
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

  return (
    <Content>
      <Main respons1025={respons1025}>
        {film ? (
          <FestPoster state={state} film={film} arrayFilm={arrayFilm} />
        ) : (
          <p>loading</p>
        )}
        <FilmInfo film={film} director={director} />
        {frame ? (
          <FilmFrames
            frame={frame}
            respons1025={respons1025}
            setModalFrame={setModalFrame}
          />
        ) : (
          <p>loading</p>
        )}
      </Main>
      <FilmModal
        modalFrame={modalFrame}
        setModalFrame={setModalFrame}
        frame={frame}
      />
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
