
import React from 'react';
//import { BtnClicked } from '../BtnClicked';
import { BtnClickedProps } from './BtnClicked';
import * as Page from './Page';
import { screen, render, fireEvent } from '@testing-library/react';

// whats the difference between A and B?
//A returns an object literal whereas B is written as a functional expression
//theyre the same

// A - find out if we can type A the same way we type B
jest.mock('../BtnClicked', () => ({
  BtnClicked: ({ onBtnClick }: { onBtnClick: any }) => (
    <div data-testid='post-content'>
      <button data-testid='post-content-button' onClick={onBtnClick}></button>
    </div>
  ),
}));

// B
// jest.mock('../BtnClicked', () => {
//   const BtnClicked: React.FC<BtnClickedProps> = ({ onBtnClick }) => (
//     <div data-testid='post-content'>
//       <button data-testid='post-content-button' onClick={onBtnClick}></button>
//     </div>
//   );

//   return { BtnClicked };
// });

describe('Page', () => {
  it('renders a BtnClicked', () => {
    render(<Page.Page />);
    expect(screen.getByTestId('blog-page')).toMatchSnapshot();
    expect(screen.getByTestId('post-content')).toBeInTheDocument();
  });

  it('calls BtnClicked with onBtnClick', () => {
    render(<Page.Page />);
    // expect(BtnClicked).toHaveBeenCalledWith(
    //   expect.objectContaining({ id: postId }),
    //   expect.anything()
    // );
    console.log = jest.fn(); //console.log is available globally - exposed by the runtime, but onBtnClick is not exposed and is internal to Page

    //const onBtnClick = jest.fn(); //what is jest.fn()

    fireEvent.click(screen.getByTestId('post-content-button'));

    expect(console.log).toBeCalledTimes(1);
  });

  // it('renders the mailing list sign up button within the BtnClicked', () => {
  //   render(<Page url='http://example.com/blog/my-web-page' />);

  //   const BtnClickedElement = screen.getByTestId('BtnClickeds1');

  //   const button = screen.getByRole('button', { name: 'Sign up' });

  //   expect(BtnClickedElement).toBeInTheDocument();
  //   expect(button).toBeInTheDocument();
  // });
});

// const personA = () => {
//   return { firstName: 'a', lastName: 'b', fullName: 'ab', age: 10 };
// };

// const personB = () => {
//   return { firstName: 'b', lastName: 'c', fullName: 'bc', age: 11 };
// };

// const person = (firstName, lastName, age) => {
//   const fullName = firstName + lastName;
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: fullName,
//     age: age,
//   };
// };

// //personA = person("a","b",10)

// //declaration
// myFunc();
// function myFunc() {
//   console.log('smth');
// }

// //expression
// myFunc1();
// const myFunc1 = () => {
//   console.log('smth');
// };