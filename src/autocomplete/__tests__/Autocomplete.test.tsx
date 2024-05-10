import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Autocomplete, AutoCompleteErrorPosition } from '../';
import userEvent from '@testing-library/user-event';
import * as hooks from '../../common/utils/clientOnly';

const firstSearch = [
  'Papaya',
  'Persimmon',
  'Paw Paw',
  'Prickly Pear',
  'Peach',
  'Pomegranate',
  'Pineapple',
];
const secondSearch = ['Persimmon', 'Peach'];
const DummyAutoComplete = () => {
  const handleOnChange = (value: string) => {
    switch (value) {
      case 'p':
        setServerOptions(firstSearch);
        break;
      case 'pe':
        setServerOptions(secondSearch);
        break;
      default:
        setServerOptions(['no results']);
    }
  };
  const [serverOptions, setServerOptions] = React.useState<string[]>([]);
  return (
    <Autocomplete
      options={serverOptions}
      onSelected={() => {}}
      hintText="search the list of fruits dynamically"
      onChange={handleOnChange}
      debounceMs={100}
      notFoundText=" "
    />
  );
};

describe('Autocomplete', () => {
  beforeAll(() => {
    window.HTMLLIElement.prototype.scrollIntoView = jest.fn();
  });

  it('should display multiselect if progresive enhancement and multiselect is true', () => {
    //@ts-ignore
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => false);
    render(
      <Autocomplete
        options={['daniele', 'isaac']}
        selectProps={{
          selectClassName: '',
          containerClassName: '',
          labelClassName: '',
        }}
        multiSelect
      />
    );
    const formSelect: any = screen.getByRole('combobox');
    expect(formSelect.name).toBe('multiSelect');
    expect(formSelect).toBeInTheDocument();
  });

  it('should select the default value if progressive enhancement is enable', () => {
    //@ts-ignore
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => false);
    render(
      <Autocomplete options={['daniele', 'isaac']} defaultValue="isaac" />
    );
    const option: any = screen.getByRole('option', { name: 'isaac' });
    expect(option.selected).toBe(true);
  });

  it('should allow to specify a containerClass name ', () => {
    const { container } = render(
      <Autocomplete
        options={['daniele', 'isaac']}
        containerClassName="containerClass"
      />
    );
    const containerClass = container.querySelector('.containerClass');
    expect(containerClass).toBeInTheDocument();
  });

  it('should allow to specify a label text ', () => {
    render(
      <Autocomplete
        options={['daniele', 'isaac']}
        labelText="labelText"
        labelClassName="labelClass"
      />
    );
    const label: any = screen.getByText('labelText');
    expect(label.className).toBe('labelClass');
  });

  it('should allow to specify a label className', () => {
    render(
      <Autocomplete
        options={['daniele', 'isaac']}
        labelText="labelText"
        labelClassName="labelClass"
      />
    );
    const label: any = screen.getByText('labelText');
    expect(label).toBeInTheDocument();
  });

  it('should allow to specify a label id', () => {
    render(
      <Autocomplete
        options={['abc', 'xyz']}
        labelText="labelText"
        labelClassName="labelClass"
        labelProps={{ id: 'labelid' }}
      />
    );
    const label: any = screen.getByText('labelText');
    expect(label.id).toBe('labelid');
  });

  it('should display an error', () => {
    render(
      <Autocomplete
        options={['daniele', 'isaac']}
        labelText="labelText"
        labelClassName="labelClass"
        errorMessageText="errorMessageText"
        errorMessageClassName="errorMessageClass"
        errorId="errorId"
        errorPosition={AutoCompleteErrorPosition.AFTER_HINT}
      />
    );
    const label: any = screen.getByText('errorMessageText');
    expect(label.className).toBe('dcx-error-message errorMessageClass');
    expect(label.id).toBe('errorId');
    expect(label).toBeInTheDocument();
  });

  it('should display an error after the label', () => {
    render(
      <Autocomplete
        options={['daniele', 'isaac']}
        labelText="labelText"
        labelClassName="labelClass"
        errorMessageText="errorMessageText"
        errorMessageClassName="errorMessageClass"
        errorId="errorId"
        errorPosition={AutoCompleteErrorPosition.AFTER_LABEL}
      />
    );
    const label: any = screen.getByText('errorMessageText');
    expect(label.className).toBe('dcx-error-message errorMessageClass');
    expect(label.id).toBe('errorId');
    expect(label).toBeInTheDocument();
  });

  it('should display an error before the label', () => {
    render(
      <Autocomplete
        options={['daniele', 'isaac']}
        labelText="labelText"
        labelClassName="labelClass"
        errorMessageText="errorMessageText"
        errorMessageClassName="errorMessageClass"
        errorId="errorId"
        errorPosition={AutoCompleteErrorPosition.BEFORE_LABEL}
      />
    );
    const label: any = screen.getByText('errorMessageText');
    expect(label.className).toBe('dcx-error-message errorMessageClass');
    expect(label.id).toBe('errorId');
    expect(label).toBeInTheDocument();
  });

  it('should allow to specify an id for the input', () => {
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => true);
    render(<Autocomplete options={['daniele', 'isaac']} id="myId" />);
    const input: any = screen.getByRole('combobox');
    expect(input.id).toBe('myId');
  });

  it('should allow to specify an id for the select in case of progressive enhnancment', () => {
    //@ts-ignore
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => false);
    render(<Autocomplete options={['daniele', 'isaac']} id="myId" />);
    const select: any = screen.getByRole('combobox');
    expect(select.id).toBe('myId');
  });

  it('should display select if progresive enhancement', () => {
    //@ts-ignore
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => false);

    render(
      <Autocomplete
        options={['daniele', 'isaac']}
        selectProps={{
          selectClassName: '',
          containerClassName: '',
          labelClassName: '',
        }}
      />
    );
    const formSelect: any = screen.getByRole('combobox');
    expect(formSelect.name).toBe('select');
    expect(formSelect).toBeInTheDocument();
  });

  it('should display the formInput content', () => {
    //@ts-ignore
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => true);
    render(<Autocomplete options={['daniele', 'isaac']} />);

    const input: any = screen.getByRole('combobox');
    expect(input.name).toBe('autocompleteSearch');
    expect(input.type).toBe('text');
    expect(input.value).toBe('');
    expect(input).toBeInTheDocument();
  });

  it('should display the formInput default value', () => {
    render(
      <Autocomplete options={['daniele', 'isaac']} defaultValue="daniele" />
    );

    const input: any = screen.getByRole('combobox');
    expect(input.name).toBe('autocompleteSearch');
    expect(input.type).toBe('text');
    expect(input.value).toBe('daniele');
    expect(input).toBeInTheDocument();
  });

  it('When defaultValue prop is changed, Autocomplete component updates.', async () => {
    const DummyChangeState = () => {
      const [defaultValue, setDefaultValue] = React.useState('Apple');
      const handleClick = (value: string) => {
        setDefaultValue(value);
      };
      return (
        <>
          <Autocomplete
            options={['Apple', 'Banana']}
            defaultValue={defaultValue}
            onSelected={(value) => handleClick(value)}
          />
          <button onClick={() => handleClick('Orange')}>Orange</button>
        </>
      );
    };

    render(<DummyChangeState />);
    await act(async () => {
      await waitFor(() => {
        const input: any = screen.getByRole('combobox');
        expect(input.value).toBe('Apple');
      });
    });
    const button = screen.getByRole('button');
    userEvent.click(button);
    await waitFor(() => {
      const input: any = screen.getByRole('combobox');
      expect(input.value).toBe('Orange');
    });
  });

  it('should display available options', async () => {
    const user = userEvent.setup();

    render(<Autocomplete options={['daniele', 'isaac']} />);
    const input = screen.getByRole('combobox');
    await user.type(input, 'da');
    const listItems: any = screen.getAllByRole('option');
    await waitFor(() => {
      expect(listItems[0].innerHTML).toBe('daniele');
    });
  });

  it('should not display available options', async () => {
    const user = userEvent.setup();
    const { container } = render(<Autocomplete options={['first', 'isaac']} />);
    const input = screen.getByRole('combobox');
    await user.type(input, 'test value');

    const el: any = container.querySelector('li');
    expect(el).not.toBeInTheDocument();
  });

  it('should allow to select the first item', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={['daniele', 'destiny', 'isaac']} />);
    const input: any = screen.getByRole('combobox');
    await user.type(input, 'd');
    await waitFor(() => {
      const item: any = screen
        .getAllByRole('option')
        .filter((listitem: any) => listitem.textContent === 'daniele');
      fireEvent.click(item[0]);
      expect(input.value).toBe('daniele');
    });
  });

  it("should allow to select the first item even if it's uppercase", async () => {
    const user = userEvent.setup();

    render(<Autocomplete options={['daniele', 'destiny', 'isaac']} />);
    const input: any = screen.getByRole('combobox');
    await user.type(input, 'D');
    await waitFor(() => {
      const item: any = screen
        .getAllByRole('option')
        .filter((listitem: any) => listitem.textContent === 'daniele');
      fireEvent.click(item[0]);
      expect(input.value).toBe('daniele');
    });
  });

  it('should allow to select the first item even if the list of choices is uppercase', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={['Daniele', 'destiny', 'isaac']} />);
    const input: any = screen.getByRole('combobox');
    await user.type(input, 'd');
    await waitFor(() => {
      const item: any = screen
        .getAllByRole('option')
        .filter((listitem: any) => listitem.textContent === 'Daniele');
      fireEvent.click(item[0]);
      expect(input.value).toBe('Daniele');
    });
  });

  it('should call the onSelected function if the function is provided', async () => {
    const user = userEvent.setup();
    const handleOnSelected = jest.fn();
    render(
      <Autocomplete
        options={['daniele', 'destiny', 'isaac']}
        onSelected={handleOnSelected}
      />
    );
    const input: any = screen.getByRole('combobox');
    await user.type(input, 'd');
    await waitFor(() => {
      const item: any = screen
        .getAllByRole('option')
        .filter((listitem: any) => listitem.textContent === 'daniele');
      fireEvent.click(item[0]);
      expect(handleOnSelected).toBeCalled();
    });
  });

  it('should set the input to an empty string when there is no text in the input and on pressing Enter', async () => {
    render(<Autocomplete options={['daniele', 'darren', 'isaac']} />);

    const input: any = screen.getByRole('combobox');

    fireEvent.keyDown(input, { code: 'Enter', keyCode: 13 });

    expect(input.value).toBe('');
  });

  it('should highlight the selected option(s) on keyDown', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={['daniele', 'darren', 'isaac']} />);
    const input: any = screen.getByRole('combobox');
    await user.type(input, 'da');
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'Enter', keyCode: 13 });
    expect(input.value).toBe('darren');
  });

  it('should highlight the selected option(s) on keyUp', async () => {
    const user = userEvent.setup();

    render(<Autocomplete options={['daniele', 'darren', 'isaac']} />);
    const input: any = screen.getByRole('combobox');
    await user.type(input, 'da');
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowUp' });
    fireEvent.keyDown(input, { code: 'Enter', keyCode: 13 });
    expect(input.value).toBe('daniele');
  });

  it('should display the next item when you scroll with the keyboard', async () => {
    const user = userEvent.setup();

    render(
      <Autocomplete
        options={[
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple 1',
          'Pineapple 2',
          'Pineapple 3',
          'Pineapple 4',
          'Pineapple 5',
          'Pineapple 6',
          'Pineapple 7',
          'Pineapple 8',
          'Pineapple 9',
          'Pineapple 10',
          'Pineapple 11',
          'Pineapple 12',
          'Pineapple 13',
          'Pineapple 14',
        ]}
      />
    );
    const input: any = screen.getByRole('combobox');
    await user.type(input, 'p');
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });

    const listItems: HTMLLIElement[] = screen.getAllByRole('option');
    const exactItem = screen.queryByText(/Pineapple 5/i);

    expect(listItems[10]).toBeVisible();
    expect(exactItem).toBeVisible();
  });

  it('should higlight the first one as active if you try to keyUp', async () => {
    const user = userEvent.setup();
    render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
      />
    );
    const input: any = screen.getByRole('combobox');
    await user.type(input, 'da');
    fireEvent.keyDown(input, { code: 'ArrowUp' });

    const listItems: any = screen.getAllByRole('option');
    expect(listItems[0].className).toBe('activeClass');
  });

  it('should highlight the last one as active if you try to keyDown', async () => {
    const user = userEvent.setup();
    render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
      />
    );
    const input: any = screen.getByRole('combobox');
    await user.type(input, 'da');

    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });

    const listItems: any = screen.getAllByRole('option');
    expect(listItems[1].className).toBe('activeClass');
  });

  it('should call the selected function after the selection', async () => {
    const handleSelected = jest.fn();
    const user = userEvent.setup();
    render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        onSelected={handleSelected}
      />
    );
    const input: any = screen.getByRole('combobox');
    await user.type(input, 'da');

    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'Enter', keyCode: 13 });
    expect(handleSelected).toBeCalled();
  });

  it('should display an hint label if specified', () => {
    const hintClass = 'hintClass';

    const { container } = render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
        hintText="search names"
        hintClass="hintClass"
      />
    );
    const hint: any = container.querySelector(`.${hintClass}`);
    expect(hint?.innerHTML).toBe('search names');
  });

  it('should display an hint class if specified', () => {
    const hintClass = 'labelClass';

    const { container } = render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
        hintText="search names"
        hintClass="labelClass"
      />
    );
    const hint: any = container.querySelector(`.${hintClass}`);
    expect(hint).not.toBeNull();
  });

  it('should display an hint id if specified', () => {
    render(
      <Autocomplete
        options={['abc', 'xyz']}
        hintText="search names"
        hintClass="hintclass"
        hintId="hintid"
      />
    );
    const hint: any = screen.getByText('search names');
    expect(hint.id).toBe('hintid');
  });

  it('should display the results after typing 2 character', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
        resultUlClass="list"
        minCharsBeforeSearch={2}
      />
    );
    const input: any = screen.getByRole('combobox');
    await user.type(input, 'd');

    const ulEl: any = container.querySelector('ul');
    expect(ulEl).toBeNull();
    await user.type(input, 'a');

    const listItems: any = screen.getAllByRole('option');
    expect(listItems.length).toBe(2);
  });

  it('should populate the list dynamically - i.e. fetch from the server', async () => {
    const user = userEvent.setup();
    render(<DummyAutoComplete />);
    const input: any = screen.getByRole('combobox');
    await user.type(input, 'p');
    await waitFor(() => {
      const listItemsFirst: any = screen.getAllByRole('option');

      expect(listItemsFirst.length).toBe(7);
    });
    await user.type(input, 'e');
    await waitFor(() => {
      const listItemsSecond: any = screen.getAllByRole('option');
      expect(listItemsSecond.length).toBe(2);
    });
  });

  it('should display a remove all button if specified', () => {
    const onRemoveAllHandler = jest.fn();

    render(
      <Autocomplete
        removeAllButtonClass="my-remove-all-class"
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
        hintText="search names"
        hintClass="labelClass"
        multiSelect={true}
        onRemoveAll={onRemoveAllHandler}
      />
    );

    const removeAllEl: HTMLElement = screen.getByRole('button');

    expect(removeAllEl).toBeInTheDocument();
    expect(removeAllEl.getAttribute('aria-label')).toBe('Remove all');
    expect(removeAllEl.getAttribute('class')).toBe('my-remove-all-class');

    fireEvent.click(removeAllEl);

    expect(onRemoveAllHandler).toHaveBeenCalled();
  });

  it('should check that required attribute is defaulted to false', () => {
    render(<Autocomplete options={[]} />);
    const input: any = screen.getByRole('combobox');
    expect(input.required).toBe(false);
  });

  it('should check that if required is set to true, input child is rendered with the attribute', () => {
    render(<Autocomplete options={[]} required />);
    const input: any = screen.getByRole('combobox');
    expect(input.required).toBe(true);
  });

  it('should contains the input name if specified', () => {
    render(<Autocomplete options={[]} name="inputName" />);
    const input: any = screen.getByRole('combobox');
    expect(input.name).toBe('inputName');
  });

  it('should contains the select name if specified and progressive enhancment', () => {
    //@ts-ignore
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => false);
    render(
      <Autocomplete
        options={['daniele', 'isaac']}
        selectProps={{
          selectClassName: '',
          containerClassName: '',
          labelClassName: '',
        }}
        name="selectName"
      />
    );
    const formSelect: any = screen.getByRole('combobox');
    expect(formSelect.name).toBe('selectName');
  });

  it('should hide the results list if pressing the Escape key', async () => {
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => true);

    const user = userEvent.setup();

    render(<Autocomplete options={['daniele', 'darren', 'isaac']} />);

    const input = screen.getByRole('combobox');

    await act(() => user.click(input));

    let resultList = screen.queryByRole('listbox');
    expect(resultList).toBe(null);

    await act(() => user.type(input, 'da'));

    resultList = screen.queryByRole('listbox');
    expect(resultList).not.toBeNull();

    fireEvent.keyDown(input, { code: 'Escape' });

    resultList = screen.queryByRole('listbox');
    expect(resultList).toBe(null);
  });

  it('should display a prompt if receiving focus and the minimum number of characters have not yet been entered', async () => {
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => true);

    const user = userEvent.setup();
    const minCharsBeforeSearch = 2;
    const minCharsMessage = `Please type at least ${minCharsBeforeSearch} character(s) to see the available options`;
    const promptId = 'input-prompt';

    const { container } = render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
        resultUlClass="list"
        minCharsBeforeSearch={minCharsBeforeSearch}
        minCharsMessage={minCharsMessage}
        promptId={promptId}
      />
    );

    const input: any = screen.getByRole('combobox');

    expect(input).not.toHaveAttribute('aria-describedby');

    await act(() => user.click(input));

    expect(input).toHaveAttribute('aria-describedby');

    let prompt: any = container.querySelector(`#${promptId}`);

    expect(prompt.innerHTML).toBe(minCharsMessage);

    act(() => {
      fireEvent.blur(input);
    });

    expect(input).not.toHaveAttribute('aria-describedby');

    prompt = container.querySelector(`#${promptId}`);

    expect(prompt).toBeNull();
  });

  it('should hide the prompt after the required minimum number of characters have been entered', async () => {
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => true);

    const user = userEvent.setup();
    const minCharsBeforeSearch = 1;
    const minCharsMessage = `Please type at least ${minCharsBeforeSearch} character(s) to see the available options`;
    const promptId = 'input-prompt';

    const { container } = render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
        resultUlClass="list"
        minCharsBeforeSearch={minCharsBeforeSearch}
        minCharsMessage={minCharsMessage}
        promptId={promptId}
      />
    );

    const input: any = screen.getByRole('combobox');

    expect(input).not.toHaveAttribute('aria-describedby');

    await act(() => user.click(input));

    expect(input).toHaveAttribute('aria-describedby');

    await act(() => user.type(input, 'da'));

    expect(input).not.toHaveAttribute('aria-describedby');

    const prompt: any = container.querySelector(`#${promptId}`);

    expect(prompt).toBeNull();
  });

  it('should display a conditional prompt before any characters have been entered', async () => {
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => true);

    const user = userEvent.setup();
    const promptMessage = 'Enter a valid date before typing here';
    const promptId = 'input-prompt';

    // contrived predicate for testing purposes
    let age = 3;
    const predicate = () => age < 5;

    const { container } = render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
        resultUlClass="list"
        promptCondition={predicate}
        promptMessage={promptMessage}
        promptId={promptId}
      />
    );

    const input: any = screen.getByRole('combobox');

    expect(input).not.toHaveAttribute('aria-describedby');

    await act(() => user.click(input));

    expect(input).toHaveAttribute('aria-describedby');

    let prompt: any = container.querySelector(`#${promptId}`);

    expect(prompt.innerHTML).toBe(promptMessage);

    // check if user input is prevented and the prompt is still visible
    await act(() => user.type(input, 'd'));

    expect(input.value).toContain('');
    expect(input).toHaveAttribute('aria-describedby');

    prompt = container.querySelector(`#${promptId}`);

    expect(prompt.innerHTML).toBe(promptMessage);

    // check if user input is allowed and the prompt is hidden when promptCondition becomes false
    age = 7;

    await user.type(input, 'd');

    expect(input.value).toContain('d');
    expect(input).not.toHaveAttribute('aria-describedby');

    prompt = container.querySelector(`#${promptId}`);

    expect(prompt).toBeNull();
  });

  it('conditional prompt should take precedence over the minChars if both props are provided', async () => {
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => true);

    const user = userEvent.setup();
    const minCharsBeforeSearch = 2;
    const minCharsMessage = `Please type at least ${minCharsBeforeSearch} character(s) to see the available options`;
    const promptMessage = 'Enter a valid date before typing here';
    const promptId = 'input-prompt';

    const { container } = render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
        resultUlClass="list"
        minCharsBeforeSearch={minCharsBeforeSearch}
        minCharsMessage={minCharsMessage}
        promptCondition={() => true}
        promptMessage={promptMessage}
        promptId={promptId}
      />
    );

    const input: any = screen.getByRole('combobox');

    expect(input).not.toHaveAttribute('aria-describedby');

    await act(() => user.click(input));

    expect(input).toHaveAttribute('aria-describedby');

    const prompt: any = container.querySelector(`#${promptId}`);

    expect(prompt.innerHTML).toBe(promptMessage);
  });

  it('should contain the dynamic id for every item in the list if listId is present', async () => {
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => true);

    const user = userEvent.setup();
    const { container } = render(
      <Autocomplete
        options={['daniele', 'isaac']}
        optionsId="dcx-option-id"
        selectProps={{
          selectClassName: '',
          containerClassName: '',
          labelClassName: '',
        }}
      />
    );
    const input = screen.getByRole('combobox');
    await user.type(input, 'da');
    await waitFor(() => {
      const el: any = container.querySelector('li');
      expect(el.id).toBe('dcx-option-id--1');
    });
  });

  it('should not contain an id item if listId is not specified', async () => {
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => true);

    const user = userEvent.setup();
    const { container } = render(
      <Autocomplete
        options={['daniele', 'isaac']}
        selectProps={{
          selectClassName: '',
          containerClassName: '',
          labelClassName: '',
        }}
      />
    );
    const input = screen.getByRole('combobox');
    await user.type(input, 'da');
    await waitFor(() => {
      const el: any = container.querySelector('li');
      expect(el.id).toBe('');
    });
  });

  it('should have a null tabIndex value by default', () => {
    render(<Autocomplete options={['daniele', 'isaac']} />);

    const input: any = screen.getByRole('combobox');
    expect(input.getAttribute('tabindex')).toBeNull();
  });

  it('should accept tabIndex attribute', () => {
    render(<Autocomplete options={['daniele', 'isaac']} tabIndex={1} />);

    const input: any = screen.getByRole('combobox');
    expect(input.getAttribute('tabindex')).toBe('1');
  });

  it('should accept an option list of objects', async () => {
    const user = userEvent.setup();

    const options: any = [
      {
        firstName: 'Isaac',
        surname: 'Babalola',
        postion: 'Senior Developer',
      },
      {
        firstName: 'Daniele',
        surname: 'Zurico',
        position: 'Head of Full Stack Development',
      },
      {
        firstName: 'Healy',
        surname: 'Ingenious',
        position: 'Project Manager',
      },
    ];

    const quickSearch = (query: string, options: any[]) => {
      const optionName = (option: any) =>
        `${option.firstName} ${option.surname} (${option.position})`;
      const queryStr = query.toLowerCase();
      return options
        .filter(
          (option: any) =>
            optionName(option).toLowerCase().indexOf(queryStr) !== -1
        )
        .map((option: any) => {
          const commonRank = 0;
          let rank;
          if (option.position.toLowerCase().indexOf(queryStr) !== -1) rank = 1;
          else if (option.firstName.toLowerCase().indexOf(queryStr) !== -1)
            rank = 10 + commonRank;
          else if (option.surnameName.toLowerCase().indexOf(queryStr) !== -1)
            rank = 20 + commonRank;
          option.rank = rank || 100;
          return option;
        })
        .sort((a, b) => {
          if (a.rank < b.rank) {
            return -1;
          }

          if (a.rank > b.rank) {
            return 1;
          }

          if (a.position < b.position) {
            return -1;
          }

          if (a.position > b.position) {
            return 1;
          }

          return 0;
        })
        .map((option: any) => optionName(option));
    };

    render(<Autocomplete options={options} search={quickSearch} />);
    const input = screen.getByRole('combobox');
    await user.type(input, 'he');
    const listItems: any = screen.getAllByRole('option');
    await waitFor(() => {
      expect(listItems[0].innerHTML).toBe(
        'Daniele Zurico (Head of Full Stack Development)'
      );
      expect(listItems[1].innerHTML).toBe('Healy Ingenious (Project Manager)');
      expect(listItems).toHaveLength(2);
    });
  });

  it('should render the autocomplete with all of the accessible elements', () => {
    const status = '';
    const change = jest.fn();
    const hint =
      'When autocomplete results are available use up and down arrows to review and enter to select.';
    render(
      <Autocomplete
        options={[
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple',
        ]}
        id="fruitTest"
        labelText="search the list of fruits"
        notFoundText="No fruit found"
        resultId="fruit-options-container"
        optionsId="fruit-option"
        statusUpdate={(length, property, position) =>
          change(length, property, position)
        }
        accessibilityStatus={status}
        accessibilityHintText={hint}
      />
    );
    const statusElements = screen.getAllByRole('status');
    expect(statusElements.length).toBe(2);
    expect(statusElements[0].id).toBe('autocomplete-status-fruitTest-A');
    expect(statusElements[1].id).toBe('autocomplete-status-fruitTest-B');
    const hiddenHintElm = document.getElementById(
      'autocomplete-fruitTest-assistiveHint'
    );
    expect(hiddenHintElm?.innerHTML).toBe(hint);
    const inputElm = screen.getByRole('combobox');
    expect(inputElm.getAttribute('aria-expanded')).toBe('false');
    expect(inputElm.getAttribute('aria-owns')).toBe('fruit-options-container');
    expect(inputElm.getAttribute('aria-activedescendant')).toBeNull();
  });

  it('should update the accessibility status and alternate between the two options', async () => {
    let status = '';
    const change = (length: number, property: string, position: number) => {
      status = `${length} result${length > 1 ? 's are' : ' is'} available. ${property} ${position} of ${length} is highlighted`;
    };
    const hint =
      'When autocomplete results are available use up and down arrows to review and enter to select.';
    const user = userEvent.setup();
    const component = (statusText: string) => (
      <Autocomplete
        options={[
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple',
        ]}
        id="fruitTest"
        labelText="search the list of fruits"
        notFoundText="No fruit found"
        resultId="fruit-options-container"
        optionsId="fruit-option"
        statusUpdate={(length, property, position) => {
          change(length, property, position);
        }}
        accessibilityStatus={statusText}
        accessibilityHintText={hint}
      />
    );

    const { rerender } = render(component(status));

    let statusElements = screen.getAllByRole('status');
    expect(statusElements.length).toBe(2);
    expect(statusElements[0].innerHTML).toBe('');
    expect(statusElements[1].innerHTML).toBe('');
    const inputElm = screen.getByRole('combobox');
    await user.type(inputElm, 'p');

    rerender(component(status));

    statusElements = screen.getAllByRole('status');
    expect(statusElements[0].innerHTML).toBe(
      '7 results are available. Papaya 1 of 7 is highlighted'
    );
    expect(statusElements[1].innerHTML).toBe('');

    await user.type(inputElm, 'a');

    rerender(component(status));
    statusElements = screen.getAllByRole('status');
    expect(statusElements[0].innerHTML).toBe('');
    expect(statusElements[1].innerHTML).toBe(
      '2 results are available. Papaya 1 of 2 is highlighted'
    );
  });

  it('should call status update when using the arrow up or down keys', async () => {
    const status = 'status message';
    const hint =
      'When autocomplete results are available use up and down arrows to review and enter to select.';
    const user = userEvent.setup();
    const change = jest.fn();
    render(
      <Autocomplete
        options={[
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple',
        ]}
        id="fruitTest"
        labelText="search the list of fruits"
        notFoundText="No fruit found"
        resultId="fruit-options-container"
        optionsId="fruit-option"
        statusUpdate={(length, property, position) => {
          change(length, property, position);
        }}
        accessibilityStatus={status}
        accessibilityHintText={hint}
      />
    );

    const inputElm = screen.getByRole('combobox');
    await user.type(inputElm, 'p');
    fireEvent.keyDown(inputElm, { code: 'ArrowDown' });
    expect(change.mock.calls[1][0]).toBe(7);
    expect(change.mock.calls[1][1]).toBe('Persimmon');
    expect(change.mock.calls[1][2]).toBe(2);

    fireEvent.keyDown(inputElm, { code: 'ArrowDown' });
    expect(change.mock.calls[2][0]).toBe(7);
    expect(change.mock.calls[2][1]).toBe('Paw Paw');
    expect(change.mock.calls[2][2]).toBe(3);

    fireEvent.keyDown(inputElm, { code: 'ArrowDown' });
    expect(change.mock.calls[3][0]).toBe(7);
    expect(change.mock.calls[3][1]).toBe('Prickly Pear');
    expect(change.mock.calls[3][2]).toBe(4);

    fireEvent.keyDown(inputElm, { code: 'ArrowUp' });
    expect(change.mock.calls[4][0]).toBe(7);
    expect(change.mock.calls[4][1]).toBe('Paw Paw');
    expect(change.mock.calls[4][2]).toBe(3);

    fireEvent.keyDown(inputElm, { code: 'ArrowUp' });
    expect(change.mock.calls[5][0]).toBe(7);
    expect(change.mock.calls[5][1]).toBe('Persimmon');
    expect(change.mock.calls[5][2]).toBe(2);
  });

  it('should call status update when the user hits enter on an option', async () => {
    const status = 'status message';
    const hint =
      'When autocomplete results are available use up and down arrows to review and enter to select.';
    const user = userEvent.setup();
    const change = jest.fn();
    render(
      <Autocomplete
        options={[
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple',
        ]}
        id="fruitTest"
        labelText="search the list of fruits"
        notFoundText="No fruit found"
        resultId="fruit-options-container"
        optionsId="fruit-option"
        statusUpdate={(length, property, position) => {
          change(length, property, position);
        }}
        accessibilityStatus={status}
        accessibilityHintText={hint}
      />
    );

    const inputElm = screen.getByRole('combobox');
    await user.type(inputElm, 'p');

    fireEvent.keyDown(inputElm, { code: 'Enter', keycode: 13 });
    expect(change.mock.calls[1][0]).toBe(-1);
    expect(change.mock.calls[1][1]).toBe('');
    expect(change.mock.calls[1][2]).toBe(0);
  });

  it('should call status update when the user clicks on an option', async () => {
    const status = 'status message';
    const hint =
      'When autocomplete results are available use up and down arrows to review and enter to select.';
    const user = userEvent.setup();
    const change = jest.fn();
    render(
      <Autocomplete
        options={[
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple',
        ]}
        id="fruitTest"
        labelText="search the list of fruits"
        notFoundText="No fruit found"
        resultId="fruit-options-container"
        optionsId="fruit-option"
        statusUpdate={(length, property, position) => {
          change(length, property, position);
        }}
        accessibilityStatus={status}
        accessibilityHintText={hint}
      />
    );

    const inputElm = screen.getByRole('combobox');
    await user.type(inputElm, 'p');

    fireEvent.keyDown(inputElm, { code: 'ArrowDown' });
    const listItems = screen.getAllByRole('option');
    fireEvent.click(listItems[0]);
    expect(change.mock.calls[2][0]).toBe(-1);
    expect(change.mock.calls[2][1]).toBe('');
    expect(change.mock.calls[2][2]).toBe(0);
  });

  it('should call status update when the user clears what they have been typing', async () => {
    const status = 'status message';
    const hint =
      'When autocomplete results are available use up and down arrows to review and enter to select.';
    const user = userEvent.setup();
    const change = jest.fn();
    render(
      <Autocomplete
        options={[
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple',
        ]}
        id="fruitTest"
        labelText="search the list of fruits"
        notFoundText="No fruit found"
        resultId="fruit-options-container"
        optionsId="fruit-option"
        statusUpdate={(length, property, position) => {
          change(length, property, position);
        }}
        accessibilityStatus={status}
        accessibilityHintText={hint}
      />
    );

    const inputElm = screen.getByRole('combobox');
    await user.type(inputElm, 'pap');
    expect(change.mock.calls[2][0]).toBe(1);
    expect(change.mock.calls[2][1]).toBe('Papaya');
    expect(change.mock.calls[2][2]).toBe(1);

    await user.clear(inputElm);
    expect(change.mock.calls[3][0]).toBe(-1);
    expect(change.mock.calls[3][1]).toBe('');
    expect(change.mock.calls[3][2]).toBe(0);
  });

  it('should make sure status container is in the correct position', async () => {
    const change = jest.fn();
    const hint =
      'When autocomplete results are available use up and down arrows to review and enter to select.';
    const { container } = render(
      <Autocomplete
        options={[
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple',
        ]}
        id="fruitTest"
        labelText="search the list of fruits"
        notFoundText="No fruit found"
        resultId="fruit-options-container"
        optionsId="fruit-option"
        statusUpdate={(length, property, position) => {
          change(length, property, position);
        }}
        accessibilityStatus="status message"
        accessibilityHintText={hint}
      />
    );

    let statusElements = screen.getAllByRole('status');
    expect(statusElements.length).toBe(2);
    expect(
      container.querySelector('label + div > div[role="status"]')
    ).toBeInTheDocument();
  });
});
