const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("MyContract", function () {
    let myContractFactory, myContract

    beforeEach(async function () {
        myContractFactory = await ethers.getContractFactory("MyContract")
        myContract = await myContractFactory.deploy()
    })

    it("Should print Hello World", async function () {
        const result = await myContract.helloWorld()
        const expected = "Hello World!"
        // assert.equal(result, expected)
        expect(result).to.equal(expected)
    })
})
