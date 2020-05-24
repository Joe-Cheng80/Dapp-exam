import {
	FETCH_ACCOUNT_FULFILLED,
	FETCH_ASSETS_LIST_FULFILLED,
	FETCH_ASSETS_DETAIL_FULFILLED,
	INIT_DETAIL
} from "../actions";

const initialState = {
	account: "",
	list: [],
	detail: {
		collection: {
			name: ""
		}
	}
};

const assets = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ASSETS_LIST_FULFILLED:
			return {
				...state,
				list: [...state.list, ...action.response.assets]
			};
		case FETCH_ASSETS_DETAIL_FULFILLED:
			return {
				...state,
				detail: action.response.assets[0]
			};
		case INIT_DETAIL:
			return {
				...state,
				detail: initialState.detail
			};
		case FETCH_ACCOUNT_FULFILLED:
			return {
				...state,
				account: action.payload.account
			};
		default:
			return state;
	}
};

export default assets;
