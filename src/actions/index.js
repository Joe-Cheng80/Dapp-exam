import { ofType } from "redux-observable";
import { mergeMap, catchError } from "rxjs/operators";
import { of, from } from "rxjs";
import { get } from "../utils";

const FETCH_ASSETS_LIST = "FETCH_ASSETS_LIST";
export const FETCH_ASSETS_LIST_FULFILLED = "FETCH_ASSETS_LIST_FULFILLED";
const FETCH_ASSETS_DETAIL = "FETCH_ASSETS_DETAIL";
export const FETCH_ASSETS_DETAIL_FULFILLED = "FETCH_ASSETS_DETAIL_FULFILLED";
export const INIT_DETAIL = "INIT_DETAIL";

export const fetchAssetsList = payload => ({
	type: FETCH_ASSETS_LIST,
	payload
});

export const fetchAssetsListFulfilled = response => ({
	type: FETCH_ASSETS_LIST_FULFILLED,
	response
});

export const fetchAssetsDetail = payload => ({
	type: FETCH_ASSETS_DETAIL,
	payload
});

export const fetchAssetsDetailFulfilled = response => ({
	type: FETCH_ASSETS_DETAIL_FULFILLED,
	response
});

export const initDetail = () => ({
	type: INIT_DETAIL
});

//epic
export const fetchAssetsListEpic = action$ =>
	action$.pipe(
		ofType(FETCH_ASSETS_LIST),
		mergeMap(action =>
			from(
				get({
					url: "https://api.opensea.io/api/v1/assets",
					payload: {
						...action.payload,
						limit: 20,
						format: "json"
					}
				})
			).pipe(
				mergeMap(response => of(fetchAssetsListFulfilled(response))),
				catchError(error => console.error(error))
			)
		)
	);

export const fetchAssetsDetailEpic = action$ =>
	action$.pipe(
		ofType(FETCH_ASSETS_DETAIL),
		mergeMap(action =>
			from(
				get({
					url: "https://api.opensea.io/api/v1/assets",
					payload: action.payload
				})
			).pipe(
				mergeMap(response => of(fetchAssetsDetailFulfilled(response))),
				catchError(error => console.error(error))
			)
		)
	);

export const assetsEpics = [fetchAssetsListEpic, fetchAssetsDetailEpic];
