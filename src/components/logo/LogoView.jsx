import { Row } from "../row";
import { Span } from "./styles";
import { LogoImg } from "./styles";

export function LogoView() {
  return (
    <Row alignItems="center">
      <LogoImg />
      <Span>esccrow</Span>
    </Row>
  );
}
