import React from 'react';

import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
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
    expect(label.className).toBe('errorMessageClass');
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
    expect(label.className).toBe('errorMessageClass');
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
    expect(label.className).toBe('errorMessageClass');
    expect(label.id).toBe('errorId');
    expect(label).toBeInTheDocument();
  });

  it('should allow to specify an id for the input', () => {
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => true);
    render(<Autocomplete options={['daniele', 'isaac']} id="myId" />);
    const input: any = screen.getByRole('textbox');
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

    const input: any = screen.getByRole('textbox');
    expect(input.name).toBe('autocompleteSearch');
    expect(input.type).toBe('text');
    expect(input.value).toBe('');
    expect(input).toBeInTheDocument();
  });

  it('should display the formInput default value', () => {
    render(
      <Autocomplete options={['daniele', 'isaac']} defaultValue="daniele" />
    );

    const input: any = screen.getByRole('textbox');
    expect(input.name).toBe('autocompleteSearch');
    expect(input.type).toBe('text');
    expect(input.value).toBe('daniele');
    expect(input).toBeInTheDocument();
  });

  it('should display available options', async () => {
    const user = userEvent.setup();

    render(<Autocomplete options={['daniele', 'isaac']} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'da');
    const listItems: any = screen.getAllByRole('listitem');
    await waitFor(() => {
      expect(listItems[0].innerHTML).toBe('daniele');
    });
  });

  it('should not display available options', async () => {
    const user = userEvent.setup();
    const { container } = render(<Autocomplete options={['first', 'isaac']} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'test value');

    const el: any = container.querySelector('li');
    expect(el).not.toBeInTheDocument();
  });

  it('should allow to select the first item', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={['daniele', 'destiny', 'isaac']} />);
    const input: any = screen.getByRole('textbox');
    await user.type(input, 'd');
    await waitFor(() => {
      const item: any = screen
        .getAllByRole('listitem')
        .filter((listitem: any) => listitem.textContent === 'daniele');
      fireEvent.click(item[0]);
      expect(input.value).toBe('daniele');
    });
  });

  it("should allow to select the first item even if it's uppercase", async () => {
    const user = userEvent.setup();

    render(<Autocomplete options={['daniele', 'destiny', 'isaac']} />);
    const input: any = screen.getByRole('textbox');
    await user.type(input, 'D');
    await waitFor(() => {
      const item: any = screen
        .getAllByRole('listitem')
        .filter((listitem: any) => listitem.textContent === 'daniele');
      fireEvent.click(item[0]);
      expect(input.value).toBe('daniele');
    });
  });

  it('should allow to select the first item even if the list of choices is uppercase', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={['Daniele', 'destiny', 'isaac']} />);
    const input: any = screen.getByRole('textbox');
    await user.type(input, 'd');
    await waitFor(() => {
      const item: any = screen
        .getAllByRole('listitem')
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
    const input: any = screen.getByRole('textbox');
    await user.type(input, 'd');
    await waitFor(() => {
      const item: any = screen
        .getAllByRole('listitem')
        .filter((listitem: any) => listitem.textContent === 'daniele');
      fireEvent.click(item[0]);
      expect(handleOnSelected).toBeCalled();
    });
  });

  it('should set the input to an empty string when there is no text in the input and on pressing Enter', async () => {
    render(<Autocomplete options={['daniele', 'darren', 'isaac']} />);

    const input: any = screen.getByRole('textbox');

    fireEvent.keyDown(input, { code: 'Enter', keyCode: 13 });

    expect(input.value).toBe('');
  });

  it('should highlight the selected option(s) on keyDown', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={['daniele', 'darren', 'isaac']} />);
    const input: any = screen.getByRole('textbox');
    await user.type(input, 'da');
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'Enter', keyCode: 13 });
    expect(input.value).toBe('darren');
  });

  it('should highlight the selected option(s) on keyUp', async () => {
    const user = userEvent.setup();

    render(<Autocomplete options={['daniele', 'darren', 'isaac']} />);
    const input: any = screen.getByRole('textbox');
    await user.type(input, 'da');
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowUp' });
    fireEvent.keyDown(input, { code: 'Enter', keyCode: 13 });
    expect(input.value).toBe('daniele');
  });

  it('should higlight the first one as active if you try to keyUp', async () => {
    const user = userEvent.setup();
    render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
      />
    );
    const input: any = screen.getByRole('textbox');
    await user.type(input, 'da');
    fireEvent.keyDown(input, { code: 'ArrowUp' });

    const listItems: any = screen.getAllByRole('listitem');
    expect(listItems[0].className).toBe('activeClass ');
  });

  it('should highlight the last one as active if you try to keyDown', async () => {
    const user = userEvent.setup();
    render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
      />
    );
    const input: any = screen.getByRole('textbox');
    await user.type(input, 'da');

    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });

    const listItems: any = screen.getAllByRole('listitem');
    expect(listItems[1].className).toBe('activeClass ');
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
    const input: any = screen.getByRole('textbox');
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
    const input: any = screen.getByRole('textbox');
    await user.type(input, 'd');

    const ulEl: any = container.querySelector('ul');
    expect(ulEl).toBeNull();
    await user.type(input, 'a');

    const listItems: any = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(2);
  });

  it('should populate the list dynamically - i.e. fetch from the server', async () => {
    const user = userEvent.setup();
    render(<DummyAutoComplete />);
    const input: any = screen.getByRole('textbox');
    await user.type(input, 'p');
    await waitFor(() => {
      const listItemsFirst: any = screen.getAllByRole('listitem');

      expect(listItemsFirst.length).toBe(7);
    });
    await user.type(input, 'e');
    await waitFor(() => {
      const listItemsSecond: any = screen.getAllByRole('listitem');
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
    const input: any = screen.getByRole('textbox');
    expect(input.required).toBe(false);
  });

  it('should check that if required is set to true, input child is rendered with the attribute', () => {
    render(<Autocomplete options={[]} required />);
    const input: any = screen.getByRole('textbox');
    expect(input.required).toBe(true);
  });

  it('should contains the input name if specified', () => {
    render(<Autocomplete options={[]} name="inputName" />);
    const input: any = screen.getByRole('textbox');
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

    const input = screen.getByRole('textbox');

    await act(() => user.click(input));

    let resultList = screen.queryByRole('list');
    expect(resultList).toBe(null);

    await act(() => user.type(input, 'da'));

    resultList = screen.queryByRole('list');
    expect(resultList).not.toBeNull();

    fireEvent.keyDown(input, { code: 'Escape' });

    resultList = screen.queryByRole('list');
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

    const input: any = screen.getByRole('textbox');

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

    const input: any = screen.getByRole('textbox');

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

    const input: any = screen.getByRole('textbox');

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

    const input: any = screen.getByRole('textbox');

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
    const input = screen.getByRole('textbox');
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
    const input = screen.getByRole('textbox');
    await user.type(input, 'da');
    await waitFor(() => {
      const el: any = container.querySelector('li');
      expect(el.id).toBe('');
    });
  });

  it('should have a 0 tabIndex value by default', () => {
    render(<Autocomplete options={['daniele', 'isaac']} />);

    const input: any = screen.getByRole('textbox');
    expect(input.getAttribute('tabindex')).toBe('0');
  });

  it('should accept tabIndex attribute', () => {
    render(<Autocomplete options={['daniele', 'isaac']} tabIndex={1} />);

    const input: any = screen.getByRole('textbox');
    expect(input.getAttribute('tabindex')).toBe('1');
  });
});
