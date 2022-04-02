import React from 'react';
//import { BtnClicked } from '../BtnClicked';
import { BtnClicked, BtnClickedProps } from './BtnClicked';
import { screen, render, fireEvent } from '@testing-library/react';

describe('BtnClicked', () => {
  it('renders a BtnClicked', () => {
    const onBtnClick = jest.fn();
    render(<BtnClicked onBtnClick={onBtnClick} />);
    expect(screen.getByTestId('post-content')).toMatchSnapshot();
    expect(screen.getByTestId('post-content')).toBeInTheDocument();
  });
});