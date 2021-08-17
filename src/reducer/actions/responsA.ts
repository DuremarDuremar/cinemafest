import { ResponsActionTypes } from "../../types/respons";

export const respons1000 = (res: boolean) => {
  return {
    type: ResponsActionTypes.RESPONS_1000,
    payload: res,
  };
};
export const respons715 = (res: boolean) => {
  return {
    type: ResponsActionTypes.RESPONS_715,
    payload: res,
  };
};
