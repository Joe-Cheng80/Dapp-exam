import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AssetsEntry from "./modules/assets/containers/assetsEntry";
import './polyfill';
import useInitAccount from "./utils/hooks/useInitAccount";
import { useSelector } from 'react-redux';
import { RootState } from "./reducers";

const App = () => {
	const account = useSelector((state:RootState) => state.assets.account);
	useInitAccount();
	return (
		<Router basename="/">
			<div className="App">
				{account.length > 0 && <AssetsEntry />}
			</div>
		</Router>
	);
}



export default App;
