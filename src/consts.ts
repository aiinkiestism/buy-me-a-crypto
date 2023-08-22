import { AvailableOptionsType,AvailableNetworks,AvailableTokens } from "./types.ts";


export const AvailableOptions: AvailableOptionsType = {
  ETH_MAINNET: {
    key: AvailableNetworks.ETH_MAINNET,
    tokens: [AvailableTokens.ETH, AvailableTokens.DAI, AvailableTokens.USDC],
    name: 'Ethereum Mainnet',
    chainId: 1,
    network: 'homestead',
    explorer: {
      url: "https://etherscan.io",
      apiUrl: "https://api.etherscan.io"
    },
  },
};

export const DEFAULT_MAX_AMOUNT = 0;
