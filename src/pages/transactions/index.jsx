import { useState, useEffect } from "react";
import { Layout } from "../layout";
import {
  Title,
  StatusFilter,
  StatusFilterItm,
  FilterBlock,
  SearchBlock,
  SearchIpt,
  FilterBtn,
  TransactionsCount,
  Table,
  RefreshButton,
  Link,
} from "./styles";
import { NearService } from "../../services/NearService";

export function Transactions({}) {
  const [transactions, setTransactions] = useState([]);
  const nearService = new NearService();

  const init = () => {
    getTransactions();
  };

  const getTransactions = async () => {
    const result = await nearService.getTransactionsByAccount(0, 5);
    setTransactions(result);
  };

  const getRows = () => {
    return transactions.map((trx) => {
      const {
        transaction_id,
        nft_id,
        transaction_date,
        buyer_id,
        price,
        transaction_status,
      } = trx;

      const role =
        buyer_id === nearService.wallet.getAccountId() ? "Buyer" : "Seller";

      const amount = nearService.parseYoctoToNears(price);

      const status =
        transaction_status === "TokensLocked" ? (
          <RefreshButton>Awaiting agreement</RefreshButton>
        ) : (
          transaction_status
        );
      return (
        <tr key={transaction_id}>
          <td>
            <Link to={`/transactions/${transaction_id}`}>{transaction_id}</Link>
          </td>
          <td>{nft_id}</td>
          <td>{transaction_date}</td>
          <td>{role}</td>
          <td>{amount}</td>
          <td>{"NEAR"}</td>
          <td>{status}</td>
        </tr>
      );
    });
  };

  useEffect(init, []);

  return (
    <Layout container={"full"}>
      <Title>My transactions</Title>
      <StatusFilter>
        <StatusFilterItm>All</StatusFilterItm>
        <StatusFilterItm>Action required</StatusFilterItm>
        <StatusFilterItm>Open</StatusFilterItm>
        <StatusFilterItm>Closed</StatusFilterItm>
      </StatusFilter>
      <FilterBlock>
        <SearchBlock>
          <SearchIpt placeholder="Search transaction by ID" />
          <FilterBtn>Filter</FilterBtn>
        </SearchBlock>
        <TransactionsCount>
          You are viewing 3 of 3 transaction
        </TransactionsCount>
      </FilterBlock>
      <Table>
        <thead>
          <tr>
            <th>TRX</th>
            <th>Token ID</th>
            <th>Transaction date</th>
            <th>Role</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{getRows()}</tbody>
      </Table>
    </Layout>
  );
}
