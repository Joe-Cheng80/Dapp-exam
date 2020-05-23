import React, { lazy, Suspense } from "react";
import "./App.css";
import history from "./history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

const Assets = lazy(() => import("./modules/assets/components/assets"));
const Detail = lazy(() => import("./modules/assets/components/detail"));

function App() {
	return (
		<Router history={history} basename="/">
			<div className="App">
				<Suspense fallback={<div>loading</div>}>
					<Switch>
						<Route
							path="/assets/detail/:tokenId"
							component={Detail}
						/>
						<Route
							path="/assets/:address/:page"
							component={Assets}
						/>
						<Redirect
							from="/"
							to={`/assets/0x960DE9907A2e2f5363646d48D7FB675Cd2892e91/0`}
						/>
						<Route render={() => <div>NOT FOUND</div>} />
					</Switch>
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
