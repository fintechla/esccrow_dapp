import { Input, CheckboxLabel } from "./styles";

export function InputCheckboxView({
  className,
  value,
  label,
  mt,
  width,
  onChange,
}) {
  return (
    <CheckboxLabel mt={mt}>
      <Input type="checkbox" value={value} onChange={onChange} />
      {label}
    </CheckboxLabel>
  );
}
