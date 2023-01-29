import { combineReducers } from "redux";
import { googleReducer } from "../services/google/reducer";

import { languageReducer } from "../services/language/reducer";
import { themeReducer } from "../services/theme/reducer";

export default function createReducers(injectedReducers) {
  return combineReducers({
    language: languageReducer,
    theme: themeReducer,
    google: googleReducer,

    ...injectedReducers,
  });
}
