import styled from "styled-components";
import * as Font from "../font";
// import { Link } from "react-router-dom";
import { Link } from "../fleek-router/Link";

// export const STLink = styled(Link)`
export const STLink = styled(Link)`
  font-family: ${Font.primary};
  text-decoration: none;
  font-weight: 400;
  color: var(--dark);
  font-size: 17px;
`;

export const ListItem = styled.li`
  padding: 0px 40px;
  cursor: pointer;
`;
