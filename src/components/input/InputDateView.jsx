import { Input, Label } from "./styles";
import { Column } from "../column";

export function InputDateView({
  className,
  value,
  label,
  placeholder,
  mt,
  width,
  onChange,
}) {
  return (
    <Column mt={mt} className={className} width={width}>
      <Label>{label}</Label>
      <Input
        type="date"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Column>
  );
}
