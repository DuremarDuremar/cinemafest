import {
  ResponsState,
  ResponsAction,
  ResponsActionTypes,
} from "../../types/respons";

const initianalState: ResponsState = {
  respons950: false,
  respons730: false,
  respons520: false,
};

export const responsReducer = (
  state = initianalState,
  action: ResponsAction
): ResponsState => {
  switch (action.type) {
    case ResponsActionTypes.RESPONS_950:
      return {
        ...state,
        respons950: action.payload,
      };
    case ResponsActionTypes.RESPONS_730:
      return {
        ...state,
        respons730: action.payload,
      };
    case ResponsActionTypes.RESPONS_520:
      return {
        ...state,
        respons520: action.payload,
      };
    default:
      return state;
  }
};
