import { useState } from "react";
import { navigate } from "../fleek-router";
import {
  MenuItem,
  Menu,
  TabContent,
  TabNavigationContainer,
  MenuContainer,
} from "./styles";

let hideMenu = undefined;
let showMenu = undefined;

export function TabNavigationView({ className, children }) {
  const orderItems = [...children].sort(
    (a, b) => a.props.order - b.props.order
  );

  const [menuIsVisible, setMenuIsVisible] = useState(true);
  const [activeItem, setActiveItem] = useState(orderItems[0]);
  const menuItems = getMenuItems(orderItems);

  function handleClickMenuItem(item) {
    setActiveItem(item);
  }

  function getMenuItems(orderItems) {
    return orderItems.map((item) => (
      <MenuItem
        key={item.props.order}
        active={item.props.order === activeItem.props.order ? true : false}
        disabled={item.props.disabled}
        onClick={() => {
          if (item.props.navigateTo) {
            navigate(item.props.navigateTo);
          } else if (item.props.disabled) {
          } else {
            handleClickMenuItem(item);
          }
        }}
      >
        {item.props.title}
      </MenuItem>
    ));
  }

  hideMenu = () => {
    setMenuIsVisible(false);
  };

  showMenu = () => {
    setMenuIsVisible(true);
  };

  return (
    <TabNavigationContainer>
      <MenuContainer menuIsVisible={menuIsVisible}>
        <Menu>{menuItems}</Menu>
      </MenuContainer>
      <TabContent className={className} setMenuIsVisible={setMenuIsVisible}>
        {activeItem}
      </TabContent>
    </TabNavigationContainer>
  );
}

export { hideMenu, showMenu };
