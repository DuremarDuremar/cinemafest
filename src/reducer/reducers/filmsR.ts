import {
  DefaultState,
  DefaultAction,
  DefaultActionTypes,
} from "../../types/data";

const initianalState: DefaultState = {
  loading: false,
  data: [],
  error: "",
};

export const filmsReducer = (
  state = initianalState,
  action: DefaultAction
): DefaultState => {
  switch (action.type) {
    case DefaultActionTypes.FETCH_DEFAULT_FILMS:
      return {
        ...state,
        data: [],
        loading: true,
      };
    case DefaultActionTypes.FETCH_DEFAULT_SUCCESS_FILMS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case DefaultActionTypes.FETCH_DEFAULT_ERROR_FILMS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DefaultActionTypes.FETCH_DEFAULT_DELETE_FILMS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
