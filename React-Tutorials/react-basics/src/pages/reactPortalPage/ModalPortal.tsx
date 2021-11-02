import React from 'react';
import ReactDom from "react-dom"

interface MyModalProps {
  openModal: boolean;
  closeModal: (onClose: boolean) => void
}

export default function ModalPortal(modalProps: MyModalProps) {
  if(!modalProps.openModal){
    return null
  }

  return ReactDom.createPortal(
    <div>
      <div className="overlay1"></div>
      <div className="modal1">
        <button onClick={() => modalProps.closeModal(false)}>
          Close Modal
        </button>
        <br/>
        My Modal Content
      </div>
    </div>,
    document.getElementById("reactportal") as HTMLElement
  );
}