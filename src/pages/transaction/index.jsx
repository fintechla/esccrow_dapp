import { useState, useEffect } from "react";
import { Layout } from "../layout";
import { Title, Header, TimeBlock, Data } from "./styles";
import { NearService } from "../../services/NearService";
import { useParams } from "react-router-dom";
import { TableRow } from "../../components/table";
import { Table1 } from "./styles";

export function Transaction(props) {
  const [transaction, setTransaction] = useState({});
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

  useEffect(init, []);

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
    </Layout>
  );
}
