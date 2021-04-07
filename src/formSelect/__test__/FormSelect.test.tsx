import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormSelect } from '../FormSelect';

type props = {
  name?: string;
  id?: string;
};

const DummySelect = ({ name, id }: props) => {
  const [value, setValue] = React.useState('');

  return (
    <FormSelect
      id={id}
      name={name}
      value={value}
      options={[{ label: 'option1', value: 'value1' }]}
      onChange={evt => setValue(evt.currentTarget.value)}
    />
  );
};

describe('FormSelect', () => {
  it('should display the fromSelect component', () => {
    render(<DummySelect id="myId" name="the name" />);
    const formSelect = screen.getByRole('form-select');
    expect(formSelect).toBeInTheDocument();
  });

  it('should contain a select element inside fromSelect', () => {
    render(<DummySelect id="myId" name="the name" />);
    const formSelect = screen.getByRole('form-select');
    const selectElement = screen.getByRole('combobox');
    expect(formSelect).toContainElement(selectElement);
  });

  it('should display a select element', () => {
    render(<DummySelect id="myId" name="the name" />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
  });

  it('should contain main select attributes', () => {
    render(<DummySelect id="myId" name="the name" />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveAttribute('id', 'myId');
    expect(selectElement).toHaveAttribute('name', 'the name');
  });

  it('should contain option element inside selectElement', () => {
    render(<DummySelect id="myId" name="the name" />);
    const selectElement = screen.getByRole('combobox');
    const optionElement = screen.getByRole('option');
    expect(selectElement).toContainElement(optionElement);
  });

  it('should display option element', () => {
    render(<DummySelect id="myId" name="the name" />);
    const optionElement = screen.getByRole('option');
    expect(optionElement).toBeInTheDocument();
  });

  it('should contains default values for id and name', () => {
    render(<DummySelect />);
    const selectElementDefault = screen.getByRole('combobox');
    expect(selectElementDefault).toHaveAttribute('id', 'formSelect');
    expect(selectElementDefault).toHaveAttribute('name', 'formSelect');
  });
});
