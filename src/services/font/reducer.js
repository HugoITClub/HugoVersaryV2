import { SET_IS_LOADING } from "./constants";

const initialState = { isLoading: true };

export function fontReducer(state = initialState, action) {
	switch (action.type) {
		case SET_IS_LOADING:
			return { ...state, isLoading: action.payload };

		default:
			return state;
	}
}
