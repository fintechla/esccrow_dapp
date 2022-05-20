import styled from "styled-components";
import { Content } from "../content";

export const TabNavigationContainer = styled.div`
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.28);
  border-radius: 10px;
  margin-top: 30px;
  background-color: var(--bg-white);
`;

export const MenuItem = styled.li`
  padding: 18px 47px 12px;
  font-size: 1.2rem;
  font-weight: 400;
  cursor: pointer;
  border-bottom: solid 3px transparent;
  color: var(--dark);
  ${(props) =>
    props.active ? "border-color: var(--dark);font-weight: 500;" : ""}
`;

export const MenuContainer = styled(Content)`
  border-bottom: solid 1px var(--dark);
  ${(props) => (!props.menuIsVisible ? "display: none!important;" : "")}
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

export const TabContent = styled.div`
  position: relative;
`;
