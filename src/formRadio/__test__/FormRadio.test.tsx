import React from 'react';
import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FormRadio } from '../FormRadio';

describe('FormRadio', () => {
  it('should render a radio', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        name="group 1"
        onChange={handleChange}
      />
    );

    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('should render a radio with a sibling label', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        labelProps={{
          id: 'my-label',
        }}
        name="group1"
        onChange={handleChange}
      />
    );

    const label: HTMLElement | null = container.querySelector('#my-label');

    expect(screen.getByLabelText('my label')).toBeInTheDocument();
    expect(container.querySelector('input[type=radio]')).not.toBeNull();
    expect(label?.querySelector('input[type=radio]')).toBeNull();
  });

  it('should render a nested radio within  label', () => {
    const { container } = render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        labelProps={{
          id: 'my-label',
        }}
        name="group1"
        nested={true}
      />
    );

    const label: HTMLElement | null = container.querySelector('#my-label');

    expect(screen.getByLabelText('my label')).toBeInTheDocument();
    expect(container.querySelector('input[type=radio]')).not.toBeNull();
    expect(label?.querySelector('input[type=radio]')).not.toBeNull();
  });

  it('should render a radio with a value', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        name="group1"
        onChange={handleChange}
      />
    );

    expect(screen.getByLabelText('my label').getAttribute('value')).toBe(
      'choice 1'
    );
  });

  it('should render a radio with aria label match name if unspecified', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        name="group1"
        onChange={handleChange}
      />
    );

    expect(screen.getByLabelText('my label').getAttribute('aria-label')).toBe(
      'group1'
    );
  });

  it('should render a radio with an id', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        name="group1"
        onChange={handleChange}
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
        name="group1"
        onChange={handleChange}
      />
    );

    fireEvent['click'](screen.getByLabelText('my label'));

    expect(handleChange).toHaveBeenCalled();
  });

  it('should set radio as checked if specified', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        selected={true}
        name="group1"
        onChange={handleChange}
        itemProps={{ id: 'radio-container' }}
      />
    );

    const radio: HTMLElement | null = container.querySelector('#myId');

    expect(radio).toBeChecked();
    expect(radio).not.toBeDisabled();
  });

  it('should set radio as disabled if specified', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        name="group1"
        disabled={true}
        onChange={handleChange}
        itemProps={{ id: 'radio-container' }}
      />
    );

    const radio: HTMLElement | null = container.querySelector('#myId');

    expect(radio).not.toBeChecked();
    expect(radio).toBeDisabled();
  });

  it('should render hint text', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        hint={{
          id: 'my-hint',
          text: 'my hint',
        }}
        name="group1"
        ariaDescribedBy="my-hint-item-hint"
        onChange={handleChange}
      />
    );

    expect(screen.getByText('my hint')).toBeInTheDocument();
    expect(
      screen.getByLabelText('my label').getAttribute('aria-describedby')
    ).toBe('my-hint-item-hint');
  });

  it('should not render an input field', () => {
    const handleChange = jest.fn();
    const handlerConditional = jest.fn();

    const { container } = render(
      <FormRadio
        value="choice 1"
        label="my label"
        id="radioId"
        conditional={{
          name: 'input-field-name',
          label: 'label',
          type: 'text',
          value: '',
          id: 'my-input',
          onChange: handlerConditional,
        }}
        name="group1"
        onChange={handleChange}
      />
    );

    expect(container.querySelector('#my-input')).not.toBeInTheDocument();
  });

  it('should render an input field when selected', () => {
    const handleChange = jest.fn();
    const handlerConditional = jest.fn();

    const { container } = render(
      <FormRadio
        id="choice-1"
        value="choice 1"
        label="my label"
        conditional={{
          name: 'input-field-name',
          label: 'label',
          type: 'text',
          value: '',
          id: 'my-input',
          onChange: handlerConditional,
        }}
        name="group1"
        selected={true}
        onChange={handleChange}
      />
    );
    fireEvent['click'](screen.getByLabelText('my label'));

    expect(container.querySelector('#my-input')).toBeInTheDocument();
  });
});
