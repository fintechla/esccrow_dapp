import { Modal } from "./styles";
export function ModalView({ visible, content }) {
  return <Modal visible={visible}>{content}</Modal>;
}
