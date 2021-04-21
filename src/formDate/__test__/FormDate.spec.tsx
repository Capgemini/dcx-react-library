import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormDate } from '../FormDate';

const DummyCustomLabel = ({ value }: any) => <h1>{value}</h1>;

describe('FormInput', () => {
  it('should render the component', () => {
    const { container } = render(<FormDate dateFormat="dd/mm/yyyy" />);
    expect(container).toBeInTheDocument();
  });

  it('should render the component if the date are uppercase', () => {
    const { container } = render(<FormDate dateFormat="DD/MM/YYYY" />);
    const lblDate: any = container.querySelectorAll('label');
    expect(lblDate[0].getAttribute('for')).toBe('dd');
    expect(lblDate[1].getAttribute('for')).toBe('mm');
    expect(lblDate[2].getAttribute('for')).toBe('yyyy');
  });

  it('should render the class container', () => {
    const { container } = render(
      <FormDate dateFormat="dd/mm/yyyy" inputContainerClass="containerClass" />
    );
    const parent: any = container.querySelector('div');
    expect(parent.getAttribute('class')).toBe('containerClass');
  });

  it('should render dd/mm/yyyy inputs in the order specified by the user', () => {
    const { container } = render(<FormDate dateFormat="dd/mm/yyyy" />);
    const lblDate: any = container.querySelectorAll('label');
    expect(lblDate[0].getAttribute('for')).toBe('dd');
    expect(lblDate[1].getAttribute('for')).toBe('mm');
    expect(lblDate[2].getAttribute('for')).toBe('yyyy');
  });

  it('should render yyyy/mm/dd inputs in the order specified by the user', () => {
    const { container } = render(<FormDate dateFormat="yyyy/mm/dd" />);
    const lblDate: any = container.querySelectorAll('label');
    expect(lblDate[0].getAttribute('for')).toBe('yyyy');
    expect(lblDate[1].getAttribute('for')).toBe('mm');
    expect(lblDate[2].getAttribute('for')).toBe('dd');
  });

  it('should render yy/mm/dd inputs in the order specified by the user', () => {
    const { container } = render(<FormDate dateFormat="yy/mm/dd" />);
    const lblDate: any = container.querySelectorAll('label');
    expect(lblDate[0].getAttribute('for')).toBe('yy');
    expect(lblDate[1].getAttribute('for')).toBe('mm');
    expect(lblDate[2].getAttribute('for')).toBe('dd');
  });

  it('should render an invalid format if the the format is not valid', () => {
    //@ts-ignore
    render(<FormDate dateFormat="ssss/mm/dd" />);
    const invalidValue: any = screen.getByText('invalid format');
    expect(invalidValue).toBeInTheDocument();
  });

  it('should render the label for each value if provided', () => {
    render(
      <FormDate
        dateFormat="dd/mm/yyyy"
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
        dateFormat="dd/mm/yyyy"
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
});
