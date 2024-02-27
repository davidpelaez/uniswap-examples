// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { SupportedChainId, Token } from '@uniswap/sdk-core'

// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
  '0x1F98431c8aD98523631AE4a59f267346ea31F984'

// Currencies and Tokens

export const WETH_TOKEN = new Token(
  SupportedChainId.MAINNET,
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  18,
  'WETH',
  'Wrapped Ether'
)

export const WBTC_TOKEN = new Token(
  1,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC'
)

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
