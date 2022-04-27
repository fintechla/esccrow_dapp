import { Input, Label } from "./styles";
import { Column } from "../column";

export function InputTextView({
  className,
  value,
  label,
  placeholder,
  mt,
  width,
  onChange,
  disabled,
  error,
}) {
  console.log(error);
  return (
    <Column mt={mt} className={className} width={width}>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled ? true : false}
        error={error}
      />
    </Column>
  );
}
