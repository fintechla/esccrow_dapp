import { ListItem, STLink } from "./styles";

export function MenuItemView({ to, children, foreign }) {
  return (
    <ListItem>
      <STLink to={to} foreign={foreign}>
        {children}
      </STLink>
    </ListItem>
  );
}
