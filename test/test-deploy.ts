import { ethers } from "hardhat"
import { expect } from "chai"
import { HelloWorld, HelloWorld__factory } from "../typechain-types"

describe("HelloWorld", function () {
    let myContractFactory: HelloWorld__factory
    let myContract: HelloWorld

    beforeEach(async function () {
        myContractFactory = (await ethers.getContractFactory(
            "HelloWorld"
        )) as HelloWorld__factory
        myContract = await myContractFactory.deploy()
    })

    it("Should print Hello World", async function () {
        const result = await myContract.helloWorld()
        const expected = "Hello World!"
        // assert.equal(result, expected)
        expect(result).to.equal(expected)
    })
})
