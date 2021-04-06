import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormSelect } from '../FormSelect';

describe('FormSelect', () => {
  let formSelect: HTMLElement;
  let selectElement: HTMLElement;
  let optionElement: HTMLElement;

  beforeEach(() => {
    render(
      <FormSelect
        id="myId"
        name="the name"
        options={[{ label: 'option1', value: 'value1' }]}
      />
    );

    formSelect = screen.getByRole('form-select');
    selectElement = screen.getByRole('combobox');
    optionElement = screen.getByRole('option');
  });

  it('should display the fromSelect component', () => {
    expect(formSelect).toBeInTheDocument();
  });

  it('should contain a select element inside fromSelect', () => {
    expect(formSelect).toContainElement(selectElement);
  });

  it('should display a select element', () => {
    expect(selectElement).toBeInTheDocument();
  });

  it('should contain main select attributes', () => {
    expect(selectElement).toHaveAttribute('id', 'myId');
    expect(selectElement).toHaveAttribute('name', 'the name');
  });

  it('should contain option element inside selectElement', () => {
    expect(selectElement).toContainElement(optionElement);
  });

  it('should display option element', () => {
    expect(optionElement).toBeInTheDocument();
  });
});
