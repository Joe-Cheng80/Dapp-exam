import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Assets = lazy(() => import("../containers/assets"));
const Detail = lazy(() => import("../containers/detail"));

const AssetsEntry = props => (
	<>
		<Suspense fallback={<div>loading</div>}>
			<Switch>
				<Route
					path="/assets/detail/:contractAddress/:tokenId"
					component={Detail}
				/>
				<Route path="/assets/:address" component={Assets} />
				<Redirect from="/" to={`/assets/${props.account}`} />
				<Route render={() => <div>NOT FOUND</div>} />
			</Switch>
		</Suspense>
	</>
);

export default AssetsEntry;
