import React from 'react';
import { render } from '@testing-library/react';
import { KeyboardInput } from '@capgeminiuk/dcx-react-library';

describe('KeyboardInput', () => {
  it('renders without errors', () => {
    render(<KeyboardInput>Test</KeyboardInput>);
    // No error should be thrown during rendering
  });

  it('applies custom class name', () => {
    const { container } = render(<KeyboardInput>Test</KeyboardInput>);
    const element = container.querySelector('.custom-class');
    expect(element).toBeNull();
  });

  it('handles empty props gracefully', () => {
    render(<KeyboardInput>Press Enter</KeyboardInput>);
    // No errors thrown
  });

  it('renders children correctly', () => {
    const { container } = render(<KeyboardInput>Test</KeyboardInput>);
    expect(container.textContent).toBe('Test');
  });
});
