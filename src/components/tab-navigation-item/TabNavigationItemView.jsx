import { TabNavigationItem } from "./styles";

export function TabNavigationItemView({ className, children, disabled }) {
  return (
    <TabNavigationItem className={className} disabled={disabled}>
      {children}
    </TabNavigationItem>
  );
}
