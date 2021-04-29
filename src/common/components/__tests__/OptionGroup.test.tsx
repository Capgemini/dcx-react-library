import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OptionGroup } from '../OptionGroup';
import { OptionProps } from '../Option';

type GroupTestProps = {
  label?: string;
  options?: OptionProps[];
  displayCount?: boolean;
};

const DummyGroup = ({
  label = 'myGroupLabel',
  options = [{ label: 'option1', value: 'value1' }],
  displayCount,
}: GroupTestProps) => (
  <OptionGroup label={label} options={options} displayCount={displayCount} />
);

describe('Option Group', () => {
  it('will render an option group component', () => {
    render(<DummyGroup />);

    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('will render an option group component with a label', () => {
    render(<DummyGroup />);

    expect(screen.getByRole('group').getAttribute('label')).toBe(
      'myGroupLabel'
    );
  });

  it('will render an option group component with a label with the number of options available', () => {
    render(<DummyGroup displayCount={true} />);

    expect(screen.getByRole('group').getAttribute('label')).toBe(
      'myGroupLabel (1)'
    );
  });

  it('will render an option group component with options', () => {
    render(<DummyGroup />);

    const optionEl: HTMLElement = screen.getByRole('option');

    expect(optionEl).toBeInTheDocument();
    expect(optionEl.getAttribute('value')).toBe('value1');
    expect(within(optionEl).getByText('option1')).toBeDefined();
  });
});
