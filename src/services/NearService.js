import { connect, keyStores, WalletConnection, Contract } from "near-api-js";
import {
  parseNearAmount,
  formatNearAmount,
} from "near-api-js/lib/utils/format";
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

  async belonsToEsccrow(contract_id, nft_id) {
    const contract = new Contract(this.wallet.account(), contract_id, {
      viewMethods: ["nft_token"],
      sender: this.wallet.account(),
    });

    return contract.nft_token({
      token_id: nft_id,
    });
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

  async getNFTById(nft_contract_id, nft_id) {
    const contract = new Contract(this.wallet.account(), nft_contract_id, {
      viewMethods: ["nft_token"],
      sender: this.wallet.account(),
    });

    const params = { token_id: nft_id };

    return contract.nft_token(params);
  }

  async sendToken({ nft_id, nft_contract_id, transaction_id }) {
    const contract = new Contract(this.wallet.account(), nft_contract_id, {
      changeMethods: ["nft_transfer_call"],
      sender: this.wallet.account(),
    });

    const params = {
      receiver_id: _CONFIG_.esccrowContractId,
      token_id: nft_id,
      msg: String(transaction_id),
    };

    contract.nft_transfer_call(params, "200000000000000", "1");
  }

  async getTransferTokenResult(transactionHashes) {
    const result = await this.near.connection.provider.txStatus(
      transactionHashes,
      this.wallet.getAccountId()
    );
    return result;
  }

  async getTransactionResult(transactionHashes) {
    const result = await this.near.connection.provider.txStatus(
      transactionHashes,
      this.wallet.getAccountId()
    );
    return JSON.parse(atob(result.status.SuccessValue));
  }

  async lockToken({ transaction_id, nft_contract_id, nft_id }) {
    const contract = new Contract(
      this.wallet.account(),
      _CONFIG_.esccrowContractId,
      {
        changeMethods: ["is_nft_locked"],
        sender: this.wallet.account(),
      }
    );

    const params = { transaction_id, nft_contract_id, token_id: nft_id };
    contract.is_nft_locked(params, undefined, undefined);
  }

  async cancelTransaction({ transaction_id }) {
    const contract = new Contract(
      this.wallet.account(),
      _CONFIG_.esccrowContractId,
      {
        changeMethods: ["cancel_transaction"],
        sender: this.wallet.account(),
      }
    );
    const params = { transaction_id };
    return contract.cancel_transaction(params, undefined, undefined);
  }

  async collectTransaction({ transaction_id }) {
    const contract = new Contract(
      this.wallet.account(),
      _CONFIG_.esccrowContractId,
      {
        changeMethods: ["pay_transaction"],
        sender: this.wallet.account(),
      }
    );

    const params = { transaction_id };
    return contract.pay_transaction(params, undefined, undefined);
  }

  async collectNFT({ transaction_id }) {
    const contract = new Contract(
      this.wallet.account(),
      _CONFIG_.esccrowContractId,
      {
        changeMethods: ["transfer_nft"],
        sender: this.wallet.account(),
      }
    );

    const params = { transaction_id };
    return contract.transfer_nft(params, undefined, undefined);
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
      price: parseNearAmount(amount),
      nft_id: tokenId,
      nft_contract_id: contractAddress,
      callbackUrl: "https://example.com/callback",
    };

    const deposit = String(amount * 1 + 0.1);
    contract.create_transaction(params, undefined, parseNearAmount(deposit));
  }

  isSigned() {
    return this.wallet.isSignedIn();
  }

  async isAnAccount(account_id) {
    try {
      await this.near.connection.provider.query({
        request_type: "view_account",
        finality: "final",
        account_id,
      });
      return true;
    } catch (err) {
      return false;
    }
  }

  async isAContract(contract_id) {
    try {
      await this.near.connection.provider.query({
        request_type: "view_code",
        finality: "final",
        account_id: contract_id,
      });
      return true;
    } catch (err) {
      return false;
    }
  }

  async getTransactionById(transactionId) {
    const contract = new Contract(
      this.wallet.account(),
      _CONFIG_.esccrowContractId,
      {
        viewMethods: ["get_transaction_by_id"],
        sender: this.wallet.account(),
      }
    );
    const params = { transaction_id: Number(transactionId) };
    return contract.get_transaction_by_id(params);
  }

  parseYoctoToNears(yocto) {
    const numberStr = Number(yocto).toLocaleString("fullwide", {
      useGrouping: false,
    });
    return formatNearAmount(numberStr, 2);
  }

  getTransactionsByAccount(fromIndex, limit) {
    const contract = new Contract(
      this.wallet.account(),
      _CONFIG_.esccrowContractId,
      {
        viewMethods: ["get_transactions_by_account"],
        sender: this.wallet.account(),
      }
    );

    const params = {
      account_id: this.wallet.getAccountId(),
      from_index: String(fromIndex),
      limit,
    };

    return contract.get_transactions_by_account(params);
  }

  getNumberOfTransactionsByAccount() {
    const contract = new Contract(
      this.wallet.account(),
      _CONFIG_.esccrowContractId,
      {
        viewMethods: ["get_number_of_transactions_by_account"],
        sender: this.wallet.account(),
      }
    );

    const params = {
      account_id: this.wallet.getAccountId(),
    };

    return contract.get_number_of_transactions_by_account(params);
  }
}
