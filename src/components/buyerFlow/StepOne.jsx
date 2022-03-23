import { Column } from "../column";
import { Row } from "../row";
import { InputText } from "../input";
import { Select } from "../select";
import { InputNumber } from "../input";
import { Button } from "../button";
import { PoweredBlock } from "./styles";
import { ReactComponent as FinchechLabLogo } from "../../assets/images/fintechlab-logo.svg";

export function StepOne({ onSubmitStepOne, onChangeData, data }) {
  const { tokenId, contractAddress, amount } = data;
  return (
    <Column pt="28px" pb="28px">
      <Row>
        <InputText
          width="calc(100% - 160px)"
          placeholder="Token ID"
          label="I will buy"
          value={tokenId}
          onChange={(e) => onChangeData({ tokenId: e.target.value })}
        />
      </Row>
      <Row>
        <InputText
          width="calc(100% - 160px)"
          placeholder="Contract address"
          label="At"
          mt="12px"
          value={contractAddress}
          onChange={(e) => onChangeData({ contractAddress: e.target.value })}
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
        <InputNumber
          width="calc(100% - 160px)"
          placeholder="0.0"
          label="For"
          mt="12px"
          value={amount}
          onChange={(e) => onChangeData({ amount: e.target.value })}
        />
        <Select
          options={[
            {
              id: "1",
              name: "NEAR",
              type: "Near token",
              icon: "near-white",
            },
          ]}
        />
      </Row>
      <Column justifyContent="center" mt="30px" alignItems="center">
        <Button size="lg" color="accent" onClick={onSubmitStepOne}>
          Begin transaction
        </Button>
        <PoweredBlock className="powered-block">
          <span>Powered by</span> <FinchechLabLogo />
        </PoweredBlock>
      </Column>
    </Column>
  );
}
