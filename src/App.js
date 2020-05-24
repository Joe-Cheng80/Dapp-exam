import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAccountFulfilled } from "./actions";
import "./App.css";
import history from "./history";
import { Router } from "react-router-dom";
import AssetsEntry from "./modules/assets/containers/assetsEntry";
import Web3 from "web3";

class App extends Component {
	state = {
		account: ""
	};
	async loadBlockChain() {
		await window.ethereum.enable();
		const web3 = new Web3(Web3.givenProvider || "http://localhost:3000");
		const accounts = await web3.eth.getAccounts();
		this.props.fetchAccountFulfilled({ account: accounts[0] });
	}

	componentDidMount() {
		this.loadBlockChain();
	}
	render() {
		return (
			<Router history={history} basename="/">
				<div className="App">
					<AssetsEntry />
				</div>
			</Router>
		);
	}
}

const mapDispatchToProps = {
	fetchAccountFulfilled
};

export default connect(null, mapDispatchToProps)(App);
