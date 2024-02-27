// Sets if the example should run locally or on chain
export enum Chain {
  POLYGON,
  MAINNET,
}

// Inputs that configure this example to run
interface ExampleConfig {
  chain: Chain
  rpc: {
    polygon: string
    mainnet: string
  }
}

// Example Configuration
export const CurrentConfig: ExampleConfig = {
  chain: Chain.POLYGON,
  rpc: {
    polygon: 'https://polygon-mainnet.infura.io/v3/0013337897c94acd82a48d6722ef6f73',
    mainnet: 'https://mainnet.infura.io/v3/4bf032f2d38a4ed6bb975b80d6340847',
  },
}
