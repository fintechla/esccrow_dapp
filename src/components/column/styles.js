import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => (props.width ? "width: " + props.width + ";" : "")}
  ${(props) => (props.ml ? "margin-left: " + props.ml + ";" : "")}
  ${(props) => (props.mt ? "margin-top: " + props.mt + ";" : "")}
  ${(props) => (props.pt ? "padding-top: " + props.pt + ";" : "")}
  ${(props) => (props.pb ? "padding-bottom: " + props.pb + ";" : "")}
  ${(props) => (props.pl ? "padding-left: " + props.pl + ";" : "")}
  ${(props) =>
    props.alignItems ? "align-items: " + props.alignItems + ";" : ""}
`;
