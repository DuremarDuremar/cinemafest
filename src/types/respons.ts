export interface ResponsState {
  respons950: boolean;
  respons730: boolean;
}

export enum ResponsActionTypes {
  RESPONS_950 = "RESPONS_950",
  RESPONS_730 = "RESPONS_730",
}

interface Respons950Action {
  type: ResponsActionTypes.RESPONS_950;
  payload: boolean;
}

interface Respons730Action {
  type: ResponsActionTypes.RESPONS_730;
  payload: boolean;
}

export type ResponsAction = Respons950Action | Respons730Action;
