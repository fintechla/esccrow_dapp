import { Select, Options } from "./styles";
import { Column } from "../column";
import * as Icons from "../icons";
import { useState } from "react";

function Option({ data, chevron, onClick }) {
  return (
    <li onClick={onClick}>
      {data.icon}
      <Column className="text">
        <span>{data.name}</span>
        <span>{data.type}</span>
      </Column>
      {chevron ? <Icons.ChevronDown className="chevron" /> : ""}
    </li>
  );
}

export function SelectView({ className, options, width, ml }) {
  const [selected, setSelected] = useState(options[0]);
  const [showOptions, setShowOptions] = useState(false);

  const getOptions = () => {
    return options.map((option) => (
      <Option data={option} onClick={() => setShowOptions(false)} />
    ));
  };

  return (
    <Select className={"select " + className}>
      <Option
        data={selected}
        chevron
        onClick={() => setShowOptions(!showOptions)}
      />
      {showOptions ? <Options>{getOptions()}</Options> : ""}
    </Select>
  );
}
