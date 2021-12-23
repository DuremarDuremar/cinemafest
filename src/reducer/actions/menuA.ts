import { Dispatch } from "redux";
import axios from "axios";
import shuffle from "lodash.shuffle";

import { DefaultActionTypes, DefaultAction } from "../../types/data";
import { arrayLink, date, rej } from "../arrayLink";

const choice = (choiceFest: string) => {
  const bar = date
    .map((item) => `${choiceFest}` + item)
    .filter((item) => arrayLink[item])
    .map((item) => arrayLink[item]);

  const foo = bar.map((item) => {
    return shuffle(item)[0][0];
  });

  return foo;
};

export const fetchMenu = (choiceFest: string, api: string) => {
  return async (dispatch: Dispatch<DefaultAction>) => {
    try {
      dispatch({ type: DefaultActionTypes.FETCH_DEFAULT });

      const resArray = choice(choiceFest).map((item: number, index: number) => {
        const res = axios
          .get(`${api}${item}`, {
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
            // console.log(choiceFest, index);
            return rej(choiceFest, index);
          });

        return res;
      });

      // console.log(choiceFest);

      dispatch({
        type: DefaultActionTypes.FETCH_DEFAULT_SUCCESS,
        payload: await Promise.all(resArray).then(function (values) {
          return values.map((item: any) => item.data.data);
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
