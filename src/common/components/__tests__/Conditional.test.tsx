import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Conditional } from '../Conditional';

describe('Conditional', () => {
  it('should render a conditional input', () => {
    render(
      <Conditional
        inputId="conditional-email"
        name="email"
        label="Email"
        type="text"
      />
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox').getAttribute('name')).toBe('email');
    expect(screen.getByRole('textbox').getAttribute('type')).toBe('text');
    expect(screen.getByRole('textbox').getAttribute('id')).toBe(
      'conditional-email'
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('should render a conditional input with conditional properties', () => {
    const onChangeHandler = jest.fn();
    const { container } = render(
      <Conditional
        name="email"
        label="Email"
        type="text"
        className="optional-class-name"
        groupClassName="optional-group-class-name"
        id="optional-id"
        inputClassName="optional-input-class-name"
        inputId="conditional-email"
        value="conditional-value"
        onChange={onChangeHandler}
      />
    );
    expect(
      container.getElementsByClassName('optional-class-name')
    ).toBeDefined();
    expect(
      container.getElementsByClassName('optional-group-class-name')
    ).toBeDefined();
    expect(container.querySelector('optional-id')).toBeDefined();
    expect(
      container.getElementsByClassName('optional-input-class-name')
    ).toBeDefined();
    expect(screen.getByRole('textbox').getAttribute('value')).toBe(
      'conditional-value'
    );
  });

  it('should render a conditional input with an onChange', () => {
    const onChangeHandler = jest.fn();
    render(
      <Conditional
        inputId="conditional-email"
        name="email"
        label="Email"
        type="text"
        value="conditional-value"
        onChange={onChangeHandler}
      />
    );
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'my@aol.com');

    expect(onChangeHandler).toHaveBeenCalled();
  });

  it('should render a conditional input without an onChange', () => {
    const onChangeHandler = jest.fn();
    render(
      <Conditional
        inputId="conditional-email"
        name="email"
        label="Email"
        type="text"
        value="conditional-value"
      />
    );
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'my@aol.com');

    expect(onChangeHandler).not.toHaveBeenCalled();
  });
});
