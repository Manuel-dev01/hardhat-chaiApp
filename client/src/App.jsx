import React from 'react'
import './App.css'
import abi from "./contractJson/chai.json"
import {ethers} from 'ethers'



function App() {
  const [state, setState] =   React.useState({
    provider: null,
    signer: null,
    contract: null
  })

  const [account, setAccount] = React.useState("Not connected")

  React.useEffect(() => {
    const template = async () => {
      const contractAddress = "0xb65247aA462EF6B42E1CF5Ed16Fd6d12f5033d60"
      const contractABI = abi.abi
      // Metamask part
      // In order to do transactions on the sepolia testnet
      // Metamask consist of infura api that'll allow us in connecting to the blockchain

      try {
        const {ethereum} = window
        const account = await ethereum.request({ // This will automatically reqest the metamask and opens the metamask, whenever the person visits the website
          method: "eth_requestAccounts"
        })
  
        setAccount(account)
  
        // The provider is what is going to help us in connecting with the blockchain, using the ethers librarry
        if(ethereum) {
          console.log("Metamask detected")
          const provider = await new ethers.BrowserProvider(ethereum) // Read the blockchain
          const signer = provider.getSigner() //Write the blockchain
    
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer,
          )
  
          console.log(contract)
          setState({ provider, signer, contract})
        } else {
          console.log("Metamask not detected")
        }
      } catch (error) {
        console.error(error)
      }
    }

    template()
  },[])

  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
