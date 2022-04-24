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
import { NearService } from "../../services/NearService";
// import { useNavigate } from "react-router-dom";
import { navigate } from "../fleek-router";

export function StepFive() {
  const url = _CONFIG_.url + `?page=transactions`;
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
            navigate("transactions");
          }}
        >
          Go to dashboard
        </Button>
        <PoweredBlock className="powered-block">
          <span>Powered by</span> <FinchechLabLogo />
        </PoweredBlock>
      </Column>
    </Column>
  );
}
