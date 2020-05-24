import { FETCH_ASSETS_LIST_FULFILLED } from "../actions";

const initialState = {
	list: [],
	detail: {}
};

const assets = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ASSETS_LIST_FULFILLED:
			return {
				...state,
				list: [...state.list, ...action.response.assets]
			};
		default:
			return state;
	}
};

export default assets;
