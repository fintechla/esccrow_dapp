import styled from "styled-components";
import { Content } from "../content";

export const TabNavigationContainer = styled.div`
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.28);
  border-radius: 10px;
  margin-top: 45px;
  background-color: var(--bg-white);
`;

export const MenuItem = styled.li`
  padding: 24px 47px 19px;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  border-bottom: solid 5px transparent;
  color: var(--dark);
  ${(props) => (props.active ? "border-color: var(--dark);font-weight: 500;" : "")}
`;

export const MenuContainer = styled(Content)`
  border-bottom: solid 1px var(--dark);
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

export const TabContent = styled.div``;
