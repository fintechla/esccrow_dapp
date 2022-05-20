import styled from "styled-components";
import { Row } from "../row";

export const Select = styled(Row)`
  border-radius: 6px;
  background-color: var(--purple);
  max-height: 57px;
  margin-top: auto;
  align-items: center;
  max-width: 140px;
  min-width: 140px;
  position: relative;
  span {
    font-size: 0.85rem;
    line-height: 1em;
    color: var(--dark);
    display: block;
  }
  span:nth-child(2) {
    font-size: 0.7rem;
    opacity: 0.8;
  }
  .text {
    margin-left: 8px;
  }
  svg {
    ellipse {
      fill: #f1f5ff;
    }
  }
  .chevron {
    margin-left: auto;
  }
  li {
    list-style: none;
    display: inline-flex;
    width: 100%;
    max-width: 100%;
    cursor: pointer;
    padding: 10px 15px;
  }
`;

export const Options = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 5px;
  width: 100%;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 5px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  li {
    background-color: var(--purple);
    max-width: 100%;
    padding: 5px 15px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  }
`;
