import { useState, useEffect } from "react";
import { hideModal } from "../Modal/ModalContainer";
import { ModalContent } from "../Modal/styles";
import {
  CloseBtn,
  CloseImg,
  Title,
  SubTitle,
  ModalBody,
  CongratsImg,
} from "./styles";
import { Button } from "../../components/button";
import { NearService } from "../../services/NearService";

export function ReceiveNFTModal({
  transactionId,
  seeMoreDetails,
  refreshTransactions,
}) {
  const [transaction, setTransaction] = useState({});
  const nearService = new NearService();

  const handleClickWithdraw = async () => {
    await nearService.collectNFT(transaction);
    refreshTransactions();
    hideModal();
  };

  const getAction = () => {
    const { transaction_status } = transaction;
    if (
      transaction_status === "Payed" ||
      transaction.transaction_status === "TokensAndNFTLocked"
    ) {
      return (
        <Button size="lg" color="accent" onClick={handleClickWithdraw}>
          Withdraw
        </Button>
      );
    } else {
      return (
        <Button
          size="lg"
          color="accent"
          onClick={() => {
            seeMoreDetails();
          }}
        >
          See more details
        </Button>
      );
    }
  };

  useEffect(async () => {
    const result = await nearService.getTransactionById(transactionId);
    setTransaction(result);
  }, []);

  return (
    <ModalContent>
      <CloseBtn onClick={() => hideModal()}>
        <CloseImg></CloseImg>
      </CloseBtn>
      <ModalBody>
        <Title>
          {transaction.transaction_status === "Payed" ||
          transaction.transaction_status === "TokensAndNFTLocked"
            ? "Congratulations!"
            : "Your transaction"}
        </Title>
        <SubTitle>
          {transaction.transaction_status === "Payed" ||
          transaction.transaction_status === "TokensAndNFTLocked"
            ? "your NFT is available"
            : "is waiting for approvement"}
        </SubTitle>
        <CongratsImg />
        {getAction()}
      </ModalBody>
    </ModalContent>
  );
}
