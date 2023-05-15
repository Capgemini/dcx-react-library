import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InsertText } from '../InsertText';

describe('InsertText', () => {
  it('should render', () => {
    render(<InsertText value="insert text" id="user-defined-id" />);

    expect(screen.getByText(' text')).toBeInTheDocument();
  });
});
