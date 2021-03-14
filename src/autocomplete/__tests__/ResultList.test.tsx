import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ResultList } from '../ResultList';

//TODO add more test
describe('FormInput', () => {
  it('should display the formInput content', () => {
    const handleClick = jest.fn();
    render(
      <ResultList
        list={['daniele', 'isaac']}
        userInput="da"
        activeOption={1}
        onClick={handleClick}
      />
    );
    const listItems: any = screen.getAllByRole('listitem');
    expect(listItems[0].innerHTML).toBe('daniele');
    expect(listItems[1].innerHTML).toBe('isaac');
  });
});
