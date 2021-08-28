import { Dispatch } from "redux";
import axios from "axios";

import { DefaultActionTypes, DefaultAction } from "../../types/data";
import { arrayLink, date } from "../arrayLink";

export const fetchFilms = (linkFest: string) => {
  console.log(linkFest);
};
