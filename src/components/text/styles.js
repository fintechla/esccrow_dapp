import styled from "styled-components";

function align(align) {
  let alignStyles = "";
  if (align) {
    alignStyles = `text-align: ${align};`;
  }
  return alignStyles;
}

export const H1 = styled.h1`
  font-size: 1.8rem;
  color: var(--dark);
  ${(props) => (props.align ? align(props.align) : "")}
`;

export const H3 = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  ${(props) => (props.align ? align(props.align) : "")}
`;

export const Text = styled.p`
  font-size: 1.4rem;
  ${(props) => (props.align ? align(props.align) : "")}
  color: var(--text-secondary);
`;
