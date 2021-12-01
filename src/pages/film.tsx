import React, { FC, useState, useCallback, useMemo, useEffect } from "react";
import { useParams } from "react-router";
import { useErrorBoundary } from "use-error-boundary";
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
import Spinner from "../components/spinner";

const Film: FC = () => {
  let { id } = useParams<ParamTypes>();

  let arrayFilm = useMemo(() => Object.values(arrayLink).flat(1), []);

  const { respons730 } = useTypeSelector((state) => state.respons);
  const { ErrorBoundary } = useErrorBoundary();

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

  const newFilm = (next: boolean) => {
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
  }; // функция перебора массива

  const [state, setState] = useState<number[]>(renderId(id));
  const [film, setFilm] = useState<FilmTypes | null>(null);
  const [director, setDirector] = useState<DirectTypes | null>(null);
  const [frame, setFrame] = useState<FrameTypes | null>(null);
  const [modalFrame, setModalFrame] = useState<number | null>(null);

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
      <Main>
        {film ? (
          respons730 ? (
            <ErrorBoundary
              render={() => <FestPoster newFilm={newFilm} film={film} />}
              renderError={({ error }) => (
                <p>An error has been caught: {error.message}</p>
              )}
            />
          ) : null
        ) : (
          <Spinner />
        )}
        <ErrorBoundary
          render={() => (
            <FilmInfo
              film={film}
              director={director}
              respons730={respons730}
              newFilm={newFilm}
            />
          )}
          renderError={({ error }) => (
            <p>An error has been caught: {error.message}</p>
          )}
        />

        {frame ? (
          <ErrorBoundary
            render={() => (
              <FilmFrames frame={frame} setModalFrame={setModalFrame} />
            )}
            renderError={({ error }) => (
              <p>An error has been caught: {error.message}</p>
            )}
          />
        ) : (
          <Spinner />
        )}
      </Main>
      {frame && modalFrame && (
        <ErrorBoundary
          render={() => (
            <FilmModal
              modalFrame={modalFrame}
              setModalFrame={setModalFrame}
              frame={frame}
              respons730={respons730}
            />
          )}
          renderError={({ error }) => (
            <p>An error has been caught: {error.message}</p>
          )}
        />
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
