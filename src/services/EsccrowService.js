import { Contract } from "near-api-js";
import { _CONFIG_ } from "../config";
import { NearService } from "./NearService";
import { parseNearAmount } from "near-api-js/lib/utils/format";

export class EsccrowService {
  static instance;
  viewMethods = [
    "get_transaction_fee_parameter",
    "get_number_of_transactions_by_account",
    "get_transactions_by_account",
    "get_transaction_by_id",
  ];
  changeMethods = [
    "create_transaction",
    "pay_transaction",
    "cancel_transaction",
    "transfer_nft",
  ];

  constructor() {
    if (EsccrowService.instance) {
      return EsccrowService.instance;
    }
    EsccrowService.instance = this;
    this.nearService = new NearService();
    this.contractId = _CONFIG_.esccrowContractId;
    this.initContractMethods();
  }

  initContractMethods() {
    this.contract = new Contract(
      this.nearService.wallet.account(),
      this.contractId,
      {
        viewMethods: this.viewMethods,
        changeMethods: this.changeMethods,
        sender: this.nearService.wallet.account(),
      }
    );
  }

  async getPercentFee() {
    const result = await this.contract.get_transaction_fee_parameter();
    return result / 10;
  }

  async createTransaction({
    sellerWallet,
    amount,
    tokenId,
    contractAddress,
    durationMinutes,
  }) {
    const params = {
      seller_id: sellerWallet,
      buyer_id: this.nearService.wallet.getAccountId(),
      price: Number(amount * 1),
      nft_id: tokenId,
      nft_contract_id: contractAddress,
      duration_in_minutes: Number(durationMinutes),
    };

    const deposit = String(amount * 1 + 0.1);
    this.contract.create_transaction(
      params,
      undefined,
      parseNearAmount(deposit)
    );
  }

  getNumberOfTransactionsByAccount() {
    const params = {
      account_id: this.nearService.wallet.getAccountId(),
    };

    return this.contract.get_number_of_transactions_by_account(params);
  }

  getTransactionsByAccount(fromIndex, limit) {
    const params = {
      account_id: this.nearService.wallet.getAccountId(),
      from_index: String(fromIndex),
      limit,
    };

    return this.contract.get_transactions_by_account(params);
  }

  getTransactionById(transactionId) {
    const params = { transaction_id: Number(transactionId) };
    return this.contract.get_transaction_by_id(params);
  }

  collectTransaction({ transaction_id }) {
    const params = { transaction_id };
    return this.contract.pay_transaction(params, undefined, undefined);
  }

  cancelTransaction({ transaction_id }) {
    const params = { transaction_id };
    return this.contract.cancel_transaction(params, undefined, undefined);
  }

  async collectNFT({ transaction_id }) {
    const params = { transaction_id };
    return this.contract.transfer_nft(params, undefined, undefined);
  }
}
