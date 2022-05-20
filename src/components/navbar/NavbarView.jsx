import * as Icons from "../icons";
import { MenuNav, Toolbar } from "./styles";
import { MenuItem } from "../menu-item";
import { Container } from "../container";
import { Button } from "../button";
import { Row } from "../row";
import { Logo } from "../logo";

export function NavbarView({
  onClickLogin,
  themeMode,
  onChangeMode,
  walletUserText,
  fiat,
  accountBalance,
}) {
  function getThemeButton() {
    if (themeMode === "dark") {
      return (
        <Button
          color="info"
          href="#"
          iconMR="0"
          onClick={onChangeMode}
          theme="light"
        >
          <Icons.Sun />
        </Button>
      );
    } else if (themeMode === "light") {
      return (
        <Button
          color="info"
          href="#"
          iconMR="0"
          onClick={onChangeMode}
          theme="dark"
        >
          <Icons.Moon />
        </Button>
      );
    }
  }

  return (
    <nav>
      <Container>
        <Row alignItems="center">
          <Logo />
          <MenuNav>
            <MenuItem>
              Near Price:&nbsp; <label>${fiat.near?.usd} USD</label>
            </MenuItem>
            <MenuItem>
              USN Price:&nbsp;
              <label>{"$1.00"} USD</label>
            </MenuItem>
            <MenuItem>
              Account Balance:&nbsp; <label>{accountBalance} NEAR</label>
            </MenuItem>
          </MenuNav>
          <Toolbar alignItems="center" gap="20px">
            <Button color="info" href="#">
              <Icons.Near />
              <span>Near</span>
            </Button>
            <Button color="primary" onClick={onClickLogin}>
              <Icons.Wallet />
              <span>{walletUserText}</span>
            </Button>
            {getThemeButton(themeMode)}
          </Toolbar>
        </Row>
      </Container>
    </nav>
  );
}
