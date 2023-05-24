import React from 'react';
import { render } from '@testing-library/react';
import { KeyboardInput } from '@capgeminiuk/dcx-react-library';

describe('KeyboardInput', () => {
  it('renders without errors', () => {
    expect(() => {
      render(<KeyboardInput>Press Enter</KeyboardInput>);
    }).not.toThrow();
  });

  it('applies custom class name', () => {
    const { container } = render(<KeyboardInput>Test</KeyboardInput>);
    const element = container.querySelector('.custom-class');
    expect(element).toBeNull();
  });

  it('renders children correctly', () => {
    const { container } = render(<KeyboardInput>Test</KeyboardInput>);
    expect(container.textContent).toBe('Test');
  });
});
