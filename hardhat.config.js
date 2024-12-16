require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config() // yarn add --dev dotenv

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY


module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.7",

  networks: {
    sepolia : {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4
    },
  },
};

//to deploy: c
//