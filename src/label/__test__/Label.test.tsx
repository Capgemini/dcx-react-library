import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from '../Label';

describe('Label', () => {
  it('should render', () => {
    render(
      <Label className="additional classes" value="text" id="user-defined-id" />
    );

    expect(screen.getByText('text')).toBeInTheDocument();
  });
});
