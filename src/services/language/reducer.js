import { CHANGE_LOCALE, DEFAULT_LOCALE } from "./constants";

const initialState = { locale: DEFAULT_LOCALE };

export function languageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return { ...state, locale: action.locale };

    default:
      return state;
  }
}
