import React from 'react';
import "../AllStyles.css"

interface MyModalProps {
  openModal: boolean;
  closeModal: (onClose: boolean) => void
}

export default function MyModal(modalProps: MyModalProps) {
  if(!modalProps.openModal){
    return null
  }

  return (
    <div>
      <div className="overlay"></div>
      <div className="modal">
        <button onClick={() => modalProps.closeModal(false)}>
          Close Modal
        </button>
        <br/>
        My Modal Content
      </div>
    </div>
  );
}