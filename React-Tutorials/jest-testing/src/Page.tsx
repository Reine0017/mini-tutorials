import React from 'react';
import { BtnClicked } from './BtnClicked';
import { PostCard } from './Components/PostCard';

export const Page: React.FC = () => {
  const onBtnClick = () => {
    console.log('BTN CLICKED');
  };

  return (
    <div data-testid='blog-page'>
      <h1>Blog Posts</h1>
      <PostCard></PostCard>
      <BtnClicked onBtnClick={onBtnClick}></BtnClicked>
    </div>
  );
};