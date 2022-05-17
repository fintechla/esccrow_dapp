import { navigate } from "../fleek-router";
import { Row } from "../row";
import { Span } from "./styles";
import { LogoImg, Div } from "./styles";

export function LogoView() {
  return (
    <Div
      onClick={() => {
        navigate("home");
      }}
    >
      <Row alignItems="center">
        <LogoImg />
        <Span>esccrow</Span>
      </Row>
    </Div>
  );
}
