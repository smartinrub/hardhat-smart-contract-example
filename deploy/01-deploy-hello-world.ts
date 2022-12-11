module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    await deploy("HelloWorld", {
        from: deployer,
        args: [],
        log: true,
    })
}

module.exports.tags = ["all", "helloWorld"]
