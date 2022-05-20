import { Column } from "../column";
import { Row } from "../row";
import { InputText } from "../input";
import { Select } from "../select";
import { Button } from "../button";
import { PoweredBlock, TokenIdBtn } from "./styles";
import { ReactComponent as FinchechLabLogo } from "../../assets/images/fintechlab-logo.svg";
import * as Icons from "../icons";

export function StepOne({
  onSubmitStepOne,
  onChangeData,
  data,
  errors,
  onClickSelectTokenBtn,
}) {
  const { tokenId, sellerWallet } = data;
  const blockchain = "near";

  const getTokenIdInput = () => {
    if (blockchain !== "near") {
      return (
        <Row>
          <InputText
            width="calc(100% - 160px)"
            placeholder="Token ID"
            label="I will buy"
            value={tokenId}
            onChange={(e) => onChangeData({ tokenId: e.target.value })}
          />
        </Row>
      );
    }
    return "";
  };

  return (
    <Column pt="12px" pb="15px">
      {getTokenIdInput()}
      {/* <Row>
        <InputText
          width="calc(100% - 160px)"
          placeholder="Contract address"
          label="I will buy"
          mt="12px"
          value={contractAddress}
          onChange={(e) => onChangeData({ contractAddress: e.target.value })}
          error={errors.contractAddress}
        />
      </Row> */}
      <Row>
        <InputText
          width="calc(100% - 160px)"
          placeholder="example.near"
          label="Wallet address seller"
          mt="20px"
          value={sellerWallet}
          onChange={(e) => onChangeData({ sellerWallet: e.target.value })}
          error={errors.sellerWallet}
        />
        <Select
          options={[
            {
              id: "1",
              name: "Near",
              type: "Mainnet",
              icon: <Icons.Near2 className="icon" />,
            },
            {
              id: "2",
              name: "Terra",
              type: "Mainnet",
              icon: <Icons.Terra className="icon" />,
            },
          ]}
        />
      </Row>
      <Row>
        <InputText
          width="calc(100% - 160px)"
          placeholder="Token ID"
          label="Select NFT"
          mt="20px"
          value={tokenId}
          disabled={true}
          onChange={(e) => onChangeData({ tokenId: e.target.value })}
        />
        <TokenIdBtn onClick={onClickSelectTokenBtn}>Search NFT</TokenIdBtn>
      </Row>
      {/* <Row>
        <InputNumber
          width="calc(100% - 160px)"
          placeholder="0.0"
          label="For"
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
              icon: "near-white",
            },
          ]}
        />
      </Row> */}
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
