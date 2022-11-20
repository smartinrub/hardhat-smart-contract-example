import { ethers } from "hardhat"
import { expect, assert } from "chai"
import { MyContract, MyContract__factory } from "../typechain-types"

describe("MyContract", function () {
    let myContractFactory: MyContract__factory
    let myContract: MyContract

    beforeEach(async function () {
        myContractFactory = (await ethers.getContractFactory(
            "MyContract"
        )) as MyContract__factory
        myContract = await myContractFactory.deploy()
    })

    it("Should print Hello World", async function () {
        const result = await myContract.helloWorld()
        const expected = "Hello World!"
        // assert.equal(result, expected)
        expect(result).to.equal(expected)
    })
})
