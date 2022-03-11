import { Row } from "./styles";

export function RowView({
  className,
  children,
  alignItems,
  gap,
  pt,
  pb,
  mt,
  mb,
  ml,
  justifyContent,
}) {
  return (
    <Row
      className={className}
      alignItems={alignItems}
      gap={gap}
      mt={mt}
      mb={mb}
      ml={ml}
      pt={pt}
      pb={pb}
      justifyContent={justifyContent}
    >
      {children}
    </Row>
  );
}
