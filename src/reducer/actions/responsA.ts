import { ResponsActionTypes } from "../../types/respons";

export const respons950 = (res: boolean) => {
  return {
    type: ResponsActionTypes.RESPONS_950,
    payload: res,
  };
};
export const respons615 = (res: boolean) => {
  return {
    type: ResponsActionTypes.RESPONS_615,
    payload: res,
  };
};
