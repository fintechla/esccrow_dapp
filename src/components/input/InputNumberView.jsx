import { Input, Label } from "./styles";
import { Column } from "../column";

export function InputNumberView({
  className,
  value,
  label,
  placeholder,
  mt,
  width,
  onChange,
  min,
}) {
  return (
    <Column className={className} mt={mt} width={width}>
      <Label>{label}</Label>
      <Input
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
      />
    </Column>
  );
}
