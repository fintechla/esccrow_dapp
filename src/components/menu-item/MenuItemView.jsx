import { ListItem, STLink } from "./styles";

export function MenuItemView({ to, children, foreign }) {
  return (
    <ListItem>
      {to ? (
        <STLink to={to} foreign={foreign}>
          {children}
        </STLink>
      ) : (
        <div>{children}</div>
      )}
    </ListItem>
  );
}
