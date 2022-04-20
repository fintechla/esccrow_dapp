import styled from "styled-components";
import { ReactComponent as CloseSvg } from "../../assets/icons/close.svg";
import { ModalBody as ModalBodyComp } from "../Modal/styles";
import { ReactComponent as CongratsSVG } from "../../assets/images/congrats.svg";

export const CloseBtn = styled.button`
  border: 0;
  background: transparent;
  position: absolute;
  right: 20px;
  top: 30px;
  cursor: pointer;
`;

export const CloseImg = styled(CloseSvg)``;

export const Title = styled.h3`
  font-size: 31px;
  font-weight: 700;
  color: var(--dark);
  text-align: center;
`;

export const SubTitle = styled.h4`
  font-size: 22px;
  font-weight: 400;
  color: var(--dark);
  text-align: center;
`;

export const ModalBody = styled(ModalBodyComp)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CongratsImg = styled(CongratsSVG)`
  margin-top: 25px;
  margin-bottom: 25px;
`;
