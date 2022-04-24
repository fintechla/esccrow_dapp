import { Children } from "react";

export function Routes({ children, page }) {
  const getDefaultRoute = () => {
    return Children.toArray(children).find((route) => route.props.index);
  };

  const getSelectedRoute = () => {
    return Children.toArray(children).find(
      (route) => route.props.page === page
    );
  };

  const getRoute = () => {
    if (!page) {
      return getDefaultRoute();
    }
    return getSelectedRoute();
  };

  return getRoute();
}
