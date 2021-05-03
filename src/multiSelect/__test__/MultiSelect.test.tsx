import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MultiSelect } from '../MultiSelect';
import { OptionProps } from '../../common';

describe('MultiSelect', () => {
  it('should render a multi select', () => {
    const options: OptionProps[] = [];

    const { container } = render(<MultiSelect id="my-id" options={options} />);

    expect(container.querySelector('#my-id')).toBeInTheDocument();
  });

  it('should render a multi select with optional props', () => {
    const options: OptionProps[] = [];

    const { container } = render(
      <MultiSelect className="my-class" id="my-id" options={options} />
    );

    expect(container.querySelector('#my-id')).toHaveProperty('className');
    expect(container.querySelector('#my-id')).toHaveProperty('id');

    expect(container.querySelector('#my-id')?.getAttribute('class')).toBe(
      'my-class'
    );
    expect(container.querySelector('#my-id')?.getAttribute('id')).toBe('my-id');
  });

  it('should render a styled selected list', () => {
    const options: OptionProps[] = [];

    render(
      <MultiSelect
        options={options}
        selectedListStyle={{
          backgroundColor: 'red',
        }}
      />
    );

    const style: CSSStyleDeclaration = window.getComputedStyle(
      screen.getByRole('list')
    );

    expect(style.backgroundColor).toBe('red');
  });

  it('should not render a list of selected options', () => {
    const options: OptionProps[] = [
      { label: 'option 1 label', value: 'option 1 value' },
      { label: 'option 2 label', value: 'option 2 value' },
      { label: 'option 3 label', value: 'option 3 value' },
    ];

    render(<MultiSelect id="my-id" options={options} />);

    expect(screen.getByRole('list').childNodes.length).toBe(0);
  });

  it('should render a list of 3 selected options', () => {
    const options: OptionProps[] = [
      { label: 'option 1 label', value: 'option 1 value', selected: true },
      { label: 'option 2 label', value: 'option 2 value', selected: true },
      { label: 'option 3 label', value: 'option 3 value', selected: true },
    ];

    render(<MultiSelect id="my-id" options={options} />);

    expect(screen.getAllByRole('listitem').length).toBe(3);
    expect(screen.getByRole('list').childNodes.length).toBeGreaterThan(0);
  });

  it('should call onClickHandler of multi select', () => {
    const onClickHandler = jest.fn();
    const options: OptionProps[] = [];

    render(<MultiSelect options={options} onClick={onClickHandler} />);

    userEvent.click(screen.getByRole('list'));

    expect(onClickHandler).toHaveBeenCalled();
  });

  it('should call onFocusHandler of first multi select selected option', () => {
    const onFocusHandler = jest.fn();
    const options: OptionProps[] = [
      {
        id: 'myId-1',
        label: 'option 1 label',
        value: 'option 1 value',
        selected: true,
      },
    ];

    render(<MultiSelect options={options} onFocus={onFocusHandler} />);

    screen.getByRole('button').focus();

    expect(onFocusHandler).toHaveBeenCalled();
  });

  it('should call onRemoveHandler of first multi select selected option', () => {
    const onRemoveHandler = jest.fn();
    const options: OptionProps[] = [
      {
        id: 'myId-1',
        label: 'option 1 label',
        value: 'option 1 value',
        selected: true,
      },
      {
        id: 'myId-2',
        label: 'option 2 label',
        value: 'option 2 value',
        selected: true,
      },
      {
        id: 'myId-3',
        label: 'option 3 label',
        value: 'option 3 value',
        selected: true,
      },
    ];

    render(<MultiSelect options={options} onRemove={onRemoveHandler} />);

    userEvent.click(
      within(screen.getAllByRole('listitem')[0]).getByRole('button')
    );

    expect(onRemoveHandler).toHaveBeenCalled();
    expect(screen.getAllByRole('listitem').length).toBe(2);
  });

  it('should not call onRemoveHandler of first multi select selected option', () => {
    const onRemoveHandler = jest.fn();
    const options: OptionProps[] = [
      {
        id: 'myId-1',
        label: 'option 1 label',
        value: 'option 1 value',
        selected: true,
      },
      {
        id: 'myId-2',
        label: 'option 2 label',
        value: 'option 2 value',
        selected: true,
      },
      {
        id: 'myId-3',
        label: 'option 3 label',
        value: 'option 3 value',
        selected: true,
      },
    ];

    render(<MultiSelect options={options} />);

    userEvent.click(
      within(screen.getAllByRole('listitem')[0]).getByRole('button')
    );

    expect(onRemoveHandler).not.toHaveBeenCalled();
  });
});
