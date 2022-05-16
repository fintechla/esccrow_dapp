import styled from "styled-components";
import * as Icons from "../icons";
import { ReactComponent as CloseSvg } from "../../assets/icons/close.svg";

export const NearIcon = styled(Icons.Near)`
  margin-right: 3px;
  width: 12px;
  height: 12px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: var(--dark);
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: var(--dark);
  margin-bottom: 12px;
`;

export const TokenList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(176px, 1fr));
  grid-gap: 20px;
`;

export const Token = styled.div`
  margin-bottom: 28px;
  position: relative;
  ${(props) =>
    props.selected
      ? `
    &::after {
      content: "";
      display: block;
      background: rgba(0, 134, 255, 0.1);
      border-radius: 10px;
      position: absolute;
      z-index: 1;
      top: -10px;
      left: -10px;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
    }    
    `
      : ""}
`;

export const TokenImg = styled.img`
  width: 100%;
  height: 117px;
  object-fit: contain;
  background-color: rgba(196, 196, 196, 1);
`;

export const TokenTitle = styled.h5`
  font-size: 14px;
  font-weight: 500;
  color: var(--dark);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;
`;

export const TokenCaption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  color: var(--dark);
`;

export const NearSlug = styled.label`
  font-size: 10px;
  color: var(--dark);
  background-color: var(--info);
  border-radius: 10px;
  padding: 6px 5px 4px;
  display: inline-flex;
  align-items: center;
`;

export const CloseBtn = styled.button`
  border: 0;
  background: transparent;
  position: absolute;
  right: 20px;
  top: 30px;
  cursor: pointer;
`;

export const CloseImg = styled(CloseSvg)``;

export const SearchBlock = styled.div`
  margin-bottom: 12px;
`;

export const InputSearch = styled.input`
  width: 200px;
  max-width: 100%;
  border-radius: 5px;
  padding: 5px 12px;
  border: solid 1px #d2d2d2;
  outline: 0;
`;
