import { SET_GAPI_CLIENT } from "./constants";

export function setGApiClient(newGApiClient) {
  return { type: SET_GAPI_CLIENT, payload: newGApiClient };
}
