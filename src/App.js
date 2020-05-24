import React from "react";
import "./App.css";
import history from "./history";
import { Router } from "react-router-dom";
import AssetsEntry from "./modules/assets/components/assetsEntry";

function App() {
	return (
		<Router history={history} basename="/">
			<div className="App">
				<AssetsEntry />
			</div>
		</Router>
	);
}

export default App;
