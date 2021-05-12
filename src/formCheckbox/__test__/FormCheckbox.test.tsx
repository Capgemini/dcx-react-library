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

  it('should set checkbox as checked if selected is added as a prop', () => {
    const handleChange = jest.fn();

    render(
      <FormCheckbox
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        selected={true}
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

  it('should render a checkbox with aria-data-controls and aria-labelledby as empty if unspecified', () => {
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

    expect(
      screen.getByLabelText('my label').getAttribute('data-aria-controls')
    ).toBe('');
    expect(
      screen.getByLabelText('my label').getAttribute('aria-describedby')
    ).toBe('');
  });

  it('should render a checkbox with aria-data-controls and aria-describedby as specified', () => {
    const handleChange = jest.fn();

    render(
      <FormCheckbox
        id="myId"
        value="choice 1"
        label="my label"
        name="group1"
        onChange={handleChange}
        ariaDataControls="myAriaDataControl"
        ariaDescribedBy="myAriaDescribedBy"
      />
    );

    expect(
      screen.getByLabelText('my label').getAttribute('data-aria-controls')
    ).toBe('myAriaDataControl');
    expect(
      screen.getByLabelText('my label').getAttribute('aria-describedby')
    ).toBe('myAriaDescribedBy');
  });

  it('should render hint text below input by default', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormCheckbox
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        onChange={handleChange}
        labelProps={{
          id: 'myId',
        }}
        hint={{
          id: 'myId',
          text: 'my hint',
        }}
      />
    );

    const firstItem = container.firstChild?.childNodes[0];
    const secondItem = container.firstChild?.childNodes[1];
    const thirdItem = container.firstChild?.childNodes[2];

    expect(screen.getByText('my hint')).toBeInTheDocument();
    expect(container.querySelector('input#myId')).toStrictEqual(firstItem);
    expect(container.querySelector('label#myId')).toStrictEqual(secondItem);
    expect(container.querySelector('div#myId')).toStrictEqual(thirdItem);
  });

  it('should render hint text above input', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormCheckbox
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        labelProps={{
          id: 'myId',
        }}
        onChange={handleChange}
        hint={{
          id: 'myId',
          text: 'my hint',
        }}
        hintPosition="above"
      />
    );

    const firstItem = container.firstChild?.childNodes[0];
    const secondItem = container.firstChild?.childNodes[1];
    const thirdItem = container.firstChild?.childNodes[2];

    expect(screen.getByText('my hint')).toBeInTheDocument();
    expect(container.querySelector('div#myId')).toStrictEqual(firstItem);
    expect(container.querySelector('input#myId')).toStrictEqual(secondItem);
    expect(container.querySelector('label#myId')).toStrictEqual(thirdItem);
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
        selected={false}
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
        selected={true}
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
