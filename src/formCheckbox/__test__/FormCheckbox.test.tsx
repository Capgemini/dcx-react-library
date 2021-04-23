import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FormCheckbox } from '../FormCheckbox';

describe('FormCheckbox', () => {
  it('should render a checkbox', () => {
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

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
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
        itemProps={{ 'data-testid': 'checkbox-container' }}
      />
    );
    const container: HTMLElement = screen.getByTestId('checkbox-container');
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
        itemProps={{ 'data-testid': 'checkbox-container' }}
      />
    );
    const container: HTMLElement = screen.getByTestId('checkbox-container');
    const getById = queryByAttribute.bind(null, 'id');

    expect(getById(container, 'myId')).not.toBeChecked();
    expect(getById(container, 'myId')).toBeDisabled();
  });

  it('should render a checkbox with aria label match name if unspecified', () => {
    const handleChange = jest.fn();

    render(
      <FormCheckbox
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

  it('should render hint text above input', () => {
    const handleChange = jest.fn();

    render(
      <FormCheckbox
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        onChange={handleChange}
        hint={{
          id: 'my-hint',
          text: 'my hint',
        }}
        ariaDescribedBy="my-hint-item-hint"
      />
    );

    expect(screen.getByText('my hint')).toBeInTheDocument();
    expect(
      screen.getByLabelText('my label').getAttribute('aria-describedby')
    ).toBe('my-hint-item-hint');
  });

  it('should render hint text below input', () => {
    const handleChange = jest.fn();
    render(
      <FormCheckbox
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        onChange={handleChange}
        hint={{ text: 'my hint', position: 'below' }}
      />
    );

    expect(screen.getByText('my hint')).toBeInTheDocument();
  });

  it('should not render conditional input field by default', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormCheckbox
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        onChange={handleChange}
        defaultChecked={false}
        conditional={{
          name: 'conditional-reveal',
          label: 'conditional label',
          type: 'text',
          className: 'classes',
          groupClassName: 'group-classes',
          id: 'conditional-id',
          inputClassName: 'input-classes',
          inputId: 'input-id',
          labelClassName: 'label-classes',
        }}
      />
    );

    expect(container.querySelector('#conditional-id')).not.toBeInTheDocument();
  });

  it('should render conditional input field when checkbox is checked', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormCheckbox
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        onChange={handleChange}
        defaultChecked={true}
        conditional={{
          name: 'conditional-reveal',
          label: 'conditional label',
          type: 'text',
          className: 'classes',
          groupClassName: 'group-classes',
          id: 'conditional-id',
          inputClassName: 'input-classes',
          inputId: 'input-id',
          labelClassName: 'label-classes',
        }}
      />
    );

    fireEvent['click'](screen.getByLabelText('my label'));

    expect(container.querySelector('#conditional-id')).toBeInTheDocument();
  });
});
