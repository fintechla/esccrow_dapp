import styled from "styled-components";
import { DataComponent } from "./utils";
import { Table } from "../../components/table";
import { CopyButton as CopyButtonComponent } from "../../components/copy-button";

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--dark);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px rgba(131, 131, 131, 1);
  padding-bottom: 13px;
`;

export const TimeBlock = styled.div`
  width: 434px;
`;

export const Data = styled(DataComponent)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  span {
    font-size: 1rem;
    color: var(--dark);
  }
  &:nth-child(1) {
    margin-bottom: 8px;
  }
`;

export const Table2 = styled(Table)`
  margin-top: 30px;
  width: 100%;
  td {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--dark);
    font-style: normal;
    position: relative;
  }
  td b {
    font-size: 1rem;
    font-weight: 600;
    color: var(--dark);
  }
  td div {
    padding-bottom: 40px;
    display: flex;
    align-items: center;
  }
  td span {
    display: block;
    align-items: center;
    max-width: 263px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const Table1 = styled(Table)`
  margin-top: 50px;
  th,
  td {
    color: var(--dark);
    padding: 5px 50px 5px 0px;
    text-align: left;
  }
  th {
    font-size: 1.1rem;
    font-weight: 600;
  }
  td {
    font-size: 1.4rem;
    font-weight: 400;
  }
  td div {
    display: flex;
    align-items: center;
  }
`;

export const Card = styled.div`
  margin-top: 50px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.28);
  border-radius: 10px;
  padding: 0 32px;
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid rgba(131, 131, 131, 0.7);
  padding: 25px 12px 17px;
`;

export const CardTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--dark);
`;

export const CardBody = styled.div`
  padding-bottom: 60px;
`;

export const MaxTime = styled.p`
  color: var(--dark);
  font-size: 1.3rem;
  font-weight: 400;
`;

export const Confirm = styled.p`
  color: var(--dark);
  font-size: 1rem;
  font-weight: 400;
  margin-top: 16px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 25px;
`;

export const CopyButton = styled(CopyButtonComponent)`
  margin-left: 15px;
`;
