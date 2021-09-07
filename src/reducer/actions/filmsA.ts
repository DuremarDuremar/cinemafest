import { Dispatch } from "redux";
import axios from "axios";
import chunk from "lodash.chunk";

import { DefaultActionTypes, DefaultAction } from "../../types/data";
import { arrayLink } from "../arrayLink";

export const fetchFilms = (linkFest: string, number: number) => {
  const foo = chunk(arrayLink[linkFest], 6);
  console.log(foo);

  return async (dispatch: Dispatch<DefaultAction>) => {
    try {
      dispatch({ type: DefaultActionTypes.FETCH_DEFAULT_FILMS });
      const listRes = await foo[number].map((item: any) => {
        const res = axios.get(
          `https://kinopoiskapiunofficial.tech/api/v2.1/films/${item[0]}`,
          {
            method: "GET",
            headers: {
              "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
            },
          }
        );

        return res;
      });
      dispatch({
        type: DefaultActionTypes.FETCH_DEFAULT_SUCCESS_FILMS,
        payload: await Promise.all(listRes).then(function (values) {
          return values.map((item: any) => item.data.data);
        }),
      });
    } catch (e) {
      dispatch({
        type: DefaultActionTypes.FETCH_DEFAULT_ERROR_FILMS,
        payload: "ошибка",
      });
    }
  };
};

export const filmsDelete = () => {
  return {
    type: DefaultActionTypes.FETCH_DEFAULT_DELETE_FILMS,
    payload: [],
  };
};
