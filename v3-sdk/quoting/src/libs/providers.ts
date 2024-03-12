import { ethers, providers } from 'ethers'
// import { CurrentConfig } from '../config'

// Provider Functions


const mainnetProvider = new ethers.providers.InfuraProvider(
  137,
  '0013337897c94acd82a48d6722ef6f73' //process.env.INFURA_API_KEY
)

export function getProvider(): providers.Provider {
  // return new ethers.providers.JsonRpcProvider(CurrentConfig.rpc.mainnet)
  return mainnetProvider
}
