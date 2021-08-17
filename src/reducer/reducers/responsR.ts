import {
  ResponsState,
  ResponsAction,
  ResponsActionTypes,
} from "../../types/respons";

const initianalState: ResponsState = {
  respons1000: false,
  respons715: false,
};

export const responsReducer = (
  state = initianalState,
  action: ResponsAction
): ResponsState => {
  switch (action.type) {
    case ResponsActionTypes.RESPONS_1000:
      return {
        ...state,
        respons1000: action.payload,
      };
    case ResponsActionTypes.RESPONS_715:
      return {
        ...state,
        respons715: action.payload,
      };
    default:
      return state;
  }
};
