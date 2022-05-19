import styled from "styled-components";
import Breakpoints from "../breakpoints";

function size(size) {
  let sizeStyles = "";
  if (size === "md") {
    sizeStyles = `max-width: 670px!important;`;
  }
  return sizeStyles;
}

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 0 12px;
  ${(props) => (props.size ? size(props.size) : "")}

  @media (min-width: ${Breakpoints.md}) {
    padding: 0 32px;
  }

  @media (min-width: ${Breakpoints.lg}) {
    padding: 0;
    width: 896px;
  }

  @media (min-width: ${Breakpoints.xl}) {
    width: 1152px;
  }

  @media (min-width: ${Breakpoints.xxl}) {
    width: 1440px;
  }
`;
