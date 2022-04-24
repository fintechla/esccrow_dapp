import { useState, isValidElement, Children, cloneElement } from "react";
import { Query } from "./utils/Query";

let navigate;

export function FleekRouter({ children }) {
  const query = new Query();
  const [page, setPage] = useState(query.params.page);

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { page });
    }
    return child;
  });

  navigate = (page, params = {}) => {
    query.setParams({ page, ...params });
    setPage(page);
  };

  return <>{childrenWithProps}</>;
}

export { navigate };
