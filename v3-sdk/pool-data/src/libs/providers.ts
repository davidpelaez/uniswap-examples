import { ethers } from 'ethers'
import { CurrentConfig } from '../config'
import { BaseProvider } from '@ethersproject/providers'

console.log('Creating provider with', CurrentConfig.rpc.mainnet)
// Single copies of provider and wallet
const mainnetProviderORIG = new ethers.providers.JsonRpcProvider(
  CurrentConfig.rpc.mainnet
)

const mainnetProvider = new ethers.providers.InfuraProvider(
  137,
  '0013337897c94acd82a48d6722ef6f73' //process.env.INFURA_API_KEY
);

window.mp = mainnetProvider;

// Provider  Functions

export function getMainnetProvider(): BaseProvider {
  return mainnetProvider
}
