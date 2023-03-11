import { SET_IS_PAGE_LOADING } from "./constants";

const initialState = { isPageLoading: true };

export function loadingReducer(state = initialState, action) {
	switch (action.type) {
		case SET_IS_PAGE_LOADING:
			return { ...state, isPageLoading: action.payload };

		default:
			return state;
	}
}
