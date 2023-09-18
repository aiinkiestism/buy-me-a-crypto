// import EthereumProvider from "npm:@walletconnect/ethereum-provider@2.9.1";
import { AvailableOptions } from "./consts.ts";
import { AvailableNetworks, AvailableTokens, AvailableWallets, CustomError, NetworkProps, } from './types.ts';
import { EthereumProvider } from 'npm:@walletconnect/ethereum-provider@2.9.1';
import Provider from 'npm:@walletconnect/ethereum-provider@2.9.1';

export let provider: Provider.default;

export function chooseOptions(
  token: AvailableTokens,
  network: AvailableNetworks,
): NetworkProps | CustomError {
  if (!Object.values(AvailableNetworks).includes(network)) throw new Error(CustomError.INVALID_OPTIONS);
  if (!AvailableOptions[network].tokens.includes(token)) throw new Error(CustomError.INVALID_OPTIONS);
  return AvailableOptions[network];
}

async function connectWalletWithWeb3Modal(
  projectId: string,
  name: string,
  description: string,
  url: string,
  icon: string,
  log?: boolean,
): Promise<void | CustomError> {
  try {
    if (!provider) {
      provider = await EthereumProvider.init({
        projectId,
        showQrModal: true,
        // qrModalOptions: { themeMode: "light" },
        chains: [AvailableOptions.ETH_MAINNET.chainId],
        methods: ["eth_sendTransaction", "personal_sign"],
        events: ["chainChanged", "accountsChanged"],
        metadata: {
          name,
          description,
          url,
          icons: [icon],
        },
      });
      provider.on('connect', () => {
        if (log) console.info(provider.accounts);
      });
      provider.connect();
    }
  } catch (e) {
    if (log) console.error(e);
  }
}

// I am guessing this module need to store options and wallet state to somewhere, especially if there's no wallet connection and state in the application provider.
export async function connectWallet(
  network: AvailableNetworks,
  wallet?: AvailableWallets,
  projectId?: string,
  name?: string,
  description?: string,
  url?: string,
  icon?: string,
  log?: boolean,
): Promise<void | CustomError> {
  switch (network) {
    case AvailableNetworks.ETH_MAINNET:
      if (!wallet) {
        if (!projectId) throw new Error(CustomError.NO_PROJECTID);
        if (!name || !description || !url || !icon) throw new Error(CustomError.NO_WALLET_METADATA);
        await connectWalletWithWeb3Modal(projectId, name, description, url, icon, log || false);
      } else {
        switch (wallet) {
          case AvailableWallets.WEB3MODAL:
          case AvailableWallets.WALLET_CONNECT:
            if (!projectId) throw new Error(CustomError.NO_PROJECTID);
            if (!name || !description || !url || !icon) throw new Error(CustomError.NO_WALLET_METADATA);
            await connectWalletWithWeb3Modal(projectId, name, description, url, icon, log || false);
            break;
          default:
            throw new Error(CustomError.NOT_AVAILABLE_WALLET);
        }
      }
      break;
    default:
      throw new Error(CustomError.NOT_AVAILABLE_NETWORK);
  }
}
