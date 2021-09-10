export interface ResponsState {
  respons950: boolean;
  respons730: boolean;
  respons520: boolean;
}

export enum ResponsActionTypes {
  RESPONS_950 = "RESPONS_950",
  RESPONS_730 = "RESPONS_730",
  RESPONS_520 = "RESPONS_520",
}

interface Respons950Action {
  type: ResponsActionTypes.RESPONS_950;
  payload: boolean;
}

interface Respons730Action {
  type: ResponsActionTypes.RESPONS_730;
  payload: boolean;
}

interface Respons520Action {
  type: ResponsActionTypes.RESPONS_520;
  payload: boolean;
}

export type ResponsAction =
  | Respons950Action
  | Respons730Action
  | Respons520Action;
