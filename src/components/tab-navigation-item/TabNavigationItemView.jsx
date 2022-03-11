import { TabNavigationItem } from "./styles";

export function TabNavigationItemView({ className, children }) {
  return (
    <TabNavigationItem className={className}>{children}</TabNavigationItem>
  );
}
