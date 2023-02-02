import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormDate, reducer } from '../FormDate';
import userEvent from '@testing-library/user-event';

const DummyCustomLabel = ({ value }: any) => <h1>{value}</h1>;

const DummyPredefinedDate = ({ disabled = false }: any) => (
  <FormDate
    dateFormat="dd/mm/yyyy"
    handleValidity={jest.fn()}
    errorMessage="error date"
    displayError={true}
    yearProps={{
      customLabel: <DummyCustomLabel value="custom label" />,
    }}
    monthProps={{ label: 'Month' }}
    dayProps={{ label: 'Day' }}
    day="10"
    month="07"
    year="1982"
    disabled={disabled}
  />
);

const DummyDateComponent = ({ format = 'dd/mm/yyyy' }: any) => {
  const [isValid, setIsValid] = React.useState(false);
  const [date, setDate] = React.useState<number | null>(0);
  const [showError, setShowError] = React.useState(false);
  const handleValidity = (valid: boolean, date: number | null) => {
    setShowError(!valid);
    setIsValid(valid);
    setDate(date);
  };
  return (
    <>
      <FormDate
        handleValidity={(v, d) => handleValidity(v, d)}
        inputContainerClass={showError ? 'errorContainer' : ''}
        displayError={showError}
        errorMessage={showError ? 'Enter a valid date' : null}
        errorPosition="top"
        errorClass="error"
        dateFormat={format}
        inputClass="input"
        yearProps={{
          label: 'Year',
          classNameLabel: 'yearLabel',
          classNameSpan: 'span',
        }}
        monthProps={{
          label: 'Month',
          classNameLabel: 'yearLabel',
          classNameSpan: 'span',
        }}
        dayProps={{
          label: 'Day',
          classNameLabel: 'yearLabel',
          classNameSpan: 'span',
        }}
      />
      <pre data-testid="valid">{isValid.toString()}</pre>
      <pre data-testid="date">{JSON.stringify(date)}</pre>
    </>
  );
};

