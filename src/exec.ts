import { ethers } from 'npm:ethers@6.7.1';
import { CustomError, NetworkProps, NetworkTypes } from './types.ts';
import { DEFAULT_MAX_AMOUNT } from "./consts.ts";
import { provider } from './connect.ts';

export async function transfer(
  option: NetworkProps,
  amount: number,
  receiver: string, // better typing needed
  maxAmount?: number,
): Promise<void | CustomError> {
  if (maxAmount && amount > maxAmount) throw new Error(CustomError.EXCEED_MAX_AMOUNT);
  if (!maxAmount && amount > DEFAULT_MAX_AMOUNT) throw new Error(CustomError.EXCEED_MAX_AMOUNT);

  if (option.networkType === NetworkTypes.ETH_MAINNET) {
    if (!provider) throw new Error(CustomError.PROVIDER_UNDEFINED);
    const signer = provider.signer;

  }
}
