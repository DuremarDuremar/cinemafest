import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { responsReducer } from "./reducers/responsR";
import { menuReducer } from "./reducers/menuR";

const rootReducer = combineReducers({
  respons: responsReducer,
  menu: menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
