import { NearService } from "../../services/NearService";

function isEmpty(value) {
  if (!value || value.trim() === "") return true;
  return false;
}

export function validateStep2({ tokenId }) {
  if (isEmpty(tokenId)) {
    return false;
  }
  return true;
}

export async function validate({ contractAddress, sellerWallet }) {
  const nearService = new NearService();

  if (
    isEmpty(contractAddress) ||
    isEmpty(sellerWallet) ||
    !(await nearService.isAnAccount(sellerWallet)) ||
    !(await nearService.isAContract(contractAddress))
  ) {
    return false;
  }

  return true;
}
