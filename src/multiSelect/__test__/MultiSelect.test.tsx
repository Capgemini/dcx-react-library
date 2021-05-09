import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MultiSelect, MultiSelectOption } from '../MultiSelect';
import { act } from '@testing-library/react-hooks';

describe('MultiSelect', () => {
  describe('when rendering the container', () => {
    it('should render a multi select', () => {
      const options: MultiSelectOption[] = [];

      const { container } = render(
        <MultiSelect id="my-id" selectOptions={options} />
      );

      expect(container.querySelector('#my-id')).toBeInTheDocument();
    });

    it('should render a multi select with optional props', () => {
      const options: MultiSelectOption[] = [];

      const { container } = render(
        <MultiSelect className="my-class" id="my-id" selectOptions={options} />
      );

      expect(container.querySelector('#my-id')).toHaveProperty('className');
      expect(container.querySelector('#my-id')).toHaveProperty('id');

      expect(container.querySelector('#my-id')?.getAttribute('class')).toBe(
        'my-class'
      );
      expect(container.querySelector('#my-id')?.getAttribute('id')).toBe(
        'my-id'
      );
    });

    it('should render a multi select with a hint', () => {
      const options: MultiSelectOption[] = [];

      const { container } = render(
        <MultiSelect
          id="my-id"
          selectOptions={options}
          hintText="hint text"
          hintClass="my-hint-class"
        />
      );

      expect(container.querySelector('#my-id')).toBeInTheDocument();

      expect(screen.getByText('hint text')).toBeInTheDocument();
      expect(screen.getByText('hint text').getAttribute('class')).toBe(
        'my-hint-class'
      );
    });
  });

  describe('when rendering the selected list', () => {
    it('should render an input field', () => {
      const options: MultiSelectOption[] = [];

      render(
        <MultiSelect
          selectOptions={options}
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

    it('should render a list of 3 selected options', () => {
      const options: MultiSelectOption[] = [
        { label: 'option 1 label', value: 'option 1 value', selected: true },
        { label: 'option 2 label', value: 'option 2 value', selected: true },
        { label: 'option 3 label', value: 'option 3 value', selected: true },
      ];

      render(<MultiSelect id="my-id" selectOptions={options} />);

      expect(screen.getAllByRole('listitem').length).toBe(3);
    });

    it('should call onFocusHandler of first multi select selected option', () => {
      const onFocusHandler = jest.fn();
      const options: MultiSelectOption[] = [
        {
          id: 'myId-1',
          label: 'option 1 label',
          value: 'option 1 value',
          selected: true,
        },
      ];

      render(<MultiSelect selectOptions={options} onFocus={onFocusHandler} />);

      screen.getAllByRole('button')[0].focus();

      expect(onFocusHandler).toHaveBeenCalled();
    });

    it('should call onRemoveHandler of first multi select selected option', () => {
      const onRemoveHandler = jest.fn();
      const options: MultiSelectOption[] = [
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

      render(
        <MultiSelect selectOptions={options} onRemove={onRemoveHandler} />
      );

      userEvent.click(
        within(screen.getAllByRole('listitem')[0]).getByRole('button')
      );

      expect(onRemoveHandler).toHaveBeenCalled();
      expect(onRemoveHandler).toHaveBeenCalledWith('option 1 value');

      expect(screen.getAllByRole('listitem').length).toBe(2);
    });

    it('should not call onRemoveHandler of first multi select selected option', () => {
      const onRemoveHandler = jest.fn();
      const options: MultiSelectOption[] = [
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

      render(<MultiSelect selectOptions={options} />);

      userEvent.click(
        within(screen.getAllByRole('listitem')[0]).getByRole('button')
      );

      expect(onRemoveHandler).not.toHaveBeenCalled();
    });

    it('should render a list of 0 selected options', () => {
      const handlerRemoveAll = jest.fn();
      const options: MultiSelectOption[] = [
        { label: 'option 1 label', value: 'option 1 value', selected: true },
        { label: 'option 2 label', value: 'option 2 value', selected: true },
        { label: 'option 3 label', value: 'option 3 value', selected: true },
      ];

      render(
        <MultiSelect
          id="my-id"
          selectOptions={options}
          removeAllButtonClass="my-remove-all-class"
          onRemoveAll={handlerRemoveAll}
        />
      );

      expect(screen.getAllByRole('listitem').length).toBe(3);

      const removeAllEl: Element = screen.getAllByRole('button')[3];

      expect(removeAllEl).toBeInTheDocument();
      expect(removeAllEl.getAttribute('aria-label')).toBe('Remove all');
      expect(removeAllEl.getAttribute('class')).toBe('my-remove-all-class');

      expect(
        screen.getByRole('list').querySelectorAll('[role=listitem]').length
      ).toBe(3);

      fireEvent.click(removeAllEl);

      expect(
        screen.getByRole('list').querySelectorAll('[role=listitem]').length
      ).toBe(0);

      expect(handlerRemoveAll).toHaveBeenCalled();
    });

    it('should render a multi select without a removeAll handler', () => {
      const handlerRemoveAll = jest.fn();
      const options: MultiSelectOption[] = [
        { label: 'option 1 label', value: 'option 1 value', selected: true },
        { label: 'option 2 label', value: 'option 2 value', selected: true },
        { label: 'option 3 label', value: 'option 3 value', selected: true },
      ];

      render(
        <MultiSelect
          id="my-id"
          selectOptions={options}
          removeAllButtonClass="my-remove-all-class"
        />
      );

      expect(screen.getAllByRole('listitem').length).toBe(3);

      const removeAllEl: Element = screen.getAllByRole('button')[3];

      expect(removeAllEl).toBeInTheDocument();
      expect(removeAllEl.getAttribute('aria-label')).toBe('Remove all');
      expect(removeAllEl.getAttribute('class')).toBe('my-remove-all-class');

      expect(
        screen.getByRole('list').querySelectorAll('[role=listitem]').length
      ).toBe(3);

      fireEvent.click(removeAllEl);

      expect(
        screen.getByRole('list').querySelectorAll('[role=listitem]').length
      ).toBe(0);

      expect(handlerRemoveAll).not.toHaveBeenCalled();
    });
  });

  describe('when rendering the options list', () => {
    const options: MultiSelectOption[] = [
      {
        id: 'myId-1',
        label: 'option 1 label',
        value: 'option 1 value',
      },
      {
        id: 'myId-2',
        label: 'option 2 label',
        value: 'option 2 value',
      },
      {
        id: 'myId-3',
        label: 'option 3 label',
        value: 'option 3 value',
      },
      {
        id: 'myId-4',
        label: 'option 4 label',
        value: 'option 4 value',
        selected: true,
      },
      {
        id: 'myId-5',
        label: 'option 5 label',
        value: 'option 5 value',
        selected: true,
      },
    ];

    it('should render a input field for a combobox', () => {
      render(<MultiSelect selectOptions={options} />);

      expect(screen.getByRole('combobox'));
    });

    it('should not render any options', async () => {
      render(<MultiSelect selectOptions={options} />);

      jest.useFakeTimers('modern');
      const input = screen.getByRole('combobox');

      await act(() => userEvent.type(input, ''));
      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(screen.getAllByRole('list').length).toBe(1);
    });

    it('should render a combobox with 3 options', async () => {
      render(<MultiSelect selectOptions={options} />);

      jest.useFakeTimers('modern');
      const input = screen.getByRole('combobox');

      await act(() => userEvent.type(input, 'o'));
      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(
        within(screen.getAllByRole('list')[1]).getAllByRole('listitem')
      ).toBeDefined();
      expect(
        within(screen.getAllByRole('list')[1]).getAllByRole('listitem').length
      ).toBe(3);
    });

    it('should render a combobox with 1 options', async () => {
      render(
        <MultiSelect
          selectOptions={[
            ...options,
            {
              id: 'myId-6',
              label: 'unique',
              value: 'unique',
            },
          ]}
          searchDebounceMs={100}
        />
      );

      jest.useFakeTimers('modern');
      const input = screen.getByRole('combobox');

      await act(() => userEvent.type(input, 'u'));
      act(() => {
        jest.runAllTimers();
      });

      expect(
        within(screen.getAllByRole('list')[1]).getAllByRole('listitem')
      ).toBeDefined();
      expect(
        within(screen.getAllByRole('list')[1]).getAllByRole('listitem').length
      ).toBe(1);
    });

    it('should add a selected option to the selected list', async () => {
      const onSelectedHandler = jest.fn();

      render(
        <MultiSelect selectOptions={options} onSelect={onSelectedHandler} />
      );

      const input = screen.getByRole('combobox');

      jest.useFakeTimers('modern');
      await act(() => userEvent.type(input, 'o'));
      act(() => {
        jest.runAllTimers();
      });

      const liElements: HTMLElement[] = screen
        .getAllByRole('listitem')
        .filter(
          (listitem: HTMLElement) => listitem.textContent === 'option 1 label'
        );

      fireEvent.click(liElements[0]);

      expect(onSelectedHandler).toHaveBeenCalled();
      expect(onSelectedHandler).toHaveBeenCalledWith('option 1 value');
      expect(
        within(screen.getAllByRole('list')[0]).getAllByRole('listitem').length
      ).toBe(3);
    });

    it('should not add a selected option to the selected list', async () => {
      render(<MultiSelect selectOptions={options} />);

      const input = screen.getByRole('combobox');

      jest.useFakeTimers('modern');
      await act(() => userEvent.type(input, 'o'));
      act(() => {
        jest.runAllTimers();
      });

      const liElements: HTMLElement[] = screen
        .getAllByRole('listitem')
        .filter(
          (listitem: HTMLElement) => listitem.textContent === 'option 1 label'
        );

      liElements[0].innerHTML = 'wrong 1 label';

      fireEvent.click(liElements[0]);

      expect(
        within(screen.getAllByRole('list')[0]).getAllByRole('listitem').length
      ).toBe(2);
    });

    it('should call on updated', async () => {
      const onUpdateHandler = jest.fn();

      render(
        <MultiSelect selectOptions={options} onUpdate={onUpdateHandler} />
      );

      const input = screen.getByRole('combobox');

      jest.useFakeTimers('modern');
      await act(() => userEvent.type(input, 'o'));
      act(() => {
        jest.runAllTimers();
      });

      const liElements: HTMLElement[] = screen
        .getAllByRole('listitem')
        .filter(
          (listitem: HTMLElement) => listitem.textContent === 'option 1 label'
        );

      fireEvent.click(liElements[0]);

      const expected: MultiSelectOption[] = [
        {
          id: 'myId-4',
          label: 'option 4 label',
          value: 'option 4 value',
          selected: true,
        },
        {
          id: 'myId-5',
          label: 'option 5 label',
          value: 'option 5 value',
          selected: true,
        },
        {
          id: 'myId-1',
          label: 'option 1 label',
          value: 'option 1 value',
          selected: true,
        },
      ];

      expect(onUpdateHandler).toHaveBeenCalled();
      expect(onUpdateHandler).toHaveBeenCalledWith(expected);
      expect(
        within(screen.getAllByRole('list')[0]).getAllByRole('listitem').length
      ).toBe(3);
    });
  });
});
