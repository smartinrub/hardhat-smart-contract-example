# Hardhat Smart Contract Example

## Getting Started

### Prerequisites

-   Node
-   NPM

### Installation

Create an `.env` file and configure the following env variables:

```
GOERLI_RPC_URL=<URL_TO_GOERLI_NETWORK>
PRIVATE_KEY=<YOUR_PRIVATE_KEY>
ETHERSCAN_API_KEY=<KEY_FROM_ETHERSCAN>
COINMARKETCAP_API_KEY=<KEY_FROM_COINMARKETCAP>
```

Create accounts on [Alchemy](https://www.alchemy.com), [Etherscan](https://etherscan.io) and [CoinMarketCap](https://coinmarketcap.com/api/) if you don't have them.

## QuickStart

```bash
cd hardhat-smart-contract-example
yarn
```

## Usage

### Deploy Contract

Deploy the contract to a local node:

```bash
yarn hardhat node
```

Example for deploying to the Goerli testnet:

```bash
yarn hardhat deploy --network goerli
```

### Run Tests

```bash
yarn test
```

to run the tests with the gas reporter:

```bash
REPORT_GAS=true yarn test
```

### Access to Console

```
yarn hardhat console
```

### Clean Project

```
yarn hardhat clean
```
