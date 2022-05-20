import { NearService } from "../../services/NearService";

function isEmpty(value) {
  if (!value || value.trim() === "") return true;
  return false;
}

export function validateStep2({ tokenId, amount }) {
  if (isEmpty(tokenId)) {
    return false;
  }
  if (Number(amount) < 0) {
    return false;
  }
  return true;
}

export async function validate({ contractAddress, sellerWallet, tokenId }) {
  const nearService = new NearService();
  const errors = {};

  if (isEmpty(contractAddress)) {
    errors.contractAddress = "You must put a contract address";
  }

  if (isEmpty(sellerWallet)) {
    errors.sellerWallet = "You must put a seller wallet";
  }

  if (isEmpty(tokenId)) {
    errors.tokenId = "You must select a token";
  }

  if (!(await nearService.isAnAccount(sellerWallet))) {
    errors.sellerWallet = "Please put a valid seller wallet";
  }

  if (!(await nearService.isAContract(contractAddress))) {
    errors.contractAddress = "Please put a valid contract address";
  }

  if (Object.keys(errors).length === 0) {
    return undefined;
  }

  return errors;
}
