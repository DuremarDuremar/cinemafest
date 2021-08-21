import { Dispatch } from "redux";
import axios from "axios";

import { DefaultActionTypes, DefaultAction } from "../../types/data";
import { arrayLink } from "../arrayLink";

const arrayTop: string[] = ["354", "195434", "425", "361"];
const date = [
  "1940s",
  "1950s",
  "1960s",
  "1970s",
  "1980s",
  "1990s",
  "2000s",
  "2010s",
];
export const fetchMenu = (choiceFest: string) => {
  return async (dispatch: Dispatch<DefaultAction>) => {
    const bar = date
      .map((item) => `${choiceFest}` + item)
      .filter((item) => arrayLink[item])
      .map((item) => arrayLink[item]);

    console.log(bar);

    try {
      dispatch({ type: DefaultActionTypes.FETCH_DEFAULT });
      const resArray = arrayTop.map((item) => {
        const res = axios.get(
          `https://kinopoiskapiunofficial.tech/api/v2.1/films/${item}`,
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
        type: DefaultActionTypes.FETCH_DEFAULT_SUCCESS,
        payload: await Promise.all(resArray).then(function (values) {
          return values.map((item) => item.data.data);
        }),
      });
    } catch (e) {
      dispatch({
        type: DefaultActionTypes.FETCH_DEFAULT_ERROR,
        payload: "ошибка",
      });
    }
  };
};
