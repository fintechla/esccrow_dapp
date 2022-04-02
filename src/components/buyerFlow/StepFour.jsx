import { Column } from "../column";
import { Button } from "../button";
import {
  PoweredBlock,
  WalletBlock,
  PriceBlock,
  H5,
  BtnWallet,
  P,
  Data,
  Value,
  StepRow,
} from "./styles";
import { ReactComponent as FinchechLabLogo } from "../../assets/images/fintechlab-logo.svg";
import { Stepbar } from "../stepbar";
import { NearService } from "../../services/NearService";

export function StepFour({ onSubmitStepFour, data }) {
  const { amount } = data;
  const nearService = new NearService();
  return (
    <Column pt="28px" pb="28px">
      <Stepbar steps={4} progress={3}></Stepbar>
      <WalletBlock>
        <StepRow justifyContent={"space-between"}>
          <H5>Your Near Address</H5>
          {nearService.isSigned() ? (
            <Value>{nearService.wallet.getAccountId()}</Value>
          ) : (
            <BtnWallet>Connect wallet</BtnWallet>
          )}
        </StepRow>
        <StepRow>
          <P>Enter your Near Protocol address here</P>
        </StepRow>
      </WalletBlock>
      <PriceBlock>
        <StepRow justifyContent={"space-between"}>
          <Data>Price</Data>
          <Value>{amount}</Value>
        </StepRow>
        <StepRow justifyContent={"space-between"}>
          <Data>Network fee</Data>
          <Value>0.25</Value>
        </StepRow>
        <StepRow justifyContent={"space-between"}>
          <Data>EscStepRow fee</Data>
          <Value>0.00</Value>
        </StepRow>
        <StepRow justifyContent={"space-between"}>
          <H5>Total</H5>
          <H5>{Number(amount) + 0.25}</H5>
        </StepRow>
      </PriceBlock>
      <Column justifyContent="center" mt="30px" alignItems="center">
        <Button size="lg" color="accent" onClick={onSubmitStepFour}>
          Approve payment
        </Button>
        <PoweredBlock className="powered-block">
          <span>Powered by</span> <FinchechLabLogo />
        </PoweredBlock>
      </Column>
    </Column>
  );
}
