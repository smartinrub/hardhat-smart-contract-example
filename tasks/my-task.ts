import { task } from "hardhat/config"

export default task("my-task", "This is a custom task").setAction(async () => {
    console.log("Hello Task!")
})

module.exports = {}
