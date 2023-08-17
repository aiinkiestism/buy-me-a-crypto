export enum AvailableTokens {
  ETH = 'ETH',
  DAI = 'DAI',
  USDC = 'USDC',
}

export enum AvailableNetwork {
  ETH_MAINNET = 'ETH_MAINNNET',
}

export const DEFAULT_MAX_AMOUNT = 0;

export enum CustomError {
  CHOOSE_OPTIONS_NOPARAM = 'Please choose a token or network.',
  NOT_AVAILABLE_NETWORK = 'Please provide the available network.',
  EXCEED_MAX_AMOUNT = 'Amount exceeds MAX AMOUNT.',
}
