const { ethers, run, network } = require("hardhat")

async function main() {
    const helloWorldFactory = await ethers.getContractFactory("HelloWorld")
    console.log("Deploying contract...")
    const helloWorld = await helloWorldFactory.deploy()
    await helloWorld.deployed()
    console.log(`Deployed contract to: ${helloWorld.address}`)
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await helloWorld.deployTransaction.wait(6) // wait 6 blocks to make sure the contract is already on Etherscan
        await verify(helloWorld.address, [])
    }

    const result = await helloWorld.helloWorld()
    console.log(result)

    // update hello world
    const transactionResponse = await helloWorld.updateFrom("Sergio")
    await transactionResponse.wait(1)
    const updatedResult = await helloWorld.helloWorld()
    console.log(updatedResult)
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
