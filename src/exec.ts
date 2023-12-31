import { ethers } from 'npm:ethers@6.7.1';
import validator from 'npm:validator@13.11.0';
import { CustomError, NetworkProps, NetworkTypes } from './types.ts';
import { DEFAULT_MAX_AMOUNT } from "./consts.ts";
import { provider } from './connect.ts';

export async function transfer(
  option: NetworkProps,
  amount: number,
  receiver: string,
  maxAmount?: number,
  log?: boolean,
): Promise<void | CustomError> {
  if (maxAmount && amount > maxAmount) throw new Error(CustomError.EXCEED_MAX_AMOUNT);
  if (!maxAmount && amount > DEFAULT_MAX_AMOUNT) throw new Error(CustomError.EXCEED_MAX_AMOUNT);
  if (!validator.isEthereumAddress(receiver)) throw new Error(CustomError.INVALID_ADDRESS);

  if (option.networkType === NetworkTypes.ETH_MAINNET) {
    if (!provider || !window.ethereum) throw new Error(CustomError.PROVIDER_UNDEFINED);
    // TODO: research the ethers v6 best practice with Web3Modal, and fix
    // const signer = provider.signer;
    // const _provider = await ethers.getDefaultProvider(option.network);
    const _provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await _provider.getSigner();
    if (log) console.log(signer);
    const sender = provider.accounts[0];
    if (log) console.log(provider.accounts);
    if (log) console.log(ethers.parseEther(amount.toString()));
    const currentGas = BigInt(await provider.request({ method: 'eth_gasPrice' }));
    if (log) console.log(currentGas);
    const tx = {
      from: sender,
      to: receiver,
      value: ethers.parseEther(amount.toString()),
      nonce: await _provider.getTransactionCount(sender, 'latest'),
      gasLimit: ethers.hexlify('100000'),
      gasPrice: currentGas,
    };
    const estimatedGas = _provider.estimateGas(tx);
    if (log) console.log(estimatedGas);
    const res = await signer.sendTransaction(tx);
    if (log) console.log(res);
  }
}
