import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {FormInput} from '../FormInput';
afterEach(cleanup);

describe('FormInput', () => {
  it('should display the formInput content', () => {
    const handleChange = jest.fn();
    const handleValidity = jest.fn();
    const {getByTestId} = render(
      <FormInput
        name="password"
        type="text"
        value="test"
        onChange={handleChange}
        isValid={handleValidity}
        inputProps={{
          placeholder: 'enter your email',
        }}
        errorProps={{
          style: {fontSize: '10px', color: 'red', fontWeight: 'bold'},
        }}
        validation={{
          rule: {
            type: 'password',
            minLength: 8,
            uppercase: 1,
            numbers: 1,
            matchesOneOf: ['@', '_', '-', '.', '!'],
          },
          message: 'the value have to be float and more then 100',
        }}
      />,
    );
    expect(getByTestId('form-input')).toBeInTheDocument();
  })
  it('should display the formInput prefix content', () => {
    const handleChange = jest.fn();
    const handleValidity = jest.fn();
    const {getByTestId} = render(
      <FormInput
        name="password"
        type="text"
        value="@_-bddcd6A"
        onChange={handleChange}
        isValid={handleValidity}
        validation={{
          rule: {
            type: 'password',
            minLength: 8,
            uppercase: 1,
            numbers: 1,
            matchesOneOf: ['@', '_', '-', '.', '!'],
          },
          message: 'the value have to be float and more then 100',
        }}
        prefix={<div>prefix</div>}
      />,
    );
    const input = getByTestId('form-input-input');
    expect(input.getAttribute('name')).toBe('password');
    expect(input.getAttribute('type')).toBe('text');
    expect(input.getAttribute('value')).toBe('@_-bddcd6A');
    expect(input).toBeInTheDocument();
  })

  it('should display the formInput prefix content', () => {
    const handleChange = jest.fn();
    const handleValidity = jest.fn();
    const {getByTestId} = render(
      <FormInput
        name="password"
        type="text"
        value="test"
        onChange={handleChange}
        isValid={handleValidity}
        validation={{
          rule: {
            type: 'password',
            minLength: 8,
            uppercase: 1,
            numbers: 1,
            matchesOneOf: ['@', '_', '-', '.', '!'],
          },
          message: 'the value have to be float and more then 100',
        }}
        suffix={<div>suffix</div>}
      />,
    );
    expect(getByTestId('form-input-suffix')).toBeInTheDocument();
  })

  it('should display the formInput error', () => {
    const changeValue = jest.fn();
    const handleValidity = jest.fn();
    const {getByTestId} = render(
      <FormInput
        name="password"
        type="text"
        value="test"
        onChange={changeValue}
        isValid={handleValidity}
        validation={{
          rule: {
            type: 'password',
            minLength: 8,
            uppercase: 1,
            numbers: 1,
            matchesOneOf: ['@', '_', '-', '.', '!'],
          },
          message: 'the value have to be float and more then 100',
        }}
      />,
    );
    const input = getByTestId('form-input-input');
    fireEvent.change(input, {target: {value: 'TEST VALUE'}});

    expect(getByTestId('form-input-error')).toBeInTheDocument();
  })
  it('should display the formInput error message', () => {
    const changeValue = jest.fn()
    const handleValidity = jest.fn()
    const {getByTestId} = render(
      <FormInput
        name="password"
        type="text"
        value="test"
        onChange={changeValue}
        isValid={handleValidity}
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
      />,
    );
    const input = getByTestId('form-input-input');
    fireEvent.change(input, {target: {value: 'TEST VALUE'}});

    expect(getByTestId('form-input-error')).toContainHTML('is invalid');
  })
})
