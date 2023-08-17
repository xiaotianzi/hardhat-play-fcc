// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { network, run } = require("hardhat")

const { deployApiConsumer } = require("../scripts/deployment/deployApiConsumer")
const { deployAutomationCounter } = require("../scripts/deployment/deployAutomationCounter")
const { deployPriceConsumerV3 } = require("../scripts/deployment/deployPriceConsumerV3")
const { deployRandomNumberConsumer } = require("../scripts/deployment/deployRandomNumberConsumer")
const {
    deployRandomNumberDirectFundingConsumer,
} = require("../scripts/deployment/deployRandomNumberDirectFundingConsumer")

async function main() {
    await run("compile")
    const chainId = network.config.chainId
    await deployApiConsumer(chainId)
    await deployAutomationCounter(chainId)
    await deployPriceConsumerV3(chainId)
    await deployRandomNumberConsumer(chainId)
    await deployRandomNumberDirectFundingConsumer(chainId)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
module.exports = main
