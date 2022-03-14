import { connect, keyStores, WalletConnection } from "near-api-js";
import * as buffer from "buffer";
import { _CONFIG_ } from "../config";

const config = {
  networkId: _CONFIG_.networkId,
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: _CONFIG_.nodeUrl,
  walletUrl: _CONFIG_.walletUrl,
  helperUrl: _CONFIG_.helperUrl,
  explorerUrl: _CONFIG_.explorerUrl,
};

export class NearService {
  static instance;

  constructor() {
    if (NearService.instance) {
      return NearService.instance;
    }
    window.Buffer = buffer.Buffer;
    NearService.instance = this;
  }

  async connect() {
    if (!this.near) {
      this.near = await connect(config);
      this.wallet = new WalletConnection(this.near);
    }
  }

  async signIn() {
    this.wallet.requestSignIn(
      "example-contract.testnet", // contract requesting access
      "Esccrow", // optional
      _CONFIG_.url, // optional
      _CONFIG_.url // optional
    );
  }

  isSigned() {
    return this.wallet.isSignedIn();
  }
}
