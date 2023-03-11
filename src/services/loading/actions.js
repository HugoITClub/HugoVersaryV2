import { SET_IS_PAGE_LOADING } from "./constants";

export function setIsPageLoading(isLoading) {
	return { type: SET_IS_PAGE_LOADING, payload: isLoading };
}
