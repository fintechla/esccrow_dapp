import { Select } from "./styles";
import { Column } from "../column";
import * as Icons from "../icons";

export function SelectView({ className, options, width, ml }) {
  return (
    <Select className={"select " + className}>
      <Icons.Near2 className="icon"/>
      <Column className="text">
        <span>{options[0].name}</span>
        <span>{options[0].type}</span>
      </Column>
      <Icons.ChevronDown className="chevron" />
    </Select>
  );
}
