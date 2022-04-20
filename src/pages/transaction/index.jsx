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
} from "./styles";
import { Button } from "../../components/button";
import { NearService } from "../../services/NearService";
import { useParams, useNavigate } from "react-router-dom";
import { TableRow } from "../../components/table";
import { showModal } from "../../components/Modal/ModalContainer";
import { ReceiveTokensModal } from "../../components/receive-tokens-modal";

export function Transaction(props) {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({});
  const [NFT, setNFT] = useState();
  const { transactionId } = useParams();
  const nearService = new NearService();

  const init = () => {
    getTransaction();
  };

  const getTransaction = async () => {
    const result = await nearService.getTransactionById(transactionId);
    console.log(result);
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
    navigate("../");
  };

  const cancelTransaction = async () => {
    await nearService.cancelTransaction(transaction);
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
      buttonText = "Send Token";
      action = () => {
        nearService.sendToken(transaction);
      };
    } else if (
      transaction_status === "TokensAndNFTLocked" &&
      nearService.wallet.getAccountId() === seller_id
    ) {
      buttonText = "Receive Tokens";
      action = () => {
        showCollectTokensModal();
      };
    }

    return (
      <Button size="lg" color="accent" onClick={action}>
        {buttonText}
      </Button>
    );
  };

  useEffect(init, []);
  useEffect(getNFT, [transaction]);

  return (
    <Layout container={"full"}>
      <Header>
        <Title>Transaction detail</Title>
        <TimeBlock>
          <Data field="Create time" value="15:56" />
          <Data field="Transaction number" value={transactionId} />
        </TimeBlock>
      </Header>
      <Table1 headers={["Token ID", "Digital asset", "Price"]}>
        <TableRow
          data={[
            transaction.nft_id,
            transaction.seller_id,
            transaction.price
              ? nearService.parseYoctoToNears(transaction.price)
              : "",
          ]}
        />
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
                { content: <b>Wallet seller</b> },
                { content: getNFTImage(), rowspan: "8", textAlign: "center" },
              ]}
            />
            <TableRow
              data={[{ content: <span>{transaction.seller_id}</span> }]}
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
            <TableRow data={[{ content: <span>{transaction.nft_id}</span> }]} />
            <TableRow data={[{ content: <b>Contract address</b> }]} />
            <TableRow
              data={[{ content: <span>{transaction.nft_contract_id}</span> }]}
            />
            <TableRow data={[{ content: <b>Image Link</b> }]} />
            <TableRow
              data={[
                {
                  content: (
                    <span>
                      https://ipfs.fleek.co/ipfs/{NFT?.metadata.media}
                    </span>
                  ),
                },
              ]}
            />
          </Table2>
          <MaxTime>Maximum day to recieve payment: 2022/02/28 23:59:59</MaxTime>
          <Confirm>As soon as you receive the NFT, confirm the payment</Confirm>
          <ButtonBlock>
            {getActionButton()}
            <Button size="lg" color="secondary" onClick={cancelTransaction}>
              Cancel
            </Button>
          </ButtonBlock>
        </CardBody>
      </Card>
    </Layout>
  );
}
