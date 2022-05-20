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
  InputSearch,
  SearchBlock,
} from "./styles";

function TokenItem({ data, onClickToken, selected }) {
  return (
    <Token
      onClick={() => {
        onClickToken(data);
      }}
      selected={selected}
    >
      <TokenCaption>
        {data.token_id}
        <NearSlug>
          <NearIcon />
          NEAR
        </NearSlug>
      </TokenCaption>
      <TokenImg
        src={"https://ipfs.fleek.co/ipfs/" + data.metadata.media}
        alt=""
      />
      <TokenTitle>{data.metadata.title}</TokenTitle>
    </Token>
  );
}

export function TokenSelector({ sellerWallet, onSubmitTokenSelector }) {
  const [nfts, setNfts] = useState([]);
  const [tokenSelected, setTokenSelected] = useState();
  const [textToSearch, setTextToSearch] = useState("");
  const nearService = new NearService();

  const getNfts = async () => {
    let nfts = [];

    const nftContracts = await nearService.getNFTContractsByAccount(
      sellerWallet
    );

    const results = await Promise.all(
      nftContracts.map(async (nftContract) => {
        const result = await nearService.getNFTByContract(
          nftContract,
          sellerWallet
        );
        return result.map((nft) => ({ ...nft, contract_id: nftContract }));
      })
    );

    results.forEach((result) => {
      nfts = [...nfts, ...result];
    });

    setNfts(nfts);
  };

  const getTokenList = () => {
    console.log(nfts);
    const filterNfts = nfts.filter((nft) =>
      textToSearch === ""
        ? true
        : nft.metadata.title?.toUpperCase().includes(textToSearch.toUpperCase())
    );
    return filterNfts.map((token) => {
      return (
        <TokenItem
          selected={tokenSelected?.token_id === token.token_id ? true : false}
          key={token.token_id}
          onClickToken={(token) => {
            setTokenSelected(token);
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
        <SearchBlock type="text">
          <InputSearch
            onChange={(e) => {
              setTextToSearch(e.target.value);
            }}
            placeholder="Search NFT"
          />
        </SearchBlock>
        <TokenList>{getTokenList()}</TokenList>
        <Column justifyContent="center" mt="30px" alignItems="center">
          <Button
            size="lg"
            color="accent"
            onClick={() => {
              onSubmitTokenSelector(tokenSelected);
            }}
          >
            Confirm selection
          </Button>
        </Column>
      </ModalBody>
    </ModalContent>
  );
}
