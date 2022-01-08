import React, { Component, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { fetchAccountFulfilled } from "./actions";
import "./App.css";
import history from "./history";
import { BrowserRouter as Router } from "react-router-dom";
import AssetsEntry from "./modules/assets/containers/assetsEntry";
import './polyfill';
import useInitAccount from "./utils/hooks/useInitAccount";

const App = ({ account, fetchAccountFulfilled }) => {
	useInitAccount(fetchAccountFulfilled)
	return (
		<Router history={history} basename="/">
			<div className="App">
				{account.length > 0 && <AssetsEntry />}
			</div>
		</Router>
	);
}

const mapStateToProps = state => ({
	account: state.account
});

const mapDispatchToProps = {
	fetchAccountFulfilled
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
