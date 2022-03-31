import styled from "styled-components";
import { Row } from "../row";

export const PoweredBlock = styled(Row)`
  align-items: center;
  margin-top: 12px;
  svg {
    margin-left: 5px;
  }
  span {
    font-size: 12px;
    color: var(--black);
  }
`;

export const OneColumn = styled(Row)`
  gap: 30px;
  > div {
    width: 100%;
    background-color: var(--purple);
    padding: 12px 20px;
    border-radius: 6px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    label {
      font-size: 14px;
      font-weight: 400;
      color: var(--dark);
      margin-bottom: 12px;
    }
    p {
      font-size: 18px;
      font-weight: 600;
      color: var(--dark);
    }
  }
  margin-top: 20px;
`;

export const TwoColumns = styled(Row)`
  gap: 30px;
  margin-top: 20px;
  > div {
    width: 50%;
    background-color: var(--purple);
    padding: 12px 20px;
    border-radius: 6px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    label {
      font-size: 14px;
      font-weight: 400;
      color: var(--dark);
      margin-bottom: 12px;
    }
    p {
      font-size: 18px;
      font-weight: 600;
      color: var(--dark);
    }
  }
`;

export const Tbl = styled.table`
  background-color: var(--purple-down);
  border-radius: 6px;
  padding: 20px 32px;
`;

export const Th = styled.th`
  font-size: 18px;
  color: var(--dark);
  font-weight: 400;
  text-align: left;
  padding-right: 20px;
  b {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const Tr = styled.tr`
  white-space: nowrap;
`;

export const Td = styled.td`
  font-size: 16px;
  color: var(--dark);
  text-align: right;
  border-bottom: solid 1px rgba(26, 35, 126, 0.3);
  width: 100%;
  padding-top: 9px;
  b {
    font-weight: 600;
    font-size: 18px;
  }
`;

export const WalletBlock = styled.div`
  padding: 20px;
  background-color: var(--purple-down);
  border-radius: 6px;
`;

export const PriceBlock = styled.div`
  padding: 20px;
  background-color: var(--purple-down);
  border-radius: 6px;
  margin-top: 15px;
`;

export const H4 = styled.h4`
  color: var(--dark);
  font-weight: 600;
  font-size: 21px;
`;

export const H5 = styled.h5`
  color: var(--dark);
  font-weight: 600;
  font-size: 18px;
`;

export const BtnWallet = styled.button`
  color: var(--dark);
  background: rgba(52, 104, 255, 0.4);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 0;
  padding: 6px 20px 4px;
  cursor: pointer;
`;

export const P = styled.p`
  color: var(--text-secondary);
  font-size: 18px;
  margin-top: 20px;
  font-weight: 300;
`;

export const Data = styled.p`
  font-size: 18px;
  color: var(--dark);
  font-weight: 400;
`;

export const Value = styled(Data)`
  font-weight: 500;
`;

export const StepRow = styled(Row)`
  margin-bottom: 8px;
`;

export const StepFiveP = styled.p`
  font-size: 16px;
  color: var(--dark);
  font-weight: 400;
  margin-top: 13px;
  max-width: 440px;
  text-align: center;
`;

export const QrBlock = styled.div`
  margin-top: 17px;
`;

export const UrlBlock = styled.div`
  background: #eaeaea;
  border-radius: 15px;
  width: 458px;
  max-width: 100%;
  padding: 7px 20px 5px;
  margin-top: 20px;
  margin-bottom: 24px;
`;

export const SocialBlock = styled.div`
  margin-top: 22px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SocialButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  background-color: transparent;
  label {
    font-size: 10px;
    margin-top: 5px;
  }
`;

export const TokenIdBtn = styled.button`
  background-color: var(--purple);
  height: 47px;
  margin-top: auto;
  border: 0;
  border-radius: 6px;
  width: 140px;
  color: var(--dark);
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;
