import styled from "styled-components";

function align(align) {
  let alignStyles = "";
  if (align) {
    alignStyles = `text-align: ${align};`;
  }
  return alignStyles;
}

export const H1 = styled.h1`
  font-size: 41px;
  color: var(--dark);
  ${(props) => (props.align ? align(props.align) : "")}
`;

export const H3 = styled.h3`
  font-size: 20px;
  font-weight: 500;
  ${(props) => (props.align ? align(props.align) : "")}
`;

export const Text = styled.p`
  font-size: 26px;
  ${(props) => (props.align ? align(props.align) : "")}
  color: var(--text-secondary);
`;
