//import { app, db } from '../firebaseConfig'
//import { collection, addDoc, getDocs } from "firebase/firestore"; 
import React, {useEffect, useState} from 'react'
import Web3Modal from 'web3modal'
import {Contract, ethers} from 'ethers';
//import Modal from './Components/modal'
//import {Chart, ArcElement} from 'chart.js'


export default function Home() {

	const [loadingState, setLoadingState] = useState('not-loaded');

	const [PulseC, setPulseC] = useState(false);
	const [PulseXC, setPulseXC] = useState(false);
	const [LiquidLoansC, setLiquidLoansC] = useState(false);
	const [MintraC, setMintraC] = useState(false);
	const [GeniusC, setGeniusC] = useState(false);
	const [HurricashC, setHurricashC] = useState(false);
	const [PhiatC, setPhiatC] = useState(false);
	const [IMDC, setIMDC] = useState(false);
	const [PulseD, setPulseD] = useState(false);
	const [PulseXD, setPulseXD] = useState(false);
	const [LiquidLoansD, setLiquidLoansD] = useState(false);
	const [MintraD, setMintraD] = useState(false);
	const [GeniusD, setGeniusD] = useState(false);
	const [HurricashD, setHurricashD] = useState(false);
	const [PhiatD, setPhiatD] = useState(false);
	const [IMDD, setIMDD] = useState(false);


	useEffect(()=>{
		init();
		window.ethereum.on('accountsChanged', function (accounts) {
			reload()
		  })
	}, []);

	async function init(){

		try{

			const web3Modal = new Web3Modal()
			const connection = await web3Modal.connect()
			const provider = new ethers.providers.Web3Provider(connection);
			const signer = provider.getSigner();
			const WaitContract = new ethers.Contract(WaitAddress, Wait.abi, signer);


			const pulseC = await WaitContract.haveClaimed(0);
			const pulseXC = await WaitContract.haveClaimed(1);
			const liquidLoansC = await WaitContract.haveClaimed(2);
			const mintraC = await WaitContract.haveClaimed(3);
			const geniusC = await WaitContract.haveClaimed(4);
			const hurricashC = await WaitContract.haveClaimed(5);
			const phiatC = await WaitContract.haveClaimed(6);
			const iMDC = await WaitContract.haveClaimed(7);
			
			const pulseD = await WaitContract.inDataBase(0);
			const pulseXD = await WaitContract.inDataBase(1);
			const liquidLoansD = await WaitContract.inDataBase(2);
			const mintraD = await WaitContract.inDataBase(3);
			const geniusD = await WaitContract.inDataBase(4);
			const hurricashD = await WaitContract.inDataBase(5);
			const phiatD = await WaitContract.inDataBase(6);
			const iMDD = await WaitContract.inDataBase(7);

			setPulseC(pulseC);
			setPulseXC(pulseXC);
			setLiquidLoansC(liquidLoansC);
			setMintraC(mintraC);
			setGeniusC(geniusC);
			setHurricashC(hurricashC);
			setPhiatC(phiatC);
			setIMDC(iMDC);

			setPulseD(pulseD);
			setPulseXD(pulseXD);
			setLiquidLoansD(liquidLoansD);
			setMintraD(mintraD);
			setGeniusD(geniusD);
			setHurricashD(hurricashD);
			setPhiatD(phiatD);
			setIMDD(iMDD);
			
		
			setLoadingState("loaded")
		}
		catch(error){
			console.log(error)
		}
	}
	
	/*async function addData(){
		console.log("what")
		try {
			const docRef = await addDoc(collection(db, "Addresses"), {
			  first: "Ada",
			  last: "Lovelace",
			  born: 1815
			});
			console.log("Document written with ID: ", docRef.id);
		  } catch (e) {
			console.error("Error adding document: ", e);
		  }
	}

	async function readData() {
		const querySnapshot = await getDocs(collection(db, "users"));
		querySnapshot.forEach((doc) => {
		  console.log(`${doc.id} => ${doc.data()}`);
		});
	}*/

	useEffect(() => {
		console.log("hitting?")
		// init()
	},[])

	

  return (
    <>
		<div className="h-full flex justify-center">
			{loadingState=='not-loaded' ?
			(
				<>
				<div>
					<div className='w-full bg-[#00e7fa] flex flex-col relative justify-center items-center lg:flex-row gap-5'>
						<a className=" text-[#252e3f] text-4xl font-sans font-bold mx-20 my-6">Claim Your Free $WAIT</a>
					</div>
					<div className='w-full bg-white flex flex-col relative justify-center items-center lg:flex-row gap-5'>
						<a className=" text-black text-center text-4xl font-sans font-thin mx-16 my-6">If you participated in any of the below sacrifices, you are eligible to claim free $WAIT tokens. You can claim by project or all at once.</a>
					</div>
					<div className='w-full bg-white flex flex-col relative justify-center items-center lg:flex-row gap-5'>
						<button className='w-5/12 h-20 text-xl text-white text-center bg-[#324dff] border-4 border-black my-5'>Claim All $WAIT</button>
					</div>

						<div className='w-full flex flex-col md:flex-row bg-white justify-center pt-6'>
							<div>
								<div className='h-36 w-36 ml-5'>
									<img src='pulse.png'></img>
								</div>
								<a className=" text-black text-center text-4xl font-sans font-thin mx-16 my-6">Pulse</a>
							</div>
							<div>
								<div className='w-full bg-white flex flex-col relative justify-center items-center lg:flex-row gap-5'>
									<a className=" text-black text-center text-xl font-sans mx-16 my-6">If you participated in any of the below sacrifices, you are eligible to claim free $WAIT tokens. You can claim by project or all at once.</a>
								</div>

							</div>
						</div>
					
					
				</div>
				
				</>
			):(
				<p>
					Not Loading
				</p>
			)}
		</div>
	</>
  )
}
