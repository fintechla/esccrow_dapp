import { Container } from "./styles";

export function ContainerView({ className, children, alignItems, size }) {
  return (
    <Container className={className} alignItems={alignItems} size={size}>
      {children}
    </Container>
  );
}
