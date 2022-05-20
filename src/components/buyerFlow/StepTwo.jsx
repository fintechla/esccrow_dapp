import { Column } from "../column";
import { Row } from "../row";
import { TwoColumns, OneColumn, TokenIdBtn, CloseButton } from "./styles";
import { InputText, InputDate, InputCheckbox, InputNumber } from "../input";
import { Select } from "../select";
import { Button } from "../button";
import { PoweredBlock } from "./styles";
import { ReactComponent as FinchechLabLogo } from "../../assets/images/fintechlab-logo.svg";
import { Link } from "../fleek-router/Link";
import { Stepbar } from "../stepbar";
import { ReactComponent as CloseSvg } from "../../assets/icons/close.svg";
import * as Icons from "../icons";

export function StepTwo({ onSubmitStepTwo, onChangeData, data, reset }) {
  const { tokenId, contractAddress, amount, durationMinutes, sellerWallet } =
    data;

  const conditionsText = (
    <div>
      By signing up you agree to our <Link to="#">Terms & Conditions.</Link>
    </div>
  );

  return (
    <Column pt="28px" pb="28px">
      <CloseButton
        onClick={() => {
          reset();
        }}
      >
        <CloseSvg />
      </CloseButton>
      <Stepbar steps={4} progress={1}></Stepbar>
      <TwoColumns>
        <Column>
          <label>Wallet seller:</label>
          <p>{sellerWallet}</p>
        </Column>
        <Column>
          <label>Token ID:</label>
          <p>{tokenId}</p>
        </Column>
      </TwoColumns>
      <OneColumn>
        <Column>
          <label>Contract address NFT:</label>
          <p>{contractAddress}</p>
        </Column>
      </OneColumn>
      <Row>
        <InputNumber
          width="calc(100% - 160px)"
          placeholder="0.0"
          label="Price"
          mt="12px"
          value={amount}
          onChange={(e) => onChangeData({ amount: e.target.value })}
          min={0}
        />
        <Select
          options={[
            {
              id: "1",
              name: "NEAR",
              type: "Near token",
              icon: <Icons.Near2 />,
            },
          ]}
        />
      </Row>
      {/* <Row>
        <InputText
          width="calc(100% - 160px)"
          placeholder="Select token ID"
          label="Token ID"
          mt="20px"
          value={tokenId}
          disabled={true}
          onChange={(e) => onChangeData({ tokenId: e.target.value })}
        />
        <TokenIdBtn onClick={onClickSelectTokenBtn}>Select NFT</TokenIdBtn>
      </Row> */}
      <Row>
        <div id="select">
          <label id="lbl">My offer expires</label>
          <select
            onChange={(e) => onChangeData({ durationMinutes: e.target.value })}
          >
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">60 minutes</option>
            <option value="90">90 minutes</option>
          </select>
        </div>

        {/* <InputDate
          mt="20px"
          width="calc(100% - 160px)"
          placeholder=""
          label="My offer expires"
          value={maxDatePayment}
          onChange={(e) => onChangeData({ maxDatePayment: e.target.value })}
        /> */}
      </Row>
      <Row>
        <InputCheckbox mt="12px" label={conditionsText} />
      </Row>
      <Column justifyContent="center" mt="30px" alignItems="center">
        <Button size="lg" color="accent" onClick={onSubmitStepTwo}>
          Make secure payment
        </Button>
        <PoweredBlock className="powered-block">
          <span>Powered by</span> <FinchechLabLogo />
        </PoweredBlock>
      </Column>
    </Column>
  );
}
