import { SET_IS_LOADING } from "./constants";

export function setFontLoading(isLoading) {
	return { type: SET_IS_LOADING, payload: isLoading };
}
