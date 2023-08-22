export enum AvailableTokens {
  ETH = 'ETH',
  DAI = 'DAI',
  USDC = 'USDC',
}

export enum AvailableNetworks {
  ETH_MAINNET = 'ETH_MAINNET',
}

export type NetworkProps = {
  key: AvailableNetworks;
  tokens: AvailableTokens[];
  name: string;
  chainId: number;
  network: string;
  explorer: {
    url: string;
    apiUrl: string;
  }
};

export type AvailableOptionsType = {
  ETH_MAINNET: NetworkProps,
};

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

export enum CustomError {
  NOT_AVAILABLE_NETWORK = 'Please provide the available network.',
  EXCEED_MAX_AMOUNT = 'Amount exceeds MAX AMOUNT.',
  INVALID_OPTIONS = 'Invalid Options.',
}
