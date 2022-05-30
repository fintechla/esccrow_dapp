import { NearService } from "../../services/NearService";
import { navigate } from "../fleek-router";
import { DropdownList, DropdownListItem } from "./styles";

export function AccountDropdown() {
  const nearService = new NearService();

  return (
    <DropdownList>
      <DropdownListItem
        onClick={() => {
          navigate("transactions");
        }}
      >
        My transactions
      </DropdownListItem>
      <DropdownListItem
        onClick={() => {
          nearService.logout();
        }}
      >
        Cerrar Sesión
      </DropdownListItem>
    </DropdownList>
  );
}
