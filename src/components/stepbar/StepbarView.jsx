import { Item, List } from "./styles";

export function StepbarView({ steps, progress }) {
  function getList(steps, progress) {
    const arr = [...Array(steps).keys()];

    return arr.map((elm, idx) => (
      <Item key={idx + 1} active={idx + 1 <= progress ? true : false}>
        {idx + 1}
      </Item>
    ));
  }

  return <List>{getList(steps, progress)}</List>;
}
