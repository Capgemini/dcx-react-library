import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hint } from '../Hint';

describe('Hint', () => {
  it('will render hint component', () => {
    const { container } = render(
      <Hint id="hint-id" text="This is a hint text" />
    );

    expect(container.querySelector('#hint-id')).toBeTruthy();
  });

  it('will render the hint text', () => {
    render(<Hint text="This is a hint text" />);
    expect(screen.getByText('This is a hint text')).toBeInTheDocument();
  });

  it('will render a hint with an id', () => {
    render(<Hint text="This is a hint text" id="my-id" />);
    expect(screen.getByText('This is a hint text').id).toBe('my-id');
  });

  it('will render a hint with a customised heading', () => {
    const { container } = render(
      <Hint text="This is a hint text" classes="my-classes" />
    );
    expect(container.querySelector('.my-classes')).toBeInTheDocument();
  });
});
