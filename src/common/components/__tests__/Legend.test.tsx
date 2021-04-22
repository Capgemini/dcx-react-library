import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Legend } from '../Legend';

describe('Legend', () => {
  it('will render a legend', () => {
    render(
      <Legend text="Have you changed your name?" className="my-className" />
    );

    expect(screen.getByText('Have you changed your name?')).toBeInTheDocument();
  });

  it('will render a legend with a heading', () => {
    const { container } = render(
      <Legend
        text="Have you changed your name?"
        className="my-className"
        heading={{
          priority: 1,
        }}
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
        className="my-className"
        heading={{
          priority: 1,
          className: 'my-className',
        }}
      />
    );

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')?.classList).toContain('my-className');
  });

  it('will render a legend with a customised heading of priority 2', () => {
    const { container } = render(
      <Legend
        text="Have you changed your name?"
        className="my-className"
        heading={{
          priority: 2,
          className: 'my-className',
        }}
      />
    );

    expect(container.querySelector('h2')).toBeInTheDocument();
    expect(container.querySelector('h2')?.classList).toContain('my-className');
  });

  it('will render a legend with a customised heading of priority 1 where given an incorrect priority', () => {
    const { container } = render(
      <Legend
        text="Have you changed your name?"
        className="my-className"
        heading={{
          priority: 8,
          className: 'my-className',
        }}
      />
    );

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')?.classList).toContain('my-className');
  });

  it('will render a legend with a customised heading of priority 1 where given an sub 1 priority', () => {
    const { container } = render(
      <Legend
        text="Have you changed your name?"
        className="my-className"
        heading={{
          priority: 0,
          className: 'my-className',
        }}
      />
    );

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')?.classList).toContain('my-className');
  });
});
