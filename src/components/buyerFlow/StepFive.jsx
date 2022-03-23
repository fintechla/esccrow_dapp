import { Column } from "../column";
import { Button } from "../button";
import QRCode from "react-qr-code";
import { ReactComponent as WhatsappIcon } from "../../assets/social/whatsapp.svg";
import {
  PoweredBlock,
  H4,
  StepFiveP,
  QrBlock,
  UrlBlock,
  SocialBlock,
  SocialButton,
} from "./styles";
import { ReactComponent as FinchechLabLogo } from "../../assets/images/fintechlab-logo.svg";
import { Stepbar } from "../stepbar";

export function StepFive({ onSubmitStepFour, data }) {
  const { tokenId, contractAddress, amount, maxDatePayment, sellerWallet } =
    data;
  const url = "https://esccrow.finance/login...";
  return (
    <Column pt="28px" pb="28px">
      <Stepbar steps={4} progress={4}></Stepbar>
      <Column justifyContent="center" mt="30px" alignItems="center">
        <H4>Transaction created!</H4>
        <StepFiveP>
          Your transaction has been created, waiting for the other partie agree.
          Share the transaction via the URL or QR code.
        </StepFiveP>
        <QrBlock>
          <QRCode size={123} value={url} />
        </QrBlock>
        <SocialBlock>
          <SocialButton>
            <WhatsappIcon />
            <label>Whatsapp</label>
          </SocialButton>
        </SocialBlock>
        <UrlBlock>{url}</UrlBlock>
        <Button size="lg" color="accent" onClick={onSubmitStepFour}>
          Share
        </Button>
        <PoweredBlock className="powered-block">
          <span>Powered by</span> <FinchechLabLogo />
        </PoweredBlock>
      </Column>
    </Column>
  );
}
