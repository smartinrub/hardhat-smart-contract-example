const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("HelloWorld", function () {
    let helloWorldFactory, helloWorld

    beforeEach(async function () {
        helloWorldFactory = await ethers.getContractFactory("HelloWorld")
        helloWorld = await helloWorldFactory.deploy()
    })

    it("Should print Hello World", async function () {
        const result = await helloWorld.helloWorld()
        const expected = "Hello World!"
        // assert.equal(result, expected)
        expect(result).to.equal(expected)
    })

    it("Should update Hello World with from", async function () {
        await helloWorld.updateFrom("Sergio")
        const result = await helloWorld.helloWorld()
        const expected = "Hello World from Sergio!"
        // assert.equal(result, expected)
        expect(result).to.equal(expected)
    })
})
