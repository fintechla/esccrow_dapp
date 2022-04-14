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
} from "./styles";
import { NearService } from "../../services/NearService";
import { useParams } from "react-router-dom";
import { TableRow } from "../../components/table";

export function Transaction(props) {
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
    console.log("NFT", result);
    setNFT(result);
  };

  const getNFTImage = () => {
    if (!NFT) return;
    const imgURL = `https://ipfs.fleek.co/ipfs/${NFT.metadata.media}`;
    return <img src={imgURL} alt={NFT.metadata.title} width="501px" />;
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
                "Esccrow.finance",
                "Wallet seller",
                { content: getNFTImage() },
              ]}
            />
            <TableRow data={["dasdas.near"]} />
            <TableRow data={["Digital asset info", "Token ID"]} />
            <TableRow data={["Contract address"]} />
            <TableRow data={["x-scroww.near"]} />
            <TableRow data={["Image Link"]} />
            <TableRow data={["https://asdasdas"]} />
          </Table2>
        </CardBody>
      </Card>
    </Layout>
  );
}
