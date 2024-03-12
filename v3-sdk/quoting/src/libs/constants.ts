// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { SupportedChainId, Token } from '@uniswap/sdk-core'

// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
  '0x1F98431c8aD98523631AE4a59f267346ea31F984'
export const QUOTER_CONTRACT_ADDRESS =
  '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6'

// Currencies and Tokens

// export const WETH_TOKEN = new Token(
//   SupportedChainId.MAINNET,
//   '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//   18,
//   'WETH',
//   'Wrapped Ether'
// )

// export const USDC_TOKEN = new Token(
//   SupportedChainId.MAINNET,
//   '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
//   6,
//   'USDC',
//   'USD//C'
// )

export const COPM_TOKEN = new Token(
  SupportedChainId.POLYGON,
  '0x12050c705152931cFEe3DD56c52Fb09Dea816C23',
  18,
  'COPM',
  'COP Minteo'
)


export const USDC_TOKEN = new Token(
  SupportedChainId.POLYGON,
  '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
  6,
  'USDC',
  'USD Coin'
)
