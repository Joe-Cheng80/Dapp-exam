import { ofType } from "redux-observable";
import { mergeMap, catchError } from "rxjs/operators";
import { of, from } from "rxjs";
import { get } from "../utils";

const FETCH_ASSETS_LIST = "FETCH_ASSETS_LIST";
export const FETCH_ASSETS_LIST_FULFILLED = "FETCH_ASSETS_LIST_FULFILLED";

export const fetchAssetsList = payload => ({
	type: FETCH_ASSETS_LIST,
	payload
});

export const fetchAssetsListFulfilled = response => ({
	type: FETCH_ASSETS_LIST_FULFILLED,
	response
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

export const assetsEpics = [fetchAssetsListEpic];
