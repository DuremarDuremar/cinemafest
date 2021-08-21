export interface DefaultState {
  loading: boolean;
  data: any[];
  error: string;
}

export enum DefaultActionTypes {
  FETCH_DEFAULT = "FETCH_DEFAULT",
  FETCH_DEFAULT_SUCCESS = "FETCH_DEFAULT_SUCCESS",
  FETCH_DEFAULT_ERROR = "FETCH_DEFAULT_ERROR",
}

interface FetchDefaultAction {
  type: DefaultActionTypes.FETCH_DEFAULT;
}

interface FetchDefaultSuccessAction {
  type: DefaultActionTypes.FETCH_DEFAULT_SUCCESS;
  payload: any[];
}
interface FetchDefaultErrorAction {
  type: DefaultActionTypes.FETCH_DEFAULT_ERROR;
  payload: string;
}

export type DefaultAction =
  | FetchDefaultAction
  | FetchDefaultSuccessAction
  | FetchDefaultErrorAction;
