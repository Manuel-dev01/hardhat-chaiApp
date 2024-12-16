const {ethers} = require("hardhat")

async function main() {
    const Chai = await ethers.getContractFactory("Chai"); //fetching bytecode and abi
    const chai = await Chai.deploy() // creating an instance of our smart contract

    await chai.waitForDeployment()
    console.log("Deployed contract address:", await chai.getAddress())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1)
    })