import { Content } from "./styles";

export function ContentView({ className, children }) {
  return <Content className={className}>{children}</Content>;
}
