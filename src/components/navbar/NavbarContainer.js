import { useEffect, useState } from "react";
import { NavbarView } from "./NavbarView";
import { UtilService } from "../../services/UtilService";
import { NearService } from "../../services/NearService";

export function NavbarContainer({ className, chilchen }) {
  const utilService = new UtilService();
  const nearService = new NearService();
  const [themeMode, setThemeMode] = useState(utilService.getThemeMode());
  const [fiat, setFiat] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const walletUserText = nearService.isSigned()
    ? nearService.wallet.getAccountId()
    : "Connect Wallet";

  const handleChangeMode = () => {
    if (themeMode === "dark") {
      utilService.setThemeMode("light");
    } else {
      utilService.setThemeMode("dark");
    }
    setThemeMode(utilService.getThemeMode());
  };

  const getFiat = async () => {
    const result = await nearService.getFiat();
    setFiat(result);
  };

  const getAccountBalance = async () => {
    const result = await nearService.getAccountBalance();
    setAccountBalance(result);
  };

  const init = () => {
    getFiat();
    getAccountBalance();
  };

  useEffect(init, []);

  return (
    <NavbarView
      fiat={fiat}
      accountBalance={accountBalance}
      onChangeMode={handleChangeMode}
      walletUserText={walletUserText}
      themeMode={themeMode}
      onClickLogin={async () => {
        if (!nearService.isSigned()) {
          nearService.signIn();
        }
      }}
    />
  );
}
