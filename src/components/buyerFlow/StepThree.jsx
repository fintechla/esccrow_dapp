import { Column } from "../column";
import { Button } from "../button";
import { PoweredBlock, CloseButton } from "./styles";
import { ReactComponent as FinchechLabLogo } from "../../assets/images/fintechlab-logo.svg";
import { Stepbar } from "../stepbar";
import { Tbl, Th, Tr, Td } from "./styles";
import { ReactComponent as CloseSvg } from "../../assets/icons/close.svg";
import { ReactComponent as NearSVG } from "../../assets/icons/near.svg";

export function StepThree({ onSubmitStepThree, data, reset }) {
  const {
    tokenId,
    contractAddress,
    amount,
    durationMinutes,
    sellerWallet,
    NFTTitle,
  } = data;

  return (
    <Column pt="28px" pb="28px">
      <CloseButton
        onClick={() => {
          reset();
        }}
      >
        <CloseSvg />
      </CloseButton>
      <Stepbar steps={4} progress={2}></Stepbar>
      <Tbl>
        <tbody>
          <Tr>
            <Th>
              <b>Token ID:</b>
            </Th>
            <Td>{tokenId}</Td>
          </Tr>
          <Tr>
            <Th>NFT Title:</Th>
            <Td>{NFTTitle}</Td>
          </Tr>
          <Tr>
            <Th>Contract address:</Th>
            <Td>{contractAddress}</Td>
          </Tr>
          <Tr>
            <Th>Blockchain:</Th>
            <Td>NEAR protocol</Td>
          </Tr>
          <Tr>
            <Th>Seller wallet:</Th>
            <Td>{sellerWallet}</Td>
          </Tr>
          <Tr>
            <Th>My offer expires:</Th>
            <Td>{durationMinutes} minutes</Td>
          </Tr>
          <Tr>
            <Th>Price:</Th>
            <Td>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {amount} <NearSVG width={16} />
              </div>
            </Td>
          </Tr>
        </tbody>
      </Tbl>
      <Column justifyContent="center" mt="30px" alignItems="center">
        <Button size="lg" color="accent" onClick={onSubmitStepThree}>
          Confirm transaction
        </Button>
        <PoweredBlock className="powered-block">
          <span>Powered by</span> <FinchechLabLogo />
        </PoweredBlock>
      </Column>
    </Column>
  );
}
