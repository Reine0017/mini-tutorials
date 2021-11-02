import React from 'react';
import "../AllStyles.css"

function ReactPortalPage() {
  return (
    <div className="ReactPortalPage">
      THIS IS THE REACT PORTAL PAGE (TO DEMO REACT PORTALS W MODALS)
      <div className="withoutPortal">
        Demo Without Portal
      </div>
      <div className="withPortal">
        Demo With Portal
      </div>
    </div>
  );
}

export default ReactPortalPage;