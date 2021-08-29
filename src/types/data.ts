export interface DefaultState {
  loading: boolean;
  data: any[];
  error: string;
}

export enum DefaultActionTypes {
  FETCH_DEFAULT = "FETCH_DEFAULT",
  FETCH_DEFAULT_SUCCESS = "FETCH_DEFAULT_SUCCESS",
  FETCH_DEFAULT_ERROR = "FETCH_DEFAULT_ERROR",
  FETCH_DEFAULT_FILMS = "FETCH_DEFAULT_FILMS",
  FETCH_DEFAULT_SUCCESS_FILMS = "FETCH_DEFAULT_SUCCESS_FILMS",
  FETCH_DEFAULT_ERROR_FILMS = "FETCH_DEFAULT_ERROR_FILMS",
  FETCH_DEFAULT_DELETE_FILMS = "FETCH_DEFAULT_DELETE_FILMS",
}

interface FetchDefaultAction {
  type:
    | DefaultActionTypes.FETCH_DEFAULT
    | DefaultActionTypes.FETCH_DEFAULT_FILMS;
}

interface FetchDefaultSuccessAction {
  type:
    | DefaultActionTypes.FETCH_DEFAULT_SUCCESS
    | DefaultActionTypes.FETCH_DEFAULT_SUCCESS_FILMS
    | DefaultActionTypes.FETCH_DEFAULT_DELETE_FILMS;
  payload: any[];
}
interface FetchDefaultErrorAction {
  type:
    | DefaultActionTypes.FETCH_DEFAULT_ERROR
    | DefaultActionTypes.FETCH_DEFAULT_ERROR_FILMS;
  payload: string;
}

export type DefaultAction =
  | FetchDefaultAction
  | FetchDefaultSuccessAction
  | FetchDefaultErrorAction;
