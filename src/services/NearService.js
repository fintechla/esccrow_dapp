import {
  connect,
  keyStores,
  WalletConnection,
  Contract,
  providers,
} from "near-api-js";
import { parseNearAmount } from "near-api-js/lib/utils/format";
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
      _CONFIG_.esccrowContractId, // contract requesting access
      "Esccrow", // optional
      _CONFIG_.url, // optional
      _CONFIG_.url // optional
    );
  }

  async getNFTByContract(contract_id, owner_account_id) {
    const contract = new Contract(this.wallet.account(), contract_id, {
      viewMethods: ["nft_tokens_for_owner"],
      sender: this.wallet.account(),
    });

    return contract.nft_tokens_for_owner({
      account_id: owner_account_id,
    });
  }

  async getTransactionResult(transactionHashes) {
    const result = await this.near.connection.provider.txStatus(
      transactionHashes,
      this.wallet.getAccountId()
    );
    return JSON.parse(atob(result.status.SuccessValue));
  }

  async createTransaction({ sellerWallet, amount, tokenId, contractAddress }) {
    const contract = new Contract(
      this.wallet.account(),
      _CONFIG_.esccrowContractId,
      {
        changeMethods: ["create_transaction"],
        sender: this.wallet.account(),
      }
    );

    const params = {
      seller_id: sellerWallet,
      buyer_id: this.wallet.getAccountId(),
      price: amount * 1,
      nft_id: tokenId,
      nft_contract_id: contractAddress,
    };

    contract.create_transaction(params, undefined, parseNearAmount("0.1"));
  }

  isSigned() {
    return this.wallet.isSignedIn();
  }
}
