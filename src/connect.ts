import { AvailableNetworks, AvailableOptions, AvailableTokens, CustomError, NetworkProps } from './types.ts';

// Option Validation, and if it's good return the network options
export function chooseOptions(
  token: AvailableTokens,
  network: AvailableNetworks,
): NetworkProps | CustomError {
  if (!Object.values(AvailableNetworks).includes(network)) throw new Error(CustomError.INVALID_OPTIONS);
  if (!AvailableOptions[network].tokens.includes(token)) throw new Error(CustomError.INVALID_OPTIONS);
  return AvailableOptions[network];
}

// I am guessing this module need to store options and wallet state to somewhere, especially if there's no wallet connection and state in the application provider.
// deno-lint-ignore require-await
export async function connectWallet(network: AvailableNetworks): Promise<void | CustomError> {
  switch (network) {
    case AvailableNetworks.ETH_MAINNET:
      break;
    default:
      throw new Error(CustomError.NOT_AVAILABLE_NETWORK);
  }
}
