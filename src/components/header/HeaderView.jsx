import { Header } from "./styles";

export function HeaderView({ className, children }) {
  return <Header className={className}>{children}</Header>;
}
