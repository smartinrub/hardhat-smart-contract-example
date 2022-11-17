const { task } = require("hardhat/config")

task("my-task", "This is a custom task").setAction(async () => {
    console.log("Hello Task!")
})

module.exports = {}
