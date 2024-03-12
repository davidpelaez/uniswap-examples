import { Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { USDC_TOKEN, COPM_TOKEN, WETH_TOKEN } from './libs/constants'

// Inputs that configure this example to run
export interface ExampleConfig {
  rpc: {
    local: string
    mainnet: string
  }
  tokens: {
    in: Token
    amountIn: number
    out: Token
    poolFee: number
  }
}

// Example Configuration

export const CurrentConfig: ExampleConfig = {
  rpc: {
    local: 'http://localhost:8545',
    mainnet: 'https://polygon-mainnet.infura.io/v3/0013337897c94acd82a48d6722ef6f73',
  },
  tokens: {
    in: USDC_TOKEN,
    amountIn: 2,
    out: COPM_TOKEN,
    poolFee: FeeAmount.MEDIUM,
  },
}
