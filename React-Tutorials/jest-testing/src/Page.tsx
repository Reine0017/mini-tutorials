import React from 'react';
import { BtnClicked } from './BtnClicked';

export const Page: React.FC = () => {
  const onBtnClick = () => {
    console.log('BTN CLICKED');
  };

  return (
    <div data-testid='blog-page'>
      <h1>Blog Posts</h1>
      <BtnClicked onBtnClick={onBtnClick}></BtnClicked>
    </div>
  );
};