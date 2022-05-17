import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/images/esccrow-logo.svg";

export const Span = styled.span`
  font-family: LTWave;
  color: var(--dark);
  letter-spacing: -1px;
  font-size: 40px;
  line-height: 40px;
  margin-top: -6px;
`;

export const LogoImg = styled(LogoSVG)`
  margin-right: 15px;
`;

export const Div = styled.div`
  cursor: pointer;
`;
