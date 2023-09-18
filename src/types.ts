import { Eip1193Provider } from 'npm:ethers@6.7.1';

declare global {
  interface Window {
    ethereum?: Eip1193Provider;
  }
}

export enum AvailableTokens {
  ETH = 'ETH',
  DAI = 'DAI',
  USDC = 'USDC',
}

export enum AvailableNetworks {
  ETH_MAINNET = 'ETH_MAINNET',
}

export enum NetworkNames {
  ETH_MAINNET = 'Ethereum Mainnet',
}

export enum Networks {
  ETH_MAINNET = 'homestead',
}

export enum NetworkTypes {
  ETH_MAINNET = 'evm',
}

export type NetworkProps = {
  key: AvailableNetworks;
  tokens: AvailableTokens[];
  name: NetworkNames;
  chainId: number;
  network: Networks;
  networkType: NetworkTypes;
  explorer: {
    url: string;
    apiUrl: string;
  }
};

export type AvailableOptionsType = {
  ETH_MAINNET: NetworkProps;
};

export enum AvailableWallets {
  WEB3MODAL = 'WEB3MODAL',
  WALLET_CONNECT = 'WALLET_CONNECT',
}

export enum CustomError {
  NOT_AVAILABLE_NETWORK = 'Please provide the available network.',
  NOT_AVAILABLE_WALLET = 'Please provide the available wallet wrapper.',
  EXCEED_MAX_AMOUNT = 'Amount exceeds MAX AMOUNT.',
  INVALID_ADDRESS = 'Invalid Address.',
  INVALID_OPTIONS = 'Invalid Options.',
  NO_PROJECTID = 'No Project ID of Wallet Connect Web3Modal.',
  NO_WALLET_METADATA = 'No Wallet Metadata.',
  PROVIDER_UNDEFINED = 'Wallet Provider Undefined.'
}
