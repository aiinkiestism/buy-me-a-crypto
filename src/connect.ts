import { AvailableNetwork, AvailableTokens, CustomError } from './types.ts';

// deno-lint-ignore require-await
export async function chooseOptions(
  token?: AvailableTokens,
  network?: AvailableNetwork,
): Promise<void | CustomError> {
  if (!token && !network) {
    throw new Error(CustomError.CHOOSE_OPTIONS_NOPARAM);
  } else {
    if (token && network) {
      // revoke if the token doesn't exist on the network
    } else {
      // goes normal execution

    }
  }
}

// I am guessing this module need to store options and wallet state to somewhere, especially if there's no wallet connection and state in the application provider.
// deno-lint-ignore require-await
export async function connectWallet(network: AvailableNetwork): Promise<void | CustomError> {
  switch (network) {
    case AvailableNetwork.ETH_MAINNET:
      break;
    default:
      throw new Error(CustomError.NOT_AVAILABLE_NETWORK);
  }
}
