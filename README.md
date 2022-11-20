# Hardhat Smart Contract Example

## Getting Started

### Prerequisites

- Node
- NPM

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

```
yarn hardhat run scripts/deploy.js
```

### Run Tests

```
yarn hardhat test
```

to run the tests with the gas reporter:

```
REPORT_GAS=true yarn hardhat test
```

### Access to Console

```
yarn hardhat console
```

### Clean Project

```
yarn hardhat clean
```
