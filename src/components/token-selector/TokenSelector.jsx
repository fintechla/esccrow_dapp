import { useState, useEffect } from "react";
import { NearService } from "../../services/NearService";
import { ModalContent, ModalBody } from "../Modal/styles";
import { hideModal } from "../Modal/ModalContainer";
import { Column } from "../column/styles";
import { Button } from "../button";

import {
  Title,
  SubTitle,
  TokenList,
  Token,
  TokenImg,
  TokenTitle,
  TokenCaption,
  NearSlug,
  NearIcon,
  CloseBtn,
  CloseImg,
} from "./styles";

function TokenItem({ data, onClickToken, selected }) {
  return (
    <Token
      onClick={() => {
        onClickToken(data.token_id);
      }}
      selected={selected}
    >
      <TokenImg
        src={"https://ipfs.fleek.co/ipfs/" + data.metadata.media}
        alt=""
      />
      <TokenCaption>
        <TokenTitle>{data.token_id}</TokenTitle>
        <NearSlug>
          <NearIcon />
          Near
        </NearSlug>
      </TokenCaption>
    </Token>
  );
}

export function TokenSelector({
  contractAddress,
  sellerWallet,
  onSubmitTokenSelector,
}) {
  const [nfts, setNfts] = useState([]);
  const [tokenSelectedId, setTokenSelectedId] = useState();
  const nearService = new NearService();

  const getNfts = async () => {
    const nfts = await nearService.getNFTByContract(
      contractAddress,
      sellerWallet
    );

    setNfts(nfts);
  };

  const getTokenList = () => {
    return nfts.map((token) => {
      return (
        <TokenItem
          selected={tokenSelectedId === token.token_id ? true : false}
          key={token.token_id}
          onClickToken={(token_id) => {
            setTokenSelectedId(token_id);
          }}
          data={token}
        />
      );
    });
  };

  useEffect(() => {
    getNfts();
  }, []);

  return (
    <ModalContent>
      <CloseBtn onClick={() => hideModal()}>
        <CloseImg></CloseImg>
      </CloseBtn>
      <ModalBody>
        <Title>Select the NFT you want to buy:</Title>
        <SubTitle>{sellerWallet}</SubTitle>
        <TokenList>{getTokenList()}</TokenList>
        <Column justifyContent="center" mt="30px" alignItems="center">
          <Button
            size="lg"
            color="accent"
            onClick={() => {
              onSubmitTokenSelector(tokenSelectedId);
            }}
          >
            Confirm Selection
          </Button>
        </Column>
      </ModalBody>
    </ModalContent>
  );
}
