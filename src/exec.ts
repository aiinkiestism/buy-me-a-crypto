import { ethers } from 'npm:ethers@6.7.1';
import { CustomError } from './types.ts';
import { DEFAULT_MAX_AMOUNT } from "./consts.ts";

// deno-lint-ignore require-await
export async function transfer(
  amount: number,
  // deno-lint-ignore no-explicit-any
  _receiver: any, // want to bring ethers type
  maxAmount?: number,
): Promise<void | CustomError> {
  if (maxAmount && amount > maxAmount) throw new Error(CustomError.EXCEED_MAX_AMOUNT);
  if (!maxAmount && amount > DEFAULT_MAX_AMOUNT) throw new Error(CustomError.EXCEED_MAX_AMOUNT);

  // do transfer
}
