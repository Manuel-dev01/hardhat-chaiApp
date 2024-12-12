const hre = require("hardhat")

async function main() {
    const Chai = hre.ethers.getContractFactory("Chai"); //fetching bytecode and abi
    const chai = await Chai.deploy() // creating an instance of our smart contract

    await chai.deployed() //Deploying your smart contractso/

    console.log(`Deployed contract addrss: ${chai.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1)
    })