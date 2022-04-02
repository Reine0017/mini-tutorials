import React from 'react';

export interface BtnClickedProps {
  onBtnClick: () => void;
}

export const BtnClicked: React.FC<BtnClickedProps> = ({ onBtnClick }) => {
  return (
    <p data-testid='post-content'>
      <button onClick={onBtnClick}>CLICK ME</button>
    </p>
  );
};