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

  const getTransaction = async () => {
    const transactionId = query.get("transactionId");

    if (!transactionId) return;
    const result = await nearService.getTransactionById(transactionId);
    setTransaction(result);
  };

  const handleClickSendToken = () => {
    nearService.sendToken(transaction);
  };

  const getTransactionRow = () => {
    if (!transaction) return "";

    const { transaction_id, nft_id, price, transaction_status } = transaction;
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
        <td>Near</td>
        <td>
          {transaction_status === "TokensLocked" ? (
            <button onClick={handleClickSendToken}>send token</button>
          ) : (
            transaction_status
          )}
        </td>
      </tr>
    );
  };

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <div>
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
    </div>
  );
}
