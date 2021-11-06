interface DefaultState {
  newPage: boolean;
}

interface Action {
  type: "NEW_PAGE";
  payload: boolean;
}

const initianalState: DefaultState = {
  newPage: true,
};

export const transitionReducer = (
  state = initianalState,
  action: Action
): DefaultState => {
  switch (action.type) {
    case "NEW_PAGE":
      return {
        newPage: action.payload,
      };
    default:
      return state;
  }
};
