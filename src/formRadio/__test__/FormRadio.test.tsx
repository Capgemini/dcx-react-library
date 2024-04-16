import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormRadio } from '../FormRadio';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

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

  it('should not render a radio with aria label match name if unspecified', () => {
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

    expect(screen.getByLabelText('my label').getAttribute('aria-label')).toBeNull();
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

  it('should call on change', async () => {
    const user = userEvent.setup();
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

    await act(() => user.click(screen.getByLabelText('my label')));

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
          position: 'above',
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
        }}
        name="group1"
        onChange={handleChange}
      />
    );

    expect(container.querySelector('#my-input')).not.toBeInTheDocument();
  });

  it('should render an input field when selected', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
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
        }}
        name="group1"
        selected={true}
        onChange={handleChange}
      />
    );
    await user.click(screen.getByLabelText('my label'));

    expect(container.querySelector('#my-input')).toBeInTheDocument();
  });

  it('should style the radio label', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        labelProps={{
          id: 'my-label',
        }}
        labelClassName="my-label-class"
        name="group1"
        onChange={handleChange}
        nested={true}
      />
    );

    const label: any = container.querySelector('#my-label');

    expect(label.className).toBe('my-label-class');
  });

  it('should style the item', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        name="group1"
        disabled={true}
        onChange={handleChange}
        itemProps={{ id: 'radio-item' }}
        itemClassName="my-radio-class"
      />
    );

    const radio: any = container.querySelector('#radio-item');

    expect(radio.className).toBe('my-radio-class');
  });

  it('should style the input', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormRadio
        id="myId"
        value="choice 1"
        label="my label"
        name="group1"
        disabled={true}
        onChange={handleChange}
        inputProps={{ id: 'input-item' }}
        inputClassName="my-input-class"
      />
    );

    const input: any = container.querySelector('#input-item');

    expect(input.className).toBe('my-input-class');
  });
});
