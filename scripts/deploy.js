const { ethers } = require("hardhat")

async function main() {
  const MyContractFactory = await ethers.getContractFactory("MyContract")
  console.log("Deploying contract...")
  const myContract = await MyContractFactory.deploy()
  await myContract.deployed()
  console.log(`Deployed contract to: ${myContract.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
