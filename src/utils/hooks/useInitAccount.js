import { useEffect } from 'react';
import Web3 from "web3";

export default function useInitAccount(fetchAccount){
    useEffect(async ()=>{
		await window.ethereum.enable();
		const web3 = new Web3(Web3.givenProvider || "http://localhost:3000");
		const accounts = await web3.eth.getAccounts();
		fetchAccount({ account: accounts[0] });
	}, [fetchAccount])
}