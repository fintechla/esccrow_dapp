import { Column } from "../column";
import { Button } from "../button";
import { PoweredBlock, CloseButton } from "./styles";
import { ReactComponent as FinchechLabLogo } from "../../assets/images/fintechlab-logo.svg";
import { Stepbar } from "../stepbar";
import { Tbl, Th, Tr, Td } from "./styles";
import { ReactComponent as CloseSvg } from "../../assets/icons/close.svg";

export function StepThree({ onSubmitStepThree, data, reset }) {
  const { tokenId, contractAddress, amount, maxDatePayment, sellerWallet } =
    data;

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
            <Th>Contract address:</Th>
            <Td>{contractAddress}</Td>
          </Tr>
          <Tr>
            <Th>Blockchain:</Th>
            <Td>Near protocol</Td>
          </Tr>
          <Tr>
            <Th>Seller wallet:</Th>
            <Td>{sellerWallet}</Td>
          </Tr>
          <Tr>
            <Th>Payment period until:</Th>
            <Td>{maxDatePayment}</Td>
          </Tr>
          <Tr>
            <Th>Price:</Th>
            <Td>{amount}</Td>
          </Tr>
        </tbody>
      </Tbl>
      <Column justifyContent="center" mt="30px" alignItems="center">
        <Button size="lg" color="accent" onClick={onSubmitStepThree}>
          Confirm Transaction
        </Button>
        <PoweredBlock className="powered-block">
          <span>Powered by</span> <FinchechLabLogo />
        </PoweredBlock>
      </Column>
    </Column>
  );
}
