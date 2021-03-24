import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FormCheckbox } from '../FormCheckbox';

describe('FormCheckbox', () => {
  it('should render a checkbox', () => {
    render(
      <FormCheckbox id="myId" name="group1" value="choice 1" label="my label" />
    );

    expect(screen.getByRole('form-checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText('my label').getAttribute('value')).toBe(
      'choice 1'
    );
  });

  it('should call on change', () => {
    const handleChange = jest.fn();

    render(
      <FormCheckbox
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
      <FormCheckbox id="myId" name="group1" value="choice 1" label="my label" />
    );

    fireEvent['click'](screen.getByLabelText('my label'));

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should set checkbox as checked if defaultChecked is added as a prop', () => {
    const handleChange = jest.fn();

    render(
      <FormCheckbox
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        defaultChecked={true}
        onChange={handleChange}
      />
    );
    const container: HTMLElement = screen.getByRole('form-checkbox');
    const getById = queryByAttribute.bind(null, 'id');

    expect(getById(container, 'myId')).toBeChecked();
    expect(getById(container, 'myId')).not.toBeDisabled();
  });

  it('should set checkbox as disabled if specified', () => {
    const handleChange = jest.fn();

    render(
      <FormCheckbox
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        disabled={true}
        onChange={handleChange}
      />
    );
    const container: HTMLElement = screen.getByRole('form-checkbox');
    const getById = queryByAttribute.bind(null, 'id');

    expect(getById(container, 'myId')).not.toBeChecked();
    expect(getById(container, 'myId')).toBeDisabled();
  });

  it('should render hint text', () => {
    render(
      <FormCheckbox
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
