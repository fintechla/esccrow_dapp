import { useState } from "react";
import { ModalView } from "./ModalView";

let showModal;
let hideModal;

export function ModalContainer() {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState(undefined);
  showModal = (content) => {
    setVisible(true);
    setContent(content);
  };

  hideModal = () => {
    setVisible(false);
    setContent(undefined);
  };
  return <ModalView visible={visible} content={content} />;
}

export { showModal, hideModal };
