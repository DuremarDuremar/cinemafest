export interface ResponsState {
  respons1025: boolean;
  respons950: boolean;
  respons730: boolean;
  respons520: boolean;
}

export enum ResponsActionTypes {
  RESPONS_1025 = "RESPONS_1025",
  RESPONS_950 = "RESPONS_950",
  RESPONS_730 = "RESPONS_730",
  RESPONS_520 = "RESPONS_520",
}

interface Respons1025Action {
  type: ResponsActionTypes.RESPONS_1025;
  payload: boolean;
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
  | Respons1025Action
  | Respons950Action
  | Respons730Action
  | Respons520Action;
