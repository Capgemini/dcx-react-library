import React from 'react';
import { render, screen, within } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FormSelect, FormSelectProps } from '../FormSelect';
import { OptionProps } from '../../common/components/Option';

const DummySelect = ({
  selectClassName,
  labelClassName,
  containerClassName,
  name,
  id,
  label,
  labelProps,
  onChange,
  hint,
  error,
  errorMessage,
  errorMessageClassName,
  errorMessageId,
  errorMessageVisuallyHidden,
  options = [{ label: 'option1', value: 'value1' }],
  optionGroups,
  nullOption = undefined,
  value,
}: FormSelectProps) => (
  <FormSelect
    selectClassName={selectClassName}
    labelClassName={labelClassName}
    containerClassName={containerClassName}
    id={id}
    name={name}
    options={options}
    onChange={onChange}
    label={label}
    labelProps={labelProps}
    hint={hint}
    error={error}
    errorMessage={errorMessage}
    errorMessageClassName={errorMessageClassName}
    errorMessageId={errorMessageId}
    errorMessageVisuallyHidden={errorMessageVisuallyHidden}
    optionGroups={optionGroups}
    nullOption={nullOption}
    value={value}
  />
);

describe('FormSelect', () => {
  it('should render an empty formSelect component', () => {
    render(<FormSelect />);

    const formSelect = screen.getByRole('combobox');
    expect(formSelect).toBeInTheDocument();
  });

  it('should display the formSelect component', () => {
    render(<DummySelect id="myId" name="the name" />);
    const formSelect = screen.getByRole('combobox');
    expect(formSelect).toBeInTheDocument();
  });

  it('should contain a select element inside fromSelect', () => {
    render(<DummySelect id="myId" name="the name" />);
    const formSelect = screen.getByRole('combobox');
    const selectElement = screen.getByRole('option');
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

  it('should display an option element with a specific class name', () => {
    render(<DummySelect id="myId" selectClassName="my-class-name" />);

    expect(screen.getByRole('combobox').getAttribute('class')).toBe(
      'my-class-name'
    );
  });

  it('should render an option with specific label text', () => {
    render(
      <DummySelect
        id="myId"
        name="the name"
        label="myLabel"
        labelProps={{ className: 'myclassName' }}
      />
    );

    const optionElement = screen.getByRole('option');
    expect(optionElement).toBeInTheDocument();
    expect(within(optionElement).getByText('option1')).toBeTruthy();
  });

  it('should display a label if provided', () => {
    render(
      <DummySelect
        id="myId"
        name="the name"
        label="myLabel"
        labelProps={{ className: 'myclassName' }}
      />
    );
    const label = screen.getByLabelText('myLabel');
    expect(label).toBeInTheDocument();
  });

  it('should display hint text if provided', () => {
    render(
      <DummySelect id="myId" name="the name" hint={{ text: 'my hint' }} />
    );

    expect(screen.getByText('my hint')).toBeInTheDocument();
  });

  it('should display error text if provided', () => {
    render(
      <DummySelect
        id="myId"
        name="the name"
        error={{
          text: 'oops!! we have an error',
          visuallyHiddenText: {
            text: 'Error:',
          },
        }}
      />
    );

    expect(screen.getByText('oops!! we have an error')).toBeInTheDocument();
    expect(screen.getByText('Error:')).toBeInTheDocument();
  });

  it('should render a disabled option', () => {
    render(
      <DummySelect
        id="myId"
        name="the name"
        options={[{ label: 'option1', value: 'value1', disabled: true }]}
      />
    );
    const selectElement = screen.getByRole('option');
    expect(selectElement).toBeDisabled();
  });

  it('should render options with different classNames', () => {
    const options: OptionProps[] = [
      { label: 'option1', value: 'value1', className: 'className1' },
      { label: 'option2', value: 'value2', className: 'className2' },
      { label: 'option3', value: 'value3', className: 'className3' },
      { label: 'option4', value: 'value4', className: 'className4' },
    ];
    const { container } = render(
      <DummySelect id="myId" name="the name" options={options} />
    );

    expect(container.getElementsByClassName('className1').length).toBe(1);
    expect(container.getElementsByClassName('className2').length).toBe(1);
    expect(container.getElementsByClassName('className3').length).toBe(1);
    expect(container.getElementsByClassName('className4').length).toBe(1);
  });

  it('should call the onChange event if provided', () => {
    const handleChange = jest.fn();

    const options: OptionProps[] = [
      {
        label: 'option1',
        value: 'value1',
        id: 'custom-option-1',
      },
      { label: 'option2', value: 'value2' },
      { label: 'option3', value: 'value3' },
      { label: 'option4', value: 'value4' },
    ];
    const { container } = render(
      <DummySelect
        id="myId"
        name="the name"
        options={options}
        onChange={handleChange}
      />
    );
    fireEvent.selectOptions(screen.getByRole('combobox'), 'value1');

    expect(container.querySelector('#custom-option-1')).toBeInTheDocument();
    expect(handleChange).toHaveBeenCalled();
  });

  it('should not call the onChange event if it is not provided', () => {
    const handleChange = jest.fn();

    const options: OptionProps[] = [
      {
        label: 'option1',
        value: 'value1',
        id: 'custom-option-1',
      },
      { label: 'option2', value: 'value2' },
      { label: 'option3', value: 'value3' },
      { label: 'option4', value: 'value4' },
    ];
    const { container } = render(
      <DummySelect id="myId" name="the name" options={options} />
    );
    fireEvent.selectOptions(screen.getByRole('combobox'), 'value1');

    expect(container.querySelector('#custom-option-1')).toBeInTheDocument();
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should render a group of options', () => {
    render(
      <DummySelect
        id="myId"
        name="the name"
        optionGroups={[
          {
            label: 'group1',
            options: [
              { label: 'option1', value: 'value1' },
              { label: 'option2', value: 'value2' },
              { label: 'option3', value: 'value3' },
            ],
          },
        ]}
      />
    );
    const selectElement = screen.getByRole('group');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement.getAttribute('label')).toBe('group1');

    const formSelect = screen.getByRole('combobox');
    expect(formSelect).toBeInTheDocument();
  });

  it('should render a number of options within a group', () => {
    render(
      <DummySelect
        id="myId"
        name="the name"
        optionGroups={[
          {
            label: 'group1',
            options: [
              { label: 'option1', value: 'value1' },
              { label: 'option2', value: 'value2' },
              { label: 'option3', value: 'value3' },
            ],
            displayCount: true,
          },
        ]}
      />
    );
    const selectElement = screen.getByRole('group');
    expect(selectElement.getAttribute('label')).toBe('group1 (3)');
  });

  it('should allow to pass a null option be selected by default', () => {
    const options: OptionProps[] = [
      { label: 'option1', value: 'value1' },
      { label: 'option2', value: 'value2' },
      { label: 'option3', value: 'value3' },
      { label: 'option4', value: 'value4' },
    ];
    render(
      <DummySelect
        id="myId"
        name="the name"
        options={options}
        nullOption="Select..."
      />
    );
    const formSelect = screen.getByRole('combobox');
    expect(formSelect).toHaveDisplayValue('Select...');
  });

  it('should allow a value prop in order for a programmatic change', () => {
    const options: OptionProps[] = [
      { label: 'option1', value: 'value1' },
      { label: 'option2', value: 'value2' },
      { label: 'option3', value: 'value3' },
      { label: 'option4', value: 'value4' },
    ];

    render(
      <DummySelect
        id="myId"
        name="the name"
        options={options}
        nullOption="Select..."
        value="value4"
      />
    );

    const formSelect = screen.getByRole('combobox');
    expect(formSelect).toHaveDisplayValue('option4');
  });

  it('should allow a value prop default value', () => {
    const options: OptionProps[] = [
      { label: 'option1', value: 'value1' },
      { label: 'option2', value: 'value2' },
      { label: 'option3', value: 'value3' },
      { label: 'option4', value: 'value4' },
    ];

    render(
      <DummySelect
        id="myId"
        name="the name"
        options={options}
        nullOption="Select..."
        value=""
      />
    );

    const formSelect = screen.getByRole('combobox');
    expect(formSelect).toHaveDisplayValue('Select...');
  });

  it('should not allow a value prop for a non-existent option', () => {
    const options: OptionProps[] = [
      { label: 'option1', value: 'value1' },
      { label: 'option2', value: 'value2' },
      { label: 'option3', value: 'value3' },
      { label: 'option4', value: 'value4' },
    ];

    render(
      <DummySelect
        id="myId"
        name="the name"
        options={options}
        nullOption="Select..."
        value="value5"
      />
    );

    const formSelect = screen.getByRole('combobox');
    expect(formSelect).toHaveDisplayValue('Select...');
  });

  it('should allow to pass optionProps as just an array of string and set the same value for the label and value', () => {
    const options: string[] = ['option1', 'option2', 'option3'];
    render(<DummySelect id="myId" name="the name" options={options} />);
    const formSelect: any = screen.getAllByRole('option');

    expect(formSelect[0].value).toBe('option1');
    expect(formSelect[0].text).toBe('option1');
    expect(screen.getByLabelText('option1')).toBeInTheDocument();

    expect(formSelect[1].value).toBe('option2');
    expect(formSelect[1].text).toBe('option2');
    expect(screen.getByLabelText('option2')).toBeInTheDocument();

    expect(formSelect[2].value).toBe('option3');
    expect(formSelect[2].text).toBe('option3');
    expect(screen.getByLabelText('option3')).toBeInTheDocument();
  });

  it('should have a label with a specific classname', () => {
    render(
      <DummySelect
        id="myId"
        name="the name"
        label="myLabel"
        labelClassName="labelClass"
        labelProps={{ 'data-testid': 'label' }}
      />
    );
    const label = screen.getByTestId('label');
    expect(label).toHaveClass('labelClass');
  });

  it('should have the label and the select in the same div container', () => {
    const { container } = render(
      <DummySelect
        id="myId"
        name="the name"
        containerClassName="containerClass"
        labelProps={{ 'data-testid': 'label' }}
      />
    );
    const containerClass = container.querySelector('.containerClass');
    expect(containerClass).toBeInTheDocument();
  });

  it('should display an error', () => {
    render(
      <DummySelect
        id="myId"
        name="the name"
        containerClassName="containerClass"
        errorMessage="errorMessage"
      />
    );
    const errorMessage = screen.getByText('errorMessage');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should have a container error classname if the errorMessage is passed', () => {
    render(
      <DummySelect
        id="myId"
        name="the name"
        containerClassName="containerClass"
        errorMessage="errorMessage"
        errorMessageClassName="errorMessageClass"
      />
    );
    const errorMessage = screen.getByText('errorMessage');
    expect(errorMessage.className).toBe('errorMessageClass');
  });
});
