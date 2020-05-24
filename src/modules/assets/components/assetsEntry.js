import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Assets = lazy(() => import("../containers/assets"));
const Detail = lazy(() => import("../containers/detail"));

const AssetsEntry = () => (
	<>
		<Suspense fallback={<div>loading</div>}>
			<Switch>
				<Route
					path="/assets/detail/:contractAddress/:tokenId"
					component={Detail}
				/>
				<Route path="/assets/:address/:page" component={Assets} />
				<Redirect
					from="/"
					to={`/assets/0x960DE9907A2e2f5363646d48D7FB675Cd2892e91/0`}
				/>
				<Route render={() => <div>NOT FOUND</div>} />
			</Switch>
		</Suspense>
	</>
);

export default AssetsEntry;
