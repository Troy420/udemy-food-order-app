import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
// import ModalContext from "../../../store/modal-context";

const Backdrop = (props) => {
  // const modalCtx = useContext(ModalContext);
  return <div className={styles.backdrop} onClick={props.onCloseModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
