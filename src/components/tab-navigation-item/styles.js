import styled from "styled-components";
import { Content } from "../content";

export const TabNavigationItem = styled(Content)`
  ${(props) => (props.disabled ? "color: var(--placeholder);" : "")}
`;
