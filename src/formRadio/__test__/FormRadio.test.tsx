import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FormRadio } from '../FormRadio';

describe('FormRadio', () => {
  it('should render a radio', () => {
    render(
      <FormRadio id="myId" name="group1" value="choice 1" label="my label" />
    );

    expect(screen.getByRole('form-radio')).toBeInTheDocument();
    expect(screen.getByLabelText('my label').getAttribute('value')).toBe(
      'choice 1'
    );
  });

  it('should call on change', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        onChange={handleChange}
      />
    );

    fireEvent['click'](screen.getByLabelText('my label'));

    expect(handleChange).toHaveBeenCalled();
  });

  it('should not call on change if undefined', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio id="myId" name="group1" value="choice 1" label="my label" />
    );

    fireEvent['click'](screen.getByLabelText('my label'));

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should set radio as checked if specified', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        selected={true}
        onChange={handleChange}
      />
    );
    const container: HTMLElement = screen.getByRole('form-radio');
    const getById = queryByAttribute.bind(null, 'id');

    expect(getById(container, 'myId')).toBeChecked();
    expect(getById(container, 'myId')).not.toBeDisabled();
  });

  it('should set radio as disabled if specified', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        disabled={true}
        onChange={handleChange}
      />
    );
    const container: HTMLElement = screen.getByRole('form-radio');
    const getById = queryByAttribute.bind(null, 'id');

    expect(getById(container, 'myId')).not.toBeChecked();
    expect(getById(container, 'myId')).toBeDisabled();
  });

  it('should render hint text', () => {
    render(
      <FormRadio
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        hintText="my hint"
      />
    );

    expect(screen.getByText('my hint')).toBeInTheDocument();
  });
});
