const { ethers, run, network } = require("hardhat")

async function main() {
    const MyContractFactory = await ethers.getContractFactory("MyContract")
    console.log("Deploying contract...")
    const myContract = await MyContractFactory.deploy()
    await myContract.deployed()
    console.log(`Deployed contract to: ${myContract.address}`)
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await myContract.deployTransaction.wait(6) // wait 6 blocks to make sure the contract is already on Etherscan
        await verify(myContract.address, [])
    }

    const helloWorld = await myContract.helloWorld()
    console.log(helloWorld)
}

async function verify(contractAddress, args) {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        // we continue in case something goes wrong
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!")
        } else {
            console.log(e)
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
