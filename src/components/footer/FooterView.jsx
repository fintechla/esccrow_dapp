import { Footer } from "./styles";
import { Container } from "../container";
import { Row } from "../row";
// import { Link } from "react-router-dom";

export function FooterView() {
  return (
    <Footer>
      <Container>
        <Row alignItems="center" className="footer-content">
          <span>&copy; 2022 FintechLab US, LLC</span>
          <ul>
            <li>{/* <Link to="#">Privacy Policy</Link> */}</li>
            <li>{/* <Link to="#">Terms of Service</Link> */}</li>
          </ul>
        </Row>
      </Container>
    </Footer>
  );
}
