import { combineReducers } from "redux";

import { languageReducer } from "../services/language/reducer";

export default function createReducers(injectedReducers) {
  return combineReducers({
    language: languageReducer,
    ...injectedReducers,
  });
}
