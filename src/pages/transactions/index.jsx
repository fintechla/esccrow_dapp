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
// import { useNavigate } from "react-router-dom";
import { navigate } from "../../components/fleek-router";
import { ReceiveTokensModal } from "../../components/receive-tokens-modal";
import { ReceiveNFTModal } from "../../components/receive-nft-modal";
import { hideModal, showModal } from "../../components/Modal/ModalContainer";

export function Transactions({}) {
  const [transactions, setTransactions] = useState([]);
  const nearService = new NearService();
  // const navigate = useNavigate();

  const init = () => {
    getTransactions();
  };

  const getTransactions = async () => {
    const numberOfTransactions = Number(
      await nearService.getNumberOfTransactionsByAccount()
    );
    const limit = numberOfTransactions + 1;
    const base = limit - 20;

    const result = await nearService.getTransactionsByAccount(
      base >= 0 ? base : 0,
      limit
    );

    setTransactions(result);
  };

  const getActionButton = (trx) => {
    const { transaction_status, buyer_id, seller_id, transaction_id } = trx;
    const user_id = nearService.wallet.account().accountId;
    let action = transaction_status;

    if (
      (transaction_status === "TokensLocked" ||
        transaction_status === "TokensAndNFTLocked" ||
        transaction_status === "Payed") &&
      buyer_id === user_id
    ) {
      action = (
        <RefreshButton
          onClick={() => {
            const content = (
              <ReceiveNFTModal
                refreshTransactions={() => {
                  getTransactions();
                }}
                seeMoreDetails={() => {
                  navigate("transaction", { id: transaction_id });
                  hideModal();
                }}
                transactionId={transaction_id}
              />
            );
            showModal(content);
          }}
        >
          Receive your NFT
        </RefreshButton>
      );
    } else if (
      transaction_status === "TokensAndNFTLocked" &&
      seller_id === user_id
    ) {
      action = (
        <RefreshButton
          onClick={() => {
            const content = <ReceiveTokensModal transaction={trx} />;
            showModal(content);
          }}
        >
          Receive tokens
        </RefreshButton>
      );
    } else if (transaction_status === "TokensLocked" && seller_id === user_id) {
      action = (
        <RefreshButton
          onClick={() => {
            navigate("transaction", { id: transaction_id });
          }}
        >
          Check it
        </RefreshButton>
      );
    }

    return action;
  };

  const getRows = () => {
    const orderTransactions = transactions.sort((a, b) => {
      if (a.transaction_id > b.transaction_id) {
        return -1;
      }
      if (a.transaction_id < b.transaction_id) {
        return 1;
      }
      return 0;
    });

    return orderTransactions.map((trx) => {
      const { transaction_id, nft_id, transaction_date, buyer_id, price } = trx;

      const role =
        buyer_id === nearService.wallet.getAccountId() ? "Buyer" : "Seller";

      const amount = nearService.parseYoctoToNears(price);
      const status = getActionButton(trx);
      return (
        <tr key={transaction_id}>
          <td
            onClick={() => {
              navigate("transaction", { id: transaction_id });
            }}
          >
            {transaction_id}
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
