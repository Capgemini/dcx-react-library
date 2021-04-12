import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorPosition, FormInput } from '../FormInput';
import userEvent from '@testing-library/user-event';

const DummyComponent = ({ pos, displayErrorOnLoad = true }: any) => {
  const [value, setValue] = React.useState('');
  const [isValid, setValid] = React.useState<boolean | string>('');
  const handleInputChange = (evt: any) => setValue(evt.currentTarget.value);
  const handleValidity = (valid: boolean) => {
    setValid(valid);
  };
  return (
    <>
      <FormInput
        name="password"
        type="text"
        value={value}
        errorPosition={pos}
        onChange={handleInputChange}
        isValid={handleValidity}
        displayErrorOnLoad={displayErrorOnLoad}
        errorProps={{
          'data-testid': 'error-container',
        }}
        validation={{
          rule: {
            type: 'password',
            minLength: 8,
            uppercase: 1,
            numbers: 1,
            matchesOneOf: ['@', '_', '-', '.', '!'],
          },
          message: 'is invalid',
        }}
      />
      <label data-testid="check-validity">{isValid.toString()}</label>
    </>
  );
};

describe('FormInput', () => {
  it('should display the formInput content', () => {
    const handleChange = jest.fn();
    render(
      <FormInput
        name="password"
        type="text"
        value="test"
        onChange={handleChange}
        inputProps={{
          placeholder: 'enter your email',
        }}
      />
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should display the formInput properties', () => {
    const handleChange = jest.fn();
    render(
      <FormInput
        name="password"
        type="text"
        value="@_-bddcd6A"
        onChange={handleChange}
        prefix={<div data-testid="prefix">prefix</div>}
      />
    );
    const input: any = screen.getByRole('textbox');
    expect(input.name).toBe('password');
    expect(input.type).toBe('text');
    expect(input.value).toBe('@_-bddcd6A');
    expect(input).toBeInTheDocument();
  });

  it('should display the formInput suffix content', () => {
    const handleChange = jest.fn();
    render(
      <FormInput
        name="password"
        type="text"
        value="test"
        onChange={handleChange}
        suffix={<div data-testid="suffix">suffix</div>}
      />
    );
    expect(screen.getByTestId('suffix')).toBeInTheDocument();
  });

  it('should display the formInput error', () => {
    render(<DummyComponent pos={ErrorPosition.BOTTOM} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'TEST VALUE');
    expect(screen.getByRole('error')).toBeInTheDocument();
  });

  it('should display the formInput error message', () => {
    render(<DummyComponent pos={ErrorPosition.BOTTOM} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'TEST VALUE');
    expect(screen.getByRole('error')).toContainHTML('is invalid');
  });

  it('should display the formInput error message on top', () => {
    const { container } = render(<DummyComponent pos={ErrorPosition.TOP} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'TEST VALUE');
    let error: any;
    if (container.firstChild && container.firstChild.firstChild)
      error = container.firstChild.firstChild.childNodes[0];
    expect(error.innerHTML).toBe('is invalid');
  });

  it('should display the formInput error message on the bottom', () => {
    const { container } = render(<DummyComponent pos={ErrorPosition.BOTTOM} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'TEST VALUE');
    let error: any;
    if (container.firstChild && container.firstChild.lastChild)
      error = container.firstChild.lastChild.childNodes[0];
    expect(error.innerHTML).toBe('is invalid');
  });

  it('should return validation false on startup if the validation rules are not met', () => {
    render(<DummyComponent pos={ErrorPosition.BOTTOM} />);
    const validLabel = screen.getByTestId('check-validity');
    expect(validLabel.innerHTML).toBe('false');
    const input = screen.getByRole('textbox');
    userEvent.type(input, '@_-bddcd6A');
    expect(validLabel.innerHTML).toBe('true');
  });

  it('should not display the error message on load', () => {
    render(
      <DummyComponent pos={ErrorPosition.BOTTOM} displayErrorOnLoad={false} />
    );
    expect(() => screen.getByText('is invalid')).toThrow(
      'Unable to find an element'
    );
  });
});
