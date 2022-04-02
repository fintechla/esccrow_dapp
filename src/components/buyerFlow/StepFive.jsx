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
import { _CONFIG_ } from "../../config";

export function StepFive({ data }) {
  const { transactionId } = data;
  const url = _CONFIG_.url + `?transactionId=${transactionId}`;
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
          <SocialButton
            onClick={() => {
              console.log("eso mar");
              window.open("https://api.whatsapp.com/send?text=" + url);
            }}
          >
            <WhatsappIcon />
            <label>Whatsapp</label>
          </SocialButton>
        </SocialBlock>
        <UrlBlock>{url}</UrlBlock>
        <Button
          size="lg"
          color="accent"
          onClick={() => {
            const shareData = {
              title: "MDN",
              text: "Learn web development on MDN!",
              url,
            };
            navigator.share(shareData);
          }}
        >
          Share
        </Button>
        <PoweredBlock className="powered-block">
          <span>Powered by</span> <FinchechLabLogo />
        </PoweredBlock>
      </Column>
    </Column>
  );
}
