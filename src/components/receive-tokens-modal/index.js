import { hideModal } from "../Modal/ModalContainer";
import { ModalContent } from "../Modal/styles";
import {
  CloseBtn,
  CloseImg,
  Title,
  SubTitle,
  ModalBody,
  CongratsImg,
  AwaitImg,
} from "./styles";
import { Button } from "../../components/button";
import { NearService } from "../../services/NearService";
import { navigate } from "../fleek-router";
import { EsccrowService } from "../../services/EsccrowService";
import { useState } from "react";

export function ReceiveTokensModal({ transaction }) {
  const nearService = new NearService();
  const esccrowService = new EsccrowService();
  const [title, setTitle] = useState("Congratulations!");
  const [subTitle, setSubtitle] = useState("your NEARs are available");
  const [image, setImage] = useState(<CongratsImg />);
  const [showButton, setShowButton] = useState(true);

  const handleClickWithdraw = async () => {
    await esccrowService.collectTransaction(transaction);
    hideModal();
    navigate("transactions");
  };

  const checkStatus = async () => {
    const result = await esccrowService.getTransactionById(
      transaction.transaction_id
    );
    if (result.transaction_status === "TokensAndNFTLocked") {
      setTitle("Your transaction");
      setSubtitle("is waiting for client withdraw");
      setImage(<AwaitImg />);
      setShowButton(false);
    }
  };

  checkStatus();

  return (
    <ModalContent>
      <CloseBtn onClick={() => hideModal()}>
        <CloseImg></CloseImg>
      </CloseBtn>
      <ModalBody>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        {image}
        {showButton ? (
          <Button size="lg" color="accent" onClick={handleClickWithdraw}>
            Withdraw
          </Button>
        ) : (
          ""
        )}
      </ModalBody>
    </ModalContent>
  );
}
