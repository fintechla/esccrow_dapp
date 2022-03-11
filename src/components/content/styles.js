import styled from "styled-components";
import breakpoints from "../breakpoints";

export const Content = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  @media (min-width: ${breakpoints.xs}) {
    padding-left: 82px;
    padding-right: 82px;
  }
`;
