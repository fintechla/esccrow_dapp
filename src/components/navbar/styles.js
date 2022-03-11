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
