import { NearService } from "../../services/NearService";
import { DropdownList, DropdownListItem } from "./styles";

export function AccountDropdown() {
  const nearService = new NearService();

  return (
    <DropdownList>
      <DropdownListItem
        onClick={() => {
          console.log("cerrarSesion");
          nearService.logout();
        }}
      >
        Cerrar Sesión
      </DropdownListItem>
    </DropdownList>
  );
}
