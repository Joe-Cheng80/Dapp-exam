import { useEffect } from 'react';
import Web3 from "web3";
import { useDispatch } from 'react-redux';
import { fetchAccountFulfilled } from "../../actions";

export default function useInitAccount(){
    const dispatch = useDispatch();
    useEffect(async ()=>{
		await window.ethereum.enable();
		const web3 = new Web3(Web3.givenProvider || "http://localhost:3000");
		const accounts = await web3.eth.getAccounts();
		dispatch(fetchAccountFulfilled({ account: accounts[0] }));
	}, [dispatch])
}