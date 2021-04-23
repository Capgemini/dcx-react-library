import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { DateComponent } from '../Date';
describe('Date component', () => {
  it('should render the component', () => {
    const { container } = render(
      <DateComponent
        htmlFor="test"
        value="test"
        handleChange={jest.fn()}
        name="name"
      />
    );
    expect(container).toBeInTheDocument();
  });
  it('should render a customLabel', () => {
    render(
      <DateComponent
        value="test"
        htmlFor="test"
        handleChange={jest.fn()}
        name="name"
        customLabel={<div data-testid="custom"></div>}
      />
    );
    expect(screen.getByTestId('custom')).toBeInTheDocument();
  });
  it('should render custom classes', () => {
    const { container } = render(
      <DateComponent
        htmlFor="test"
        value="test"
        handleChange={jest.fn()}
        name="name"
        label="label"
        classNameInput="inputClass"
        classNameSpan="spanClass"
        classNameLabel="classLabel"
      />
    );
    const input = container.querySelector('input');
    const span = container.querySelector('span');
    const label = container.querySelector('label');
    expect(input?.getAttribute('class')).toBe('inputClass');
    expect(span?.getAttribute('class')).toBe('spanClass');
    expect(label?.getAttribute('class')).toBe('classLabel');
  });

  it('should allow a prepopulated value', () => {
    render(
      <DateComponent
        htmlFor="test"
        value="10"
        handleChange={jest.fn()}
        name="name"
        label="label"
        classNameInput="inputClass"
        classNameSpan="spanClass"
        classNameLabel="classLabel"
      />
    );
    const input: any = screen.getByRole('spinbutton');
    expect(input.value).toBe('10');
  });

  it('should render a disable input', () => {
    render(
      <DateComponent
        htmlFor="test"
        value="10"
        handleChange={jest.fn()}
        name="name"
        label="label"
        classNameInput="inputClass"
        classNameSpan="spanClass"
        classNameLabel="classLabel"
        disabled={true}
      />
    );
    const input: any = screen.getByRole('spinbutton');
    expect(input.disabled).toBeTruthy();
  });
});
