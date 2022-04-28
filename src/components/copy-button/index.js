import { ReactComponent as CopySVG } from "../../assets/icons/copy.svg";
import { Button } from "./styles";

export function CopyButton({ className, text }) {
  const copy = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <Button className={className} onClick={copy}>
      <CopySVG />
    </Button>
  );
}
