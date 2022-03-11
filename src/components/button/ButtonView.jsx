import { Button } from "./styles";

export function ButtonView({
  href,
  color,
  iconMR,
  size,
  children,
  className,
  onClick,
}) {
  return (
    <Button
      className={className}
      href={href}
      color={color}
      iconMR={iconMR}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
