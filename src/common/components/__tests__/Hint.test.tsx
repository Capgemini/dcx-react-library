import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hint } from '../Hint';

describe('Hint', () => {
  it('will render a hint', () => {
    render(<Hint text="This is a hint text" />);
    expect(screen.getByText('This is a hint text')).toBeInTheDocument();
  });

  it('will render a hint with an id', () => {
    const { container } = render(
      <Hint text="This is a hint text" id="my-id" />
    );
    const getById = queryByAttribute.bind(null, 'id');
    expect(getById(container, 'my-id')).toBeInTheDocument();
  });

  it('will render a hint with a customised heading', () => {
    render(<Hint text="This is a hint text" classes="my-classes" />);
    expect(screen.getByText('This is a hint text')?.classList).toContain(
      'my-classes'
    );
  });
});
