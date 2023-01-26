import { DARK_THEME, DEFAULT_IS_DARK_THEME, LIGHT_THEME, TOGGLE_THEME } from "./constants";

const initialState = { isDark: DEFAULT_IS_DARK_THEME };

export function themeReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      const isDark = !state.isDark;
      document.querySelector("html").setAttribute("data-bs-theme", isDark ? DARK_THEME : LIGHT_THEME);
      return { ...state, isDark };

    default:
      return state;
  }
}
