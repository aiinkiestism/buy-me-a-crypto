import { CustomError, DEFAULT_MAX_AMOUNT } from './types';

export async function transfer(
  amount: number,
  receiver: any, // want to bring ethers type
  maxAmount?: number,
): Promise<void | CustomError> {
  if (maxAmount && amount > maxAmount) throw new Error(CustomError.EXCEED_MAX_AMOUNT);
  if (!maxAmount && amount > DEFAULT_MAX_AMOUNT) throw new Error(CustomError.EXCEED_MAX_AMOUNT);

  // do transfer
}