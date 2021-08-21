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
        loading: true,
      };
    case DefaultActionTypes.FETCH_DEFAULT_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case DefaultActionTypes.FETCH_DEFAULT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
