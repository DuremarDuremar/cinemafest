export interface ResponsState {
  respons950: boolean;
  respons615: boolean;
}

export enum ResponsActionTypes {
  RESPONS_950 = "RESPONS_950",
  RESPONS_615 = "RESPONS_715",
}

interface Respons950Action {
  type: ResponsActionTypes.RESPONS_950;
  payload: boolean;
}

interface Respons615Action {
  type: ResponsActionTypes.RESPONS_615;
  payload: boolean;
}

export type ResponsAction = Respons950Action | Respons615Action;
