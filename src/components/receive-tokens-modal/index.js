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
import { navigate } from "../fleek-router";

export function ReceiveTokensModal({ transaction }) {
  const nearService = new NearService();

  const handleClickWithdraw = async () => {
    await nearService.collectTransaction(transaction);
    hideModal();
    navigate("transactions");
  };

  return (
    <ModalContent>
      <CloseBtn onClick={() => hideModal()}>
        <CloseImg></CloseImg>
      </CloseBtn>
      <ModalBody>
        <Title>Congratulations!</Title>
        <SubTitle>your NEARs are available</SubTitle>
        <CongratsImg />
        <Button size="lg" color="accent" onClick={handleClickWithdraw}>
          Withdraw
        </Button>
      </ModalBody>
    </ModalContent>
  );
}
