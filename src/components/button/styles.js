import styled from "styled-components";
import * as Font from "../font";

const weights = {
  xs: "400",
  sm: "400",
  md: "400",
  lg: "700",
  xl: "800",
};

const paddings = {
  xs: "7px 13px",
  sm: "7px 13px",
  md: "7px 13px",
  lg: "10px 42px",
  xl: "7px 13px",
};

function getButtonColorStyles(color) {
  const colorStyle = color ?? "secondary";
  const backgroundColor = `var(--${colorStyle})`;
  const fontColor = `var(--${colorStyle + "-co"})`;
  const shadowColor = `var(--${colorStyle + "-sha"})`;
  const styles = `
      background-color: ${backgroundColor};
      color: ${fontColor};
      box-shadow: 0px 2px 4px ${shadowColor};
      & span {
        color: ${fontColor};
      }
    `;
  return styles;
}

function getButtonSizeStyles(size, color) {
  const sizeStyle = size ?? "md";
  const fontSize = Font.sizes[sizeStyle];
  const fontWeight = color === "secondary" ? 400 : weights[sizeStyle];
  const padding = paddings[sizeStyle];
  const styles = `
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      border-radius: 10px;
      padding: ${padding};
    `;
  return styles;
}

export const Button = styled.a`
  font-family: ${Font.primary};
  font-weight: 400;
  color: var(--white);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  ${(props) => getButtonColorStyles(props.color)}
  ${(props) => getButtonSizeStyles(props.size, props.color)}
  & > svg {
    margin-right: 5px;
    ${(props) => (props.iconMR ? "margin-right: 0px!important;" : "")}
  }
  &:hover {
    ${(props) =>
      props.color
        ? "background-color: var(--" + props.color + "-up);"
        : "background-color: var(--secondary-up);"}
  }
`;
