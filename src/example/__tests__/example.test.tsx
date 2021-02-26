import React from 'react';
import {Example} from '../example'
import {render} from '@testing-library/react'

describe('Example', () => {
  it('renders without crashing', () => {
    const {getByTestId} = render(<Example />)
    expect(getByTestId('example')).toBeDefined()
    
  });
});
