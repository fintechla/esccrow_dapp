import { Select } from "./styles";
import { Column } from "../column";
import * as Icons from "../icons";

export function SelectView({ className, options, width, ml }) {
  return (
    <Select className={className}>
      <Icons.Near2 />
      <Column className="text">
        <span>{options[0].name}</span>
        <span>{options[0].type}</span>
      </Column>
      <Icons.ChevronDown className="chevron" />
    </Select>
  );
}
