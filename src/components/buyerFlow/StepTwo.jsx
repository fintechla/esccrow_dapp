import { Column } from "../column";
import { Row } from "../row";
import { TwoColumns, OneColumn } from "./styles";
import { InputText, InputCheckbox } from "../input";
import { Select } from "../select";
import { Button } from "../button";
import { PoweredBlock } from "./styles";
import { ReactComponent as FinchechLabLogo } from "../../assets/images/fintechlab-logo.svg";
import { Link } from "react-router-dom";
import { Stepbar } from "../stepbar";

export function StepTwo({ onSubmitStepTwo, onChangeData, data }) {
  const { tokenId, contractAddress, amount, maxDatePayment, sellerWallet } =
    data;

  const conditionsText = (
    <div>
      By signing up you agree to our <Link to="#">Terms & Conditions.</Link>
    </div>
  );

  return (
    <Column pt="28px" pb="28px">
      <Stepbar steps={4} progress={1}></Stepbar>
      <TwoColumns>
        <Column>
          <label>Token ID</label>
          <p>{tokenId}</p>
        </Column>
        <Column>
          <label>Price</label>
          <p>{amount}</p>
        </Column>
      </TwoColumns>
      <OneColumn>
        <Column>
          <label>Contract address</label>
          <p>{contractAddress}</p>
        </Column>
      </OneColumn>
      <Row>
        <InputText
          width="calc(100% - 160px)"
          placeholder=""
          label="Wallet seller"
          mt="20px"
          value={sellerWallet}
          onChange={(e) => onChangeData({ sellerWallet: e.target.value })}
        />
        <Select
          options={[
            {
              id: "1",
              name: "Near",
              type: "Mainnet",
              icon: "near-white",
            },
          ]}
        />
      </Row>
      <Row>
        <InputText
          mt="20px"
          width="calc(100% - 160px)"
          placeholder=""
          label="Payment period until"
          value={maxDatePayment}
          onChange={(e) => onChangeData({ maxDatePayment: e.target.value })}
        />
      </Row>
      <Row>
        <InputCheckbox mt="12px" label={conditionsText} />
      </Row>
      <Column justifyContent="center" mt="30px" alignItems="center">
        <Button size="lg" color="accent" onClick={onSubmitStepTwo}>
          Begin new transfer
        </Button>
        <PoweredBlock className="powered-block">
          <span>Powered by</span> <FinchechLabLogo />
        </PoweredBlock>
      </Column>
    </Column>
  );
}
