import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Link } from '../Link';

describe('Link', () => {
  it('should render', () => {
    render(<Link to="https://www.google.com/" value="valueText" />);

    expect(screen.getByText('some-property')).toBeInTheDocument();
  });
});
