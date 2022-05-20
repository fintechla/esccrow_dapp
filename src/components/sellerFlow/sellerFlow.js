import { useMemo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NearService } from "../../services/NearService";
import { formatNearAmount } from "near-api-js/lib/utils/format";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export function SellerFlow() {
  const [transaction, setTransaction] = useState(undefined);
  const nearService = new NearService();
  const query = useQuery();

  const onStart = async () => {
    if (!query.has("transactionId")) return;
    getTransaction();
  };

  const checkIfTokenBelongsToEsccrow = async () => {
    if (
      !query.has("transactionId") ||
      !query.has("transactionHashes") ||
      !transaction ||
      transaction.transaction_status === "change_to_nft_locked" ||
      transaction.transaction_status !== "TokensLocked" ||
      !(await nearService.belonsToEsccrow(
        transaction.nft_contract_id,
        transaction.nft_id
      ))
    )
      return;

    setTransaction({
      ...transaction,
      transaction_status: "change_to_nft_locked",
    });
  };

  const getTransaction = async () => {
    const transactionId = query.get("transactionId");

    if (!transactionId) return;
    const result = await nearService.getTransactionById(transactionId);
    console.log(result);
    setTransaction(result);
  };

  const handleClickSendToken = () => {
    nearService.sendToken(transaction);
  };

  const handleClickLockToken = () => {
    nearService.lockToken(transaction);
  };

  const handleClickCollect = () => {
    nearService.collectTransaction(transaction);
  };

  const getStatusElm = () => {
    if (transaction.transaction_status === "TokensLocked") {
      return <button onClick={handleClickSendToken}>send token</button>;
    } else if (transaction.transaction_status === "change_to_nft_locked") {
      return <button onClick={handleClickLockToken}>Check NFT</button>;
    } else if (transaction.transaction_status === "TokensAndNFTLocked") {
      return <button onClick={handleClickCollect}>Collect</button>;
    } else return transaction.transaction_status;
  };

  const getTransactionRow = () => {
    if (!transaction) return "";

    const { transaction_id, nft_id, price } = transaction;
    const parsePrice = formatNearAmount(
      price.toLocaleString("es-PE").replace(/,/g, ""),
      4
    );

    return (
      <tr>
        <td>{transaction_id}</td>
        <td>{nft_id}</td>
        <td>Seller</td>
        <td>{parsePrice}</td>
        <td>NEAR</td>
        <td>{getStatusElm()}</td>
      </tr>
    );
  };

  useEffect(() => {
    onStart();
  }, []);

  useEffect(() => {
    checkIfTokenBelongsToEsccrow();
  }, [transaction]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>TRX</th>
            <th>Token ID</th>
            <th>Role</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{getTransactionRow()}</tbody>
      </table>
    </>
  );
}
