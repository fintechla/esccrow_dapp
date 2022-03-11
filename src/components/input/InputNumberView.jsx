import { Input, Label } from "./styles";
import { Column } from "../column";

export function InputNumberView({
  className,
  value,
  label,
  placeholder,
  mt,
  width,
}) {
  return (
    <Column className={className} mt={mt} width={width}>
      <Label>{label}</Label>
      <Input type="number" placeholder={placeholder} value={value} />
    </Column>
  );
}
