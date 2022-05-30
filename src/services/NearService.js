import * as buffer from "buffer";
import { connect, keyStores, WalletConnection, Contract } from "near-api-js";
import { formatNearAmount } from "near-api-js/lib/utils/format";
import { _CONFIG_ } from "../config";
import axios from "axios";
import { navigate } from "../components/fleek-router";

export class NearService {
  constructor() {
    if (NearService.instance) {
      return NearService.instance;
    }
    window.Buffer = buffer.Buffer;
    NearService.instance = this;
  }

  async connect() {
    if (!this.near) {
      this.near = await connect({
        networkId: _CONFIG_.networkId,
        keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        nodeUrl: _CONFIG_.nodeUrl,
        walletUrl: _CONFIG_.walletUrl,
        helperUrl: _CONFIG_.helperUrl,
        explorerUrl: _CONFIG_.explorerUrl,
      });
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

  async logout() {
    await localStorage.clear();
    this.wallet.signOut();
    navigate("home");
    window.location.reload();
  }

  async getNFTContractsByAccount(accountId) {
    const serviceUrl = `https://helper.${_CONFIG_.networkId}.near.org/account/${accountId}/likelyNFTs`;
    const result = await axios.get(serviceUrl);
    return result.data;
  }

  async getNFTByContract(contract_id, owner_account_id) {
    try {
      const contract = new Contract(this.wallet.account(), contract_id, {
        viewMethods: ["nft_tokens_for_owner"],
        sender: this.wallet.account(),
      });

      const result = await contract.nft_tokens_for_owner({
        account_id: owner_account_id,
      });
      return result;
    } catch (err) {
      console.log("err", contract_id);
      return [];
    }
  }

  async getNFTById(nft_contract_id, nft_id) {
    const contract = new Contract(this.wallet.account(), nft_contract_id, {
      viewMethods: ["nft_token"],
      sender: this.wallet.account(),
    });

    const params = { token_id: nft_id };

    return contract.nft_token(params);
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

  parseYoctoToNears(yocto) {
    const numberStr = Number(yocto).toLocaleString("fullwide", {
      useGrouping: false,
    });
    return formatNearAmount(numberStr, 2);
  }

  async getTransactionResult(transactionHashes) {
    const result = await this.near.connection.provider.txStatus(
      transactionHashes,
      this.wallet.getAccountId()
    );
    return JSON.parse(atob(result.status.SuccessValue));
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

  async getFiat() {
    const result = await axios.get("https://helper.testnet.near.org/fiat");
    return result.data;
  }

  async getAccountBalance() {
    const account = await this.near.account(this.wallet.getAccountId());
    const result = await account.getAccountBalance();
    return this.parseYoctoToNears(result.total);
  }
}
