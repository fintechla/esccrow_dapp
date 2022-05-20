import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
  gap: 50px;
`;

export const Item = styled.li`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  position: relative;
  font-size: 0.9rem;
  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 50px;
    height: 5px;
    left: 100%;
    top: calc(50% - 2.5px);
    ${(props) =>
      props.active
        ? "background-color: var(--purple-up)"
        : "background-color: #e5e3e3;"}
  }
  :nth-last-child(1)::after {
    display: none;
  }
  ${(props) =>
    props.active
      ? "background-color: var(--purple-up)"
      : "background-color: #e5e3e3;"}
`;
