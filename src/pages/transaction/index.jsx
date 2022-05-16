import { useState, useEffect } from "react";
import { Layout } from "../layout";
import {
  Title,
  Header,
  TimeBlock,
  Data,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table1,
  Table2,
  MaxTime,
  Confirm,
  ButtonBlock,
  CopyButton,
} from "./styles";
import { Button } from "../../components/button";
import { NearService } from "../../services/NearService";
import { navigate } from "../../components/fleek-router";
// import { useParams, useNavigate } from "react-router-dom";
import { TableRow } from "../../components/table";
import { showModal } from "../../components/Modal/ModalContainer";
import { ReceiveTokensModal } from "../../components/receive-tokens-modal";
import { Query } from "../../components/fleek-router/utils/Query";
import { ReactComponent as NearSVG } from "../../assets/icons/near.svg";
import { EsccrowService } from "../../services/EsccrowService";

export function Transaction(props) {
  const [transaction, setTransaction] = useState({});
  const [NFT, setNFT] = useState();

  const query = new Query();
  const transactionId = query.params.id;
  const nearService = new NearService();
  const esccrowService = new EsccrowService();

  const init = () => {
    getTransaction();
  };

  const getTransaction = async () => {
    const result = await esccrowService.getTransactionById(transactionId);
    setTransaction(result);
  };

  const getNFT = async () => {
    const { nft_id, nft_contract_id } = transaction;
    const result = await nearService.getNFTById(nft_contract_id, nft_id);
    setNFT(result);
  };

  const getNFTImage = () => {
    if (!NFT) return;
    const imgURL = `https://ipfs.fleek.co/ipfs/${NFT.metadata.media}`;
    return <img src={imgURL} alt={NFT.metadata.title} width="402px" />;
  };

  const goBack = () => {
    navigate("transactions");
  };

  const cancelTransaction = async () => {
    await esccrowService.cancelTransaction(transaction);
    goBack();
  };

  const showCollectTokensModal = () => {
    const content = <ReceiveTokensModal transaction={transaction} />;
    showModal(content);
  };

  const getActionButton = () => {
    const { transaction_status, seller_id } = transaction;
    let buttonText = "Go back";
    let action = goBack;

    if (
      transaction_status === "TokensLocked" &&
      nearService.wallet.getAccountId() === seller_id
    ) {
      buttonText = "Send your NFT";
      action = () => {
        nearService.sendToken(transaction);
      };
    } else if (
      transaction_status === "NftTransfered" &&
      nearService.wallet.getAccountId() === seller_id
    ) {
      buttonText = "Receive Tokens";
      action = () => {
        showCollectTokensModal();
      };
    } else if (
      transaction_status === "Cancelled" &&
      nearService.wallet.getAccountId() !== seller_id
    ) {
      buttonText = "Withdraw";
      action = async () => {
        await esccrowService.collectTransaction(transaction);
        goBack();
      };
    }
    return (
      <Button size="lg" color="accent" onClick={action}>
        {buttonText}
      </Button>
    );
  };

  const getFirstTableHeaders = () => {
    let headers = ["Token ID", "Digital asset", "Price"];
    if (transaction.seller_id === nearService.wallet.getAccountId()) {
      headers = [...headers, "Fee", "You receive"];
    }
    return headers;
  };

  const getFirstTableData = () => {
    const price = transaction.price
      ? nearService.parseYoctoToNears(transaction.price)
      : "";
    let data = [
      transaction.nft_id,
      transaction.seller_id,
      {
        content: (
          <div>
            {price}
            <NearSVG />
          </div>
        ),
      },
    ];
    if (transaction.seller_id === nearService.wallet.getAccountId()) {
      const fee = price ? price * 0.01 : "";
      const neto = price ? price - fee : "";
      data = [
        ...data,
        {
          content: (
            <div>
              {fee}
              <NearSVG />
            </div>
          ),
        },
        {
          content: (
            <div>
              {neto} <NearSVG />
            </div>
          ),
        },
      ];
    }
    return data;
  };

  useEffect(init, []);
  useEffect(getNFT, [transaction]);

  return (
    <Layout container={"full"}>
      <Header>
        <Title>Transaction detail</Title>
        <TimeBlock>
          {/* <Data field="Create time" value="15:56" /> */}
          <Data field="Transaction number" value={transactionId} />
        </TimeBlock>
      </Header>
      <Table1 headers={getFirstTableHeaders()}>
        <TableRow data={getFirstTableData()} />
      </Table1>
      <Card>
        <CardHeader>
          <CardTitle>Confirmation of Payment</CardTitle>
        </CardHeader>
        <CardBody>
          <Table2>
            <TableRow
              data={[
                {
                  content: "Esccrow.finance",
                  rowspan: "2",
                  verticalAlign: "initial",
                },
                {
                  content: (
                    <b>
                      {transaction.seller_id ===
                      nearService.wallet.getAccountId()
                        ? "Buyer wallet"
                        : "Wallet seller"}
                    </b>
                  ),
                },
                { content: getNFTImage(), rowspan: "8", textAlign: "center" },
              ]}
            />
            <TableRow
              data={[
                {
                  content: (
                    <div>
                      <span>
                        {transaction.seller_id ===
                        nearService.wallet.getAccountId()
                          ? transaction.buyer_id
                          : transaction.seller_id}
                      </span>
                      <CopyButton
                        text={
                          transaction.seller_id ===
                          nearService.wallet.getAccountId()
                            ? transaction.buyer_id
                            : transaction.seller_id
                        }
                      />
                    </div>
                  ),
                },
              ]}
            />
            <TableRow
              data={[
                {
                  content: "Digital asset info",
                  rowspan: "6",
                  verticalAlign: "initial",
                },
                { content: <b>Token ID</b> },
              ]}
            />
            <TableRow
              data={[
                {
                  content: (
                    <div>
                      <span>{transaction.nft_id}</span>
                      <CopyButton text={transaction.nft_id} />
                    </div>
                  ),
                },
              ]}
            />
            <TableRow data={[{ content: <b>Contract address</b> }]} />
            <TableRow
              data={[
                {
                  content: (
                    <div>
                      <span>{transaction.nft_contract_id}</span>
                      <CopyButton text={transaction.nft_contract_id} />
                    </div>
                  ),
                },
              ]}
            />
            <TableRow data={[{ content: <b>Image Link</b> }]} />
            <TableRow
              data={[
                {
                  content: (
                    <div>
                      <span>
                        https://ipfs.fleek.co/ipfs/{NFT?.metadata.media}
                      </span>
                      <CopyButton
                        text={`https://ipfs.fleek.co/ipfs/${NFT?.metadata.media}`}
                      />
                    </div>
                  ),
                },
              ]}
            />
          </Table2>
          {/* <MaxTime>Maximum day to recieve payment: 2022/02/28 23:59:59</MaxTime> */}
          {/* <Confirm>As soon as you receive the NFT, confirm the payment</Confirm> */}
          <ButtonBlock>
            {getActionButton()}
            {transaction.transaction_status === "Cancelled" ||
            (transaction.transaction_status === "TokensAndNFTLocked" &&
              transaction.seller_id === nearService.wallet.getAccountId()) ? (
              <Button size="lg" color="secondary" onClick={goBack}>
                Go back
              </Button>
            ) : transaction.transaction_status === "Completed" ||
              transaction.transaction_status === "Payed" ||
              transaction.transaction_status === "CancelledandPayed" ||
              transaction.transaction_status === "NftTransfered" ||
              (transaction.transaction_status === "TokensAndNFTLocked" &&
                transaction.seller_id !== nearService.wallet.getAccountId()) ? (
              ""
            ) : (
              <Button size="lg" color="secondary" onClick={cancelTransaction}>
                Cancel
              </Button>
            )}
          </ButtonBlock>
        </CardBody>
      </Card>
    </Layout>
  );
}
