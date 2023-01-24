import { combineReducers } from "redux";

import { languageReducer } from "../services/language/reducer";

export default function createReducers() {
  return combineReducers({
    language: languageReducer,
  });
}
