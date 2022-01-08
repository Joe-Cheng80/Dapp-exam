import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const Assets = lazy(() => import("../containers/assets"));
const Detail = lazy(() => import("../containers/detail"));

const AssetsEntry = ({ account }) => {
	return (
			<Routes>
				<Route
					path="assets/detail/:contractAddress/:tokenId"
					element={<Suspense fallback={<div>loading</div>}><Detail /></Suspense>}
				/>
				<Route path="assets/:address" element={<Suspense fallback={<div>loading</div>}><Assets /></Suspense>} />
				<Route
    				path="*"
        			element={<Navigate to={`/assets/${account}`} />}
    			/>
			</Routes>
	);
};

export default AssetsEntry;