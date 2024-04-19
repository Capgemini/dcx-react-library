import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MultiSelect } from '../MultiSelect';
import { MultiSelectOption } from '../Types';

describe('MultiSelect', () => {
  describe('when rendering the container', () => {
    it('should render a multi select', () => {
      const options: MultiSelectOption[] = [];

      const { container } = render(
        <MultiSelect id="my-id" selectOptions={options} />
      );

      expect(container.querySelector('#my-id')).toBeInTheDocument();
    });

    it('should render a input field for a combobox', () => {
      const options: MultiSelectOption[] = [];

      render(
        <MultiSelect
          selectOptions={options}
          inputProperties={{
            placeholder: 'my-placeholder',
            style: {
              border: 'solid 0px',
              padding: '3px 8px',
              margin: '2px 6px 2px 0px',
            },
          }}
        />
      );

      const input: Element = screen.getByRole('combobox');

      const style: CSSStyleDeclaration = window.getComputedStyle(
        screen.getByRole('combobox')
      );

      expect(input.getAttribute('placeholder')).toBe('my-placeholder');
      expect(style.border).toBe('0px solid');
      expect(style.padding).toBe('3px 8px');
      expect(style.margin).toBe('2px 6px 2px 0px');
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
        'dcx-hint my-hint-class'
      );
    });

    it('should have a 0 tabindex value by default', () => {
      const options: MultiSelectOption[] = [];

      render(<MultiSelect selectOptions={options} />);

      const input = screen.getByRole('combobox');
      expect(input.getAttribute('tabindex')).toBe('0');
    });

    it('should accept tabIndex attribute', () => {
      const options: MultiSelectOption[] = [];

      render(<MultiSelect selectOptions={options} tabIndex={1} />);

      const input = screen.getByRole('combobox');
      expect(input.getAttribute('tabindex')).toBe('1');
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
        screen.getAllByRole('presentation')[0]
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

    it('should call onFocusHandler of first multi select selected option', async () => {
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

      await act(() => screen.getAllByRole('button')[0].focus());

      expect(onFocusHandler).toHaveBeenCalled();
    });

    it('should call onRemoveHandler of first multi select selected option', async () => {
      const onRemoveHandler = jest.fn();
      const user = userEvent.setup();
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

      await user.click(
        within(screen.getAllByRole('listitem')[0]).getByRole('button')
      );

      expect(onRemoveHandler).toHaveBeenCalled();
      expect(onRemoveHandler).toHaveBeenCalledWith('option 1 value');

      expect(screen.getAllByRole('listitem').length).toBe(2);
    });

    it('should not call onRemoveHandler of first multi select selected option', async () => {
      const user = userEvent.setup();
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

      await user.click(
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
        screen
          .getAllByRole('presentation')[0]
          .querySelectorAll('[role=listitem]').length
      ).toBe(3);

      fireEvent.click(removeAllEl);

      expect(
        screen
          .getAllByRole('presentation')[0]
          .querySelectorAll('[role=listitem]').length
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
        screen
          .getAllByRole('presentation')[0]
          .querySelectorAll('[role=listitem]').length
      ).toBe(3);

      fireEvent.click(removeAllEl);

      expect(
        screen
          .getAllByRole('presentation')[0]
          .querySelectorAll('[role=listitem]').length
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

    it('should render a combobox with 3 options', async () => {
      const user = userEvent.setup();
      render(<MultiSelect selectOptions={options} />);

      const input = screen.getByRole('combobox');

      await user.type(input, 'o');

      expect(
        within(screen.getByRole('listbox')).getAllByRole('option')
      ).toBeDefined();
      expect(
        within(screen.getByRole('listbox')).getAllByRole('option').length
      ).toBe(3);
    });

    it('should render a combobox with 1 options', async () => {
      const user = userEvent.setup();

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

      const input = screen.getByRole('combobox');

      await user.type(input, 'u');

      expect(
        within(screen.getByRole('listbox')).getAllByRole('option')
      ).toBeDefined();

      await waitFor(() => {
        expect(
          within(screen.getByRole('listbox')).getAllByRole('option').length
        ).toBe(1);
      });
    });

    it('should add a selected option to the selected list', async () => {
      const onSelectedHandler = jest.fn();
      const user = userEvent.setup();
      render(
        <MultiSelect selectOptions={options} onSelect={onSelectedHandler} />
      );

      const input = screen.getByRole('combobox');

      await user.type(input, 'o');

      const liElements: HTMLElement[] = screen
        .getAllByRole('option')
        .filter(
          (listitem: HTMLElement) => listitem.textContent === 'option 1 label'
        );

      fireEvent.click(liElements[0]);

      expect(onSelectedHandler).toHaveBeenCalled();
      expect(onSelectedHandler).toHaveBeenCalledWith('option 1 value');
      expect(
        within(screen.getAllByRole('presentation')[1]).getAllByRole('listitem')
          .length
      ).toBe(3);
    });

    it('should not add a selected option to the selected list', async () => {
      const user = userEvent.setup();

      render(<MultiSelect selectOptions={options} />);

      const input = screen.getByRole('combobox');

      await user.type(input, 'o');
      const liElements: HTMLElement[] = screen
        .getAllByRole('option')
        .filter(
          (listitem: HTMLElement) => listitem.textContent === 'option 1 label'
        );

      liElements[0].innerHTML = 'wrong 1 label';

      fireEvent.click(liElements[0]);

      expect(
        within(screen.getAllByRole('presentation')[1]).getAllByRole('listitem')
          .length
      ).toBe(2);
    });

    it('should not call on selected', async () => {
      const user = userEvent.setup();

      const onSelectedHandler = jest.fn();

      render(<MultiSelect selectOptions={options} />);

      const input = screen.getByRole('combobox');

      await user.type(input, 'o');

      const liElements: HTMLElement[] = screen
        .getAllByRole('option')
        .filter(
          (listitem: HTMLElement) => listitem.textContent === 'option 1 label'
        );

      fireEvent.click(liElements[0]);

      expect(onSelectedHandler).not.toHaveBeenCalled();
      expect(
        within(screen.getAllByRole('presentation')[1]).getAllByRole('listitem')
          .length
      ).toBe(3);
    });
  });
});
