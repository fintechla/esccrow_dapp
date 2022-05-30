import styled from "styled-components";
import { Row } from "../row";

export const MenuNav = styled.ul`
  text-decoration: none;
  padding: 0;
  list-style: none;
  display: none;
  margin: 0px auto;

  @media (min-width: 1200px) {
    display: flex;
  }
`;

export const Toolbar = styled(Row)`
  margin-left: auto;
  & a span {
    display: none;
  }
  & a svg {
    margin-right: 0px;
  }
  @media (min-width: 1200px) {
    margin-left: inherit;
    & a svg {
      margin-right: 5px;
    }
    & a span {
      display: inline-block;
    }
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0px 3px 6px -4px rgb(0 0 0 / 12%), 0px 6px 16px rgb(0 0 0 / 8%),
    0px 9px 28px 8px rgb(0 0 0 / 5%);
  width: calc(100% - 24px);
  background-color: var(--bg-white);
  list-style: none;
  padding: 0;
  margin-top: 5px;
  color: var(--dark);
  font-size: 0.9em;
  width: 100%;
`;

export const DropdownListItem = styled.li`
  padding: 10px 12px;
  width: 100%;
`;
