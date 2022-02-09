import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from '../Label';

describe('Label', () => {
  it('will render label component', () => {
    const { container } = render(
      <>
        <input id="id" />
        <Label
          label="label txt"
          htmlFor="id"
          labelProperties={{
            'aria-labelledby': 'id',
            'aria-label': 'some-value',
          }}
          className="someClassName"
        />
      </>
    );

    const label: Element = screen.getByLabelText('label txt');
    expect(label).toBeInTheDocument();
    expect(container.querySelector('.someClassName')).not.toBeNull();
    expect(
      container.querySelector('.someClassName')?.getAttribute('aria-labelledby')
    ).toBe('id');
    expect(container.querySelector('.someClassName')).not.toBeNull();
    expect(
      container.querySelector('.someClassName')?.getAttribute('aria-label')
    ).toBe('some-value');
  });

  it('will not render a label if no label is provided', () => {
    render(
      <>
        <input id="id" />
        <Label
          htmlFor="id"
          labelProperties={{
            'aria-labelledby': 'id',
            'aria-label': 'some-value',
          }}
          className="someClassName"
        />
      </>
    );

    expect(() => screen.getByLabelText('label txt')).toThrowError();
  });
});
