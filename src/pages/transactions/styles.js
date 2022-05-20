import styled from "styled-components";
import { Link as RRLink } from "react-router-dom";

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--dark);
`;

export const StatusFilter = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 30px;
  border-bottom: solid 1px rgba(131, 131, 131, 1);
`;

export const StatusFilterItm = styled.li`
  font-size: 1.1rem;
  font-weight: 600;
  padding: 16px 20px;
  color: var(--dark);
  &:nth-child(1) {
    padding-left: 0px;
  }
`;

export const FilterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: baseline;
`;

export const SearchBlock = styled.div`
  display: flex;
`;

export const SearchIpt = styled.input`
  border-radius: 15px;
  width: 605px;
  background-color: var(--purple-down);
  padding: 12px 20px;
  border: 0;
  margin-right: 28px;
  &:focus-visible {
    outline: 0;
  }
`;

export const FilterBtn = styled.button`
  border: 0;
  border-radius: 10px;
  background-color: var(--purple-down);
  padding: 12px 20px;
  color: var(--dark);
  cursor: pointer;
`;

export const TransactionsCount = styled.div`
  color: var(--dark);
`;

export const Table = styled.table`
  margin-top: 32px;
  width: 100%;
  border-spacing: 0;
  thead tr {
    background-color: var(--purple-down);
  }
  th {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--dark);
    padding: 25px 29px;
  }
  td {
    font-size: 1.1rem;
    color: var(--dark);
    text-align: center;
    padding: 20px 12px 22px;
    border-bottom: 1px solid rgba(131, 131, 131, 0.7);
  }
  tbody tr td:nth-child(1) {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const RefreshButton = styled.button`
  cursor: pointer;
  background-color: var(--purple-down);
  border: 0;
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--dark);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  padding: 5px 25px 4px;
`;

export const Link = styled(RRLink)`
  color: var(--dark);
`;
