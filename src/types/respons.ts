export interface ResponsState {
  respons950: boolean;
  respons715: boolean;
}

export enum ResponsActionTypes {
  RESPONS_950 = "RESPONS_950",
  RESPONS_715 = "RESPONS_715",
}

interface Respons950Action {
  type: ResponsActionTypes.RESPONS_950;
  payload: boolean;
}

interface Respons715Action {
  type: ResponsActionTypes.RESPONS_715;
  payload: boolean;
}

export type ResponsAction = Respons950Action | Respons715Action;
