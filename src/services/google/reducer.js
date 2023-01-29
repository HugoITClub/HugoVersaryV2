import { SET_GAPI_CLIENT } from "./constants";

const initialState = { gApiClient: null };

export function googleReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GAPI_CLIENT:
      return { ...state, gApiClient: action.payload };

    default:
      return state;
  }
}
