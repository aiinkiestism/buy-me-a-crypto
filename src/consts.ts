import { AvailableOptionsType,AvailableNetworks,AvailableTokens, NetworkNames, Networks, NetworkTypes } from "./types.ts";

export const AvailableOptions: AvailableOptionsType = {
  ETH_MAINNET: {
    key: AvailableNetworks.ETH_MAINNET,
    tokens: [AvailableTokens.ETH, AvailableTokens.DAI, AvailableTokens.USDC],
    name: NetworkNames.ETH_MAINNET,
    chainId: 1,
    network: Networks.ETH_MAINNET,
    networkType: NetworkTypes.ETH_MAINNET,
    explorer: {
      url: "https://etherscan.io",
      apiUrl: "https://api.etherscan.io"
    },
  },
};

export const DEFAULT_MAX_AMOUNT = 0;
