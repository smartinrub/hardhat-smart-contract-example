import { task } from "hardhat/config"

export default task("chain-id", "Prints Chain ID").setAction(
    async (taskArgs, hre) => {
        console.log(hre.network.config.chainId)
    }
)

module.exports = {}
