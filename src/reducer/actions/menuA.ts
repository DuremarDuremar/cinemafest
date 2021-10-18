import { Dispatch } from "redux";
import axios from "axios";
import shuffle from "lodash.shuffle";

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

export const fetchMenu = (choiceFest: string) => {
  return async (dispatch: Dispatch<DefaultAction>) => {
    const bar = date
      .map((item) => `${choiceFest}` + item)
      .filter((item) => arrayLink[item])
      .map((item) => arrayLink[item]);

    const foo = bar.map((item) => {
      return shuffle(item)[0][0];
    });
    try {
      dispatch({ type: DefaultActionTypes.FETCH_DEFAULT });

      const resArray = foo.map((item: number) => {
        const res = axios
          .get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${item}`, {
            method: "GET",
            headers: {
              "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
            },
          })
          .then((res) => {
            return res;
          })
          .catch((error) => {
            // const reserveItem = (err: number, index: number) => {
            //   const arr = bar[index].filter((item) => item[0] !== err);
            //   return arr[0][0];
            // };

            return rej;
          });

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
