import {
  ResponsState,
  ResponsAction,
  ResponsActionTypes,
} from "../../types/respons";

const initianalState: ResponsState = {
  respons950: false,
  respons615: false,
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
    case ResponsActionTypes.RESPONS_615:
      return {
        ...state,
        respons615: action.payload,
      };
    default:
      return state;
  }
};
