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

export const menuReducer = (
  state = initianalState,
  action: DefaultAction
): DefaultState => {
  switch (action.type) {
    case DefaultActionTypes.FETCH_DEFAULT:
      return {
        ...state,
        data: [],
        loading: true,
      };
    case DefaultActionTypes.FETCH_DEFAULT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case DefaultActionTypes.FETCH_DEFAULT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
