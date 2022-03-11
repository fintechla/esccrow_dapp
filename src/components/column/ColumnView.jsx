import { Column } from "./styles";

export function ColumnView({
  className,
  children,
  width,
  ml,
  mt,
  pt,
  pb,
  pl,
  alignItems,
}) {
  return (
    <Column
      className={className}
      width={width}
      ml={ml}
      mt={mt}
      pt={pt}
      pb={pb}
      pl={pl}
      alignItems={alignItems}
    >
      {children}
    </Column>
  );
}
