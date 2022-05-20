import styled from "styled-components";

function alignItems(alignItems) {
  let alignItemsStyles = "";
  switch (alignItems) {
    case "center":
      alignItemsStyles = "align-items: center;";
      break;
    case "baseline":
      alignItemsStyles = "align-items: baseline;";
      break;
    default:
      break;
  }
  return alignItemsStyles;
}

function gap(gap) {
  let gapStyles = "";
  if (gap) {
    gapStyles = `gap: ${gap};`;
  }
  console.log(gapStyles);
  return gapStyles;
}

export const Row = styled.div`
  display: flex;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  flex-direction: row;
  ${(props) => (props.alignItems ? gap(props.gap) : "")}
  ${(props) => (props.alignItems ? alignItems(props.alignItems) : "")}  
  ${(props) => (props.pt ? "padding-top: " + props.pt + ";" : "")}
  ${(props) => (props.pb ? "padding-bottom: " + props.pb + ";" : "")}
  ${(props) => (props.mt ? "margin-top: " + props.mt + ";" : "")}
  ${(props) => (props.mb ? "margin-bottom: " + props.mb + ";" : "")}
  ${(props) => (props.ml ? "margin-left: " + props.ml + ";" : "")}
  ${(props) =>
    props.justifyContent
      ? "justify-content: " + props.justifyContent + ";"
      : ""}
`;
