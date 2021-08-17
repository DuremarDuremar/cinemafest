export interface ResponsState {
  respons1000: boolean;
  respons715: boolean;
}

export enum ResponsActionTypes {
  RESPONS_1000 = "RESPONS_1000",
  RESPONS_715 = "RESPONS_715",
}

interface Respons1000Action {
  type: ResponsActionTypes.RESPONS_1000;
  payload: boolean;
}

interface Respons715Action {
  type: ResponsActionTypes.RESPONS_715;
  payload: boolean;
}

export type ResponsAction = Respons1000Action | Respons715Action;
