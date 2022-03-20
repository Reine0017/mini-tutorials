import React, { useState } from 'react';
import "../AllStyles.css"
import ModalPortal from './ModalPortal';
import MyModal from './MyModal';

function ReactPortalPage() {
  const [openModal, setOpenModal] = useState(false)
  const [openModal1, setOpenModal1] = useState(false)

  return (
    <div className="ReactPortalPage">
      THIS IS THE REACT PORTAL PAGE (TO DEMO REACT PORTALS W MODALS)
      <div className="withoutPortal" onClick={() => console.log("clicked withoutPortal")}>
        Demo Without Portal
        <div className="sectionContent">
          <button onClick={() => setOpenModal(true)}>Click Me To Open Modal</button>
          <MyModal openModal={openModal} closeModal={() => setOpenModal(false)}/>
        </div>
      </div>
      <div className="withPortal">
        Demo With Portal
        <div className="sectionContent" onClick={() => console.log("clicked withPortal")}>
        <button onClick={() => setOpenModal1(true)}>Click Me To Open Modal</button>
          <ModalPortal openModal={openModal1} closeModal={() => setOpenModal1(false)}/>
        </div>
      </div>
    </div>
  );
}

export default ReactPortalPage;