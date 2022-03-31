import styled from "styled-components";
import { Row } from "../row";

export const Select = styled(Row)`
  border-radius: 6px;
  background-color: var(--purple);
  max-height: 57px;
  margin-top: auto;
  padding: 10px 15px;
  align-items: center;
  max-width: 110px;
  min-width: 110px;
  span {
    font-size: 13px;
    line-height: 1em;
    color: var(--dark);
  }
  span:nth-child(2) {
    font-size: 10px;
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
`;
