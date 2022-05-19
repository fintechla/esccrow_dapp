import styled from "styled-components";

export const Modal = styled.div`
  ${(props) => (props.visible ? "display: flex;" : "display: none;")}
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 692px;
  max-width: 100%;
  background-color: var(--white);
  border-radius: 10px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  position: relative;
`;

export const ModalHeader = styled.div``;

export const ModalBody = styled.div`
  padding: 40px 47px;
`;
