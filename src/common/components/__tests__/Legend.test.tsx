import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Legend } from '../Legend';

describe('Legend', () => {
  it('will render a legend', () => {
    render(<Legend text="Have you changed your name?" classes="my-classes" />);

    expect(screen.getByText('Have you changed your name?')).toBeInTheDocument();
  });

  it('will render a legend with a heading', () => {
    const { container } = render(
      <Legend
        text="Have you changed your name?"
        classes="my-classes"
        isHeading={true}
      />
    );

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')?.textContent).toBe(
      'Have you changed your name?'
    );
  });

  it('will render a legend with a customised heading', () => {
    const { container } = render(
      <Legend
        text="Have you changed your name?"
        classes="my-classes"
        isHeading={true}
        headingClasses="my-classes"
      />
    );

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')?.classList).toContain('my-classes');
  });
});
