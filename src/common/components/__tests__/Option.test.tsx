import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Option } from '../Option';

describe('Option', () => {
  it('will render an option component', () => {
    render(<Option label="option-label" value="option-value" />);

    expect(screen.getByRole('option')).toBeInTheDocument();
  });

  it('will render an option component with a label', () => {
    render(<Option label="option-label" value="option-value" />);

    expect(screen.getByText('option-label')).toBeInTheDocument();
  });

  it('will render an option component with a value', () => {
    render(<Option label="option-label" value="option-value" />);

    expect(screen.getByRole('option').getAttribute('value')).toBe(
      'option-value'
    );
  });

  it('will render an option element with a specific class name', () => {
    render(
      <Option
        label="option-label"
        value="option-value"
        className="my-class-name"
      />
    );

    expect(screen.getByRole('option').getAttribute('class')).toBe(
      'my-class-name'
    );
  });

  it('will render a disabled option element', () => {
    render(
      <Option label="option-label" value="option-value" disabled={true} />
    );

    expect(screen.getByRole('option')).toBeDisabled();
  });

  it('will render an option element with an id', () => {
    const { container } = render(
      <Option label="option-label" value="option-value" id="myId" />
    );

    expect(container.querySelector('#myId')).toBeInTheDocument();
  });
});
