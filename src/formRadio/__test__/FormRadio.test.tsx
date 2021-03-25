import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FormRadio } from '../FormRadio';

describe('FormRadio', () => {
  it('should render a radio', () => {
    render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        inputProps={{ name: 'group1' }}
      />
    );

    expect(screen.getByRole('form-radio')).toBeInTheDocument();
  });

  it('should render a radio with a label', () => {
    render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        inputProps={{ name: 'group1' }}
      />
    );

    expect(screen.getByLabelText('my label')).toBeInTheDocument();
  });

  it('should render a radio with a value', () => {
    render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        inputProps={{ name: 'group1' }}
      />
    );

    expect(screen.getByLabelText('my label').getAttribute('value')).toBe(
      'choice 1'
    );
  });
  it('should render a radio with aria label match name if unspecified', () => {
    render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        inputProps={{ name: 'group1' }}
      />
    );

    expect(screen.getByLabelText('my label').getAttribute('aria-label')).toBe(
      'group1'
    );
  });

  it('should render a radio with an id', () => {
    const { container } = render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        inputProps={{ name: 'group1' }}
      />
    );

    expect(container.querySelector('#myId')).toBeInTheDocument();
  });

  it('should call on change', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        inputProps={{ name: 'group1', onChange: handleChange }}
      />
    );

    fireEvent['click'](screen.getByLabelText('my label'));

    expect(handleChange).toHaveBeenCalled();
  });

  it('should not call on change if undefined', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        inputProps={{ name: 'group1' }}
      />
    );

    fireEvent['click'](screen.getByLabelText('my label'));

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should set radio as checked if specified', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        selected={true}
        inputProps={{ name: 'group1', onChange: handleChange }}
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
        value="choice 1"
        label="my label"
        disabled={true}
        inputProps={{ name: 'group1', onChange: handleChange }}
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
        value="choice 1"
        label="my label"
        hint={{
          id: 'my-hint',
          text: 'my hint',
        }}
        inputProps={{ name: 'group1' }}
        ariaDescribedBy="my-hint-item-hint"
      />
    );

    expect(screen.getByText('my hint')).toBeInTheDocument();
    expect(
      screen.getByLabelText('my label').getAttribute('aria-describedby')
    ).toBe('my-hint-item-hint');
  });
});