describe('FormInput', () => {
  it('should render the component', () => {
    const { container } = render(
      <FormDate dateFormat="dd/mm/yyyy" handleValidity={jest.fn()} />
    );
    expect(container).toBeInTheDocument();
  });

  it('should render the component if the date are uppercase', () => {
    const { container } = render(
      <FormDate dateFormat="DD/MM/YYYY" handleValidity={jest.fn()} />
    );
    const lblDate: any = container.querySelectorAll('label');
    expect(lblDate[0].getAttribute('for')).toBe('day');
    expect(lblDate[1].getAttribute('for')).toBe('month');
    expect(lblDate[2].getAttribute('for')).toBe('year');
  });

  it('should render the class container', () => {
    const { container } = render(
      <FormDate
        dateFormat="dd/mm/yyyy"
        inputContainerClass="containerClass"
        handleValidity={jest.fn()}
      />
    );
    const parent: any = container.querySelector('div');
    expect(parent.getAttribute('class')).toBe('containerClass');
  });

  it('should render the correct input classes when provided', () => {
    const { container } = render(
      <FormDate
        dateFormat="dd/mm/yyyy"
        handleValidity={jest.fn()}
        inputClass="input"
        yearProps={{
          classNameInput: 'year-input',
        }}
        monthProps={{
          classNameInput: 'month-input',
        }}
        dayProps={{
          classNameInput: 'day-input',
        }}
      />
    );

    const year: any = container.querySelector('input[name="year"]');
    const month: any = container.querySelector('input[name="month"]');
    const day: any = container.querySelector('input[name="day"]');

    expect(year.getAttribute('class')).toBe('year-input input');
    expect(month.getAttribute('class')).toBe('month-input input');
    expect(day.getAttribute('class')).toBe('day-input input');
  });

  it('should render dd/mm/yyyy inputs in the order specified by the user', () => {
    const { container } = render(
      <FormDate dateFormat="dd/mm/yyyy" handleValidity={jest.fn()} />
    );
    const lblDate: any = container.querySelectorAll('label');
    expect(lblDate[0].getAttribute('for')).toBe('day');
    expect(lblDate[1].getAttribute('for')).toBe('month');
    expect(lblDate[2].getAttribute('for')).toBe('year');
  });

  it('should render yyyy/mm/dd inputs in the order specified by the user', () => {
    const { container } = render(
      <FormDate dateFormat="yyyy/mm/dd" handleValidity={jest.fn()} />
    );
    const lblDate: any = container.querySelectorAll('label');
    expect(lblDate[0].getAttribute('for')).toBe('year');
    expect(lblDate[1].getAttribute('for')).toBe('month');
    expect(lblDate[2].getAttribute('for')).toBe('day');
  });

  it('should render yy/mm/dd inputs in the order specified by the user', () => {
    const { container } = render(
      <FormDate dateFormat="yy/mm/dd" handleValidity={jest.fn()} />
    );
    const lblDate: any = container.querySelectorAll('label');
    expect(lblDate[0].getAttribute('for')).toBe('year');
    expect(lblDate[1].getAttribute('for')).toBe('month');
    expect(lblDate[2].getAttribute('for')).toBe('day');
  });

  it('should render an invalid format if the the format is not valid', () => {
    //@ts-ignore
    render(<FormDate dateFormat="ssss/mm/dd" handleValidity={jest.fn()} />);
    const invalidValue: any = screen.getByText('invalid format');
    expect(invalidValue).toBeInTheDocument();
  });

  it('should render the label for each value if provided', () => {
    render(
      <FormDate
        dateFormat="dd/mm/yyyy"
        handleValidity={jest.fn()}
        yearProps={{ label: 'Year' }}
        monthProps={{ label: 'Month' }}
        dayProps={{ label: 'Day' }}
      />
    );
    const yearSpan: any = screen.getByText('Year');
    const monthSpan: any = screen.getByText('Month');
    const daySpan: any = screen.getByText('Day');
    expect(yearSpan).toBeInTheDocument();
    expect(monthSpan).toBeInTheDocument();
    expect(daySpan).toBeInTheDocument();
  });

  it('should render the optional properties for the labels', () => {
    const { container } = render(
      <FormDate
        dateFormat="dd/mm/yy"
        handleValidity={jest.fn()}
        yearProps={{
          label: 'Year',
          classNameLabel: 'yearLabel',
          classNameSpan: 'span',
        }}
        monthProps={{ label: 'Month' }}
        dayProps={{ label: 'Day' }}
      />
    );
    const yearSpan: any = screen.getByText('Year');
    const monthSpan: any = screen.getByText('Month');
    const daySpan: any = screen.getByText('Day');
    expect(yearSpan.getAttribute('class')).toBe('span');
    expect(monthSpan.getAttribute('class')).toBeNull();
    expect(daySpan.getAttribute('class')).toBeNull();
    const lblDate: any = container.querySelectorAll('label');
    expect(lblDate[2].getAttribute('class')).toBe('yearLabel');
    expect(lblDate[0].getAttribute('class')).toBeNull();
    expect(lblDate[1].getAttribute('class')).toBeNull();
  });

  it('should render a custom label', () => {
    render(
      <FormDate
        dateFormat="dd/mm/yyyy"
        handleValidity={jest.fn()}
        yearProps={{
          customLabel: <DummyCustomLabel value="custom label" />,
        }}
        monthProps={{ label: 'Month' }}
        dayProps={{ label: 'Day' }}
      />
    );
    const customLbl: any = screen.getByText('custom label');
    expect(customLbl).toBeInTheDocument();
  });

  it('should display an error message if the date is not valid', async () => {
    const user = userEvent.setup();
    render(
      <FormDate
        dateFormat="dd/mm/yyyy"
        handleValidity={jest.fn()}
        errorMessage="error date"
        displayError={true}
        yearProps={{
          customLabel: <DummyCustomLabel value="custom label" />,
        }}
        monthProps={{ label: 'Month' }}
        dayProps={{ label: 'Day' }}
      />
    );
    const input = screen.getAllByRole('textbox');
    await user.type(input[0], '29');
    await user.type(input[0], '07');
    await user.type(input[0], '19');
    const errorMsg = screen.getByText('error date');
    expect(errorMsg).toBeInTheDocument();
  });

  it('should be a valid date', async () => {
    const user = userEvent.setup();
    render(<DummyDateComponent />);
    const input = screen.getAllByRole('textbox');
    await user.type(input[0], '29');
    await user.type(input[1], '07');
    await user.type(input[2], '1982');
    const valid = screen.getByTestId('valid');
    expect(valid.innerHTML).toBe('true');
  });

  it('should return the same state if the action is not valid', () => {
    const initialState = {
      day: '07',
      month: '29',
      year: '1982',
    };
    const action = {
      type: 'setSomething',
    };
    //@ts-ignore
    const state = reducer(initialState, action);
    expect(JSON.stringify(state)).toContain(JSON.stringify(initialState));
  });

  it('should return a new state the action is valid', () => {
    const action = {
      type: 'setYear',
      value: '1990',
    };
    //@ts-ignore
    const state = reducer(null, action);
    expect(JSON.stringify(state)).toContain(
      JSON.stringify({
        day: undefined,
        month: undefined,
        year: '1990',
      })
    );
  });

  it('should allow a prepopulated values', () => {
    render(<DummyPredefinedDate />);
    const input: any = screen.getAllByRole('textbox');
    expect(input[0].value).toBe('10');
    expect(input[1].value).toBe('07');
    expect(input[2].value).toBe('1982');
  });

  it('should disable all the input', () => {
    render(<DummyPredefinedDate disabled={true} />);
    const input: any = screen.getAllByRole('textbox');
    expect(input[0].disabled).toBeTruthy();
    expect(input[1].disabled).toBeTruthy();
    expect(input[2].disabled).toBeTruthy();
  });

  it('should allow only numbers', async () => {
    const user = userEvent.setup();
    render(<DummyDateComponent />);
    const input = screen.getAllByRole('textbox');
    await user.type(input[0], 'h');
    await user.type(input[1], 'b');
    await user.type(input[2], 'c');
    expect(input[0].innerHTML).toBe('');
    expect(input[1].innerHTML).toBe('');
    expect(input[2].innerHTML).toBe('');
  });
});
