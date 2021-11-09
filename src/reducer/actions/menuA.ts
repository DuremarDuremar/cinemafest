import { Dispatch } from "redux";
import axios from "axios";
import shuffle from "lodash.shuffle";
import chunk from "lodash.chunk";
import round from "lodash.round";

import { DefaultActionTypes, DefaultAction } from "../../types/data";
import { arrayLink, date } from "../arrayLink";

const rej = {
  data: {
    data: {
      posterUrl:
        "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",
    },
  },
};

const choice = (choiceFest: string) => {
  const bar = date
    .map((item) => `${choiceFest}` + item)
    .filter((item) => arrayLink[item])
    .map((item) => arrayLink[item]);

  const foo = bar.map((item) => {
    return shuffle(item)[0][0];
  });
  console.log(foo);
  return foo;
};

export const fetchMenu = (choiceFest: string) => {
  return async (dispatch: Dispatch<DefaultAction>) => {
    try {
      dispatch({ type: DefaultActionTypes.FETCH_DEFAULT });

      const arr = chunk(
        choice(choiceFest),
        round(choice(choiceFest).length / 2)
      );

      const resArray = arr[0].map((item: number) => {
        const res = axios
          .get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${item}`, {
            method: "GET",
            headers: {
              "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            return res;
          })
          .catch((error) => {
            return rej;
          });

        return res;
      });

      const resArray2 = arr[1].map((item: number) => {
        const res = axios
          .get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${item}`, {
            method: "GET",
            headers: {
              "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            return res;
          })
          .catch((error) => {
            return rej;
          });

        return res;
      });

      dispatch({
        type: DefaultActionTypes.FETCH_DEFAULT_SUCCESS,
        payload: await Promise.all([...resArray, ...resArray2]).then(function (
          values
        ) {
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
