import { WETH9, Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { COPM_TOKEN, USDC_TOKEN, WBTC_TOKEN } from './libs/constants'

// Sets if the example should run locally or on chain
export enum Environment {
  MAINNET,
  POLYGON,
}

// Inputs that configure this example to run
export interface ExampleConfig {
  env: Environment
  rpc: {
    mainnet: string
  }
  pool: {
    tokenA: Token
    tokenB: Token
    fee: FeeAmount
  }
  chart: {
    numSurroundingTicks: number
  }
}

// Example Configuration

// export const CurrentConfig1: ExampleConfig = {
//   env: Environment.MAINNET,
//   rpc: {
//     mainnet: 'https://mainnet.infura.io/v3/0ac57a06f2994538829c14745750d721',
//   },
//   pool: {
//     tokenA: WBTC_TOKEN,
//     tokenB: WETH9[1],
//     fee: FeeAmount.MEDIUM,
//   },
//   chart: {
//     numSurroundingTicks: 100,
//   },
// }

export const CurrentConfig: ExampleConfig = {
  env: Environment.POLYGON,
  rpc: {
    //mainnet: 'https://mainnet.infura.io/v3/0ac57a06f2994538829c14745750d721',
    mainnet: 'https://polygon-mainnet.infura.io/v3/0013337897c94acd82a48d6722ef6f73',
  },
  pool: {
    tokenB: USDC_TOKEN,
    tokenA: COPM_TOKEN,
    fee: FeeAmount.HIGH,
  },
  chart: {
    numSurroundingTicks: 10,
  },
}

console.log("FEES", FeeAmount)

// export const CurrentConfig2: ExampleConfig = {
//   env: Environment.POLYGON,
//   rpc: {
//     mainnet:
//       'https://polygon-mainnet.infura.io/v3/0013337897c94acd82a48d6722ef6f73',
//   },
//   pool: {
//     tokenA: COPM_TOKEN,
//     tokenB: USDC_TOKEN,
//     fee: FeeAmount.MEDIUM,
//   },
//   chart: {
//     numSurroundingTicks: 100,
//   },
// }
