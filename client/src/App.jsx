import React from 'react'
import './App.css'
import abi from "./contractJson/chai.json"
import {ethers} from 'ethers'
import Memos from "./components/Memos"
import Buy from "./components/Buy"

function App() {
  const [state, setState] = React.useState({
    provider: null,
    signer: null,
    contract: null
  });

  const [account, setAccount] = React.useState("Not connected");

  
  React.useEffect(() => {
    const template = async () => {
      const contractAddress = "0xb65247aA462EF6B42E1CF5Ed16Fd6d12f5033d60";
      const contractABI = abi.abi;

      try {
        const { ethereum } = window;

        if (!ethereum) {
          console.log("Metamask is not installed");
          return;
        }

        const accounts = await ethereum.request({ 
          method: "eth_requestAccounts"
        });

        setAccount(accounts[0]); // Set first account

        // Listen for account changes
        window.ethereum.on("accountsChanged", (accounts) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]); // Update to new account
          } else {
            setAccount("Not connected"); // Handle no accounts case
          }
        });

        const provider = new ethers.BrowserProvider(ethereum); // Read the blockchain
        const signer = await provider.getSigner(); // Write to the blockchain

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log(contract);
        setState({ provider, signer, contract });
      } catch (error) {
        console.error(error);
      }
    };

    template();
  }, [])

  return (
    <div className="App">
      <h3>Connected account: {account}</h3>
      <Buy state={state} />
      {/* <Memos /> */}
    </div>
  )
}

export default App;
