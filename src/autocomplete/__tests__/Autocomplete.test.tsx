import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Autocomplete } from '../';

//TODO add more test
describe('FormInput', () => {
  it('should display the formInput content', () => {
    render(<Autocomplete options={['daniele', 'isaac']} />);

    const input: any = screen.getByRole('textbox');
    expect(input.name).toBe('autocompleteSearch');
    expect(input.type).toBe('text');
    expect(input.value).toBe('');
    expect(input).toBeInTheDocument();
  });
});
