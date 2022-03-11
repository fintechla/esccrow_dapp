import { useState } from "react";
import { NavbarView } from "./NavbarView";
import { UtilService } from "../../services/UtilService";
import { login } from "../../services/NearService";
import { _CONFIG_ } from "../../config";
import * as nearApi from "near-api-js";

import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

export function NavbarContainer({ className, chilchen }) {
  const utilService = new UtilService();
  const [themeMode, setThemeMode] = useState(utilService.getThemeMode());

  const handleChangeMode = () => {
    if (themeMode === "dark") {
      utilService.setThemeMode("light");
    } else {
      utilService.setThemeMode("dark");
    }
    setThemeMode(utilService.getThemeMode());
  };

  return (
    <NavbarView
      onChangeMode={handleChangeMode}
      themeMode={themeMode}
      onClickLogin={() => {
        const config = {
          networkId: _CONFIG_.networkId,
          keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore(),
          nodeUrl: _CONFIG_.nodeUrl,
          walletUrl: _CONFIG_.walletUrl,
          helperUrl: _CONFIG_.helperUrl,
          explorerUrl: _CONFIG_.explorerUrl,
        };

        // open a connection to the NEAR platform
        (async function () {
          window.near = await nearApi.connect(config);
          const wallet = new nearApi.WalletConnection(window.near);
          const signIn = () => {
            wallet.requestSignIn(
              "example-contract.testnet", // contract requesting access
              "Example App", // optional
              _CONFIG_.url, // optional
              _CONFIG_.url // optional
            );
          };
          signIn();
          // ---------------------------------------------------------------------------
          // here you have access to `near-api-js` and a valid connection object `near`
          // ---------------------------------------------------------------------------
        })(window);
      }}
    />
  );
}
