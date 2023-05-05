// import React from 'react';
// import { Paragraph } from '../Paragraph';
// import {
//   act,
//   fireEvent,
//   render,
//   screen,
//   waitFor,
// } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { Paragraph } from '../Paragraph';
// import { BUTTON_TYPE } from '..';
// import userEvent from '@testing-library/user-event';

// const DummyLoadingButton = ({ loadingLabel }: any) => {
//   const [isLoading, setIsLoading] = React.useState(false);

//   const handleClick = () => {
//     setIsLoading(true);
//     setTimeout(() => setIsLoading(false), 1000);
//   };

  // return (
  //   <Paragraph
  //     onClick={handleClick}
  //     loadingLabel={loadingLabel}
  //     customPrefixImg={<img id="prefixImg" alt="" src="" />}
  //     customPostfixImg={<img id="postfixmg" alt="" src="" />}
  //     customLoadingPostImage={<img id="postLoadingImg" alt="" src="" />}
  //     customLoadingPreImage={<img id="preLoadingImg" alt="" src="" />}
  //   />
  // );
// };

// describe('Button', () => {
//   it('should render', () => {
//     const handleClick = jest.fn();
//     render(<Button label="label" onClick={handleClick} />);

//     expect(screen.getByRole('button')).toBeInTheDocument();
//   });

// });
