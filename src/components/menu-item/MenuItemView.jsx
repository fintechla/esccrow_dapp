import { ListItem, STLink } from "./styles";

export function MenuItemView({ to, children }) {
  return (
    <ListItem>
      <STLink to={to}>{children}</STLink>
    </ListItem>
  );
}
