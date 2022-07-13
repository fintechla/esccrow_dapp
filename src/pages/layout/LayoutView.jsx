import { useState, useEffect } from "react";
import { Header } from "../../components/header";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Container } from "../../components/container";
import { Main, BetaBlock } from "./styles";
import { UtilService } from "../../services/UtilService";

export function LayoutView({ children, container }) {
  const utilService = new UtilService();
  const [themeMode, setThemeMode] = useState(utilService.getThemeMode());
  const size = container === "full" ? undefined : "md";

  useEffect(() => {
    utilService.listenChangeThemeMode((mode) => {
      setThemeMode(mode);
    });
  }, []);

  return (
    <div className={"page-container" + " theme-" + themeMode} style={{overflow: "auto", height: "100vh"}}>
      <Header>
        <Navbar></Navbar>
      </Header>
      <BetaBlock>
        This is a public beta version - Use at your own risk - Unaudited code
      </BetaBlock>
      <Main>
        <Container size={size}>{children}</Container>
      </Main>
      <Footer></Footer>
    </div>
  );
}
