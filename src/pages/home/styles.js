import styled from "styled-components";
import { Text } from "../../components/text";
import { Row } from "../../components/row";
import { Content } from "../../components/content";

export const SubTitle = styled(Text)`
  margin-top: 20px;
`;

export const PoweredBlock = styled(Row)`
  align-items: center;
  margin-top: 12px;
  svg {
    margin-left: 5px;
  }
  span {
    font-size: 12px;
    color: var(--black);
    margin-top: 2px;
  }
  @media (prefers-color-scheme: dark) {
    svg path {
      fill: var(--white);
    }
  }
`;

export const Reminder = styled(Content)`
  background-color: var(--sky-blue);
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 25px;
  h3 {
    color: var(--dark);
  }
  svg path {
    fill: var(--dark);
  }
`;

export const List = styled.ul`
  padding-left: 20px;
`;

export const Item = styled.li`
  font-size: 16px;
  color: var(--dark);
`;
