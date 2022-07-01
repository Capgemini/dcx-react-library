import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Autocomplete } from '../';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react-hooks';

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

describe('FormInput', () => {
  it('should display the formInput content', () => {
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

  it('should contains the formInput suffix and prefix', () => {
    render(
      <Autocomplete
        options={['daniele', 'isaac']}
        debounceMs={100}
        prefix={<div data-testid="prefix">prefix</div>}
        suffix={<div data-testid="suffix">suffix</div>}
      />
    );

    expect(screen.getByTestId('suffix')).toBeInTheDocument();
    expect(screen.getByTestId('prefix')).toBeInTheDocument();
  });

  it('should display available options', () => {
    render(<Autocomplete options={['daniele', 'isaac']} />);
    const input = screen.getByRole('textbox');
    jest.useFakeTimers('modern');
    act(() => userEvent.type(input, 'da'));
    act(() => {
      jest.runAllTimers();
    });
    const listItems: any = screen.getAllByRole('listitem');
    expect(listItems[0].innerHTML).toBe('daniele');
  });

  it('should not display available options', () => {
    render(<Autocomplete options={['first', 'isaac']} />);
    const input = screen.getByRole('textbox');
    jest.useFakeTimers('modern');
    act(() => userEvent.type(input, 'test value'));
    act(() => {
      jest.runAllTimers();
    });
    const noOptionTag: any = screen.getByText('No Option!');
    expect(noOptionTag.innerHTML).toBe('No Option!');
  });

  it('should allow to select the first item', () => {
    render(<Autocomplete options={['daniele', 'destiny', 'isaac']} />);
    const input: any = screen.getByRole('textbox');
    jest.useFakeTimers('modern');
    act(() => userEvent.type(input, 'd'));
    act(() => {
      jest.runAllTimers();
    });
    const item: any = screen
      .getAllByRole('listitem')
      .filter((listitem: any) => listitem.textContent === 'daniele');
    fireEvent.click(item[0]);
    expect(input.value).toBe('daniele');
  });

  it("should allow to select the first item even if it's uppercase", () => {
    render(<Autocomplete options={['daniele', 'destiny', 'isaac']} />);
    const input: any = screen.getByRole('textbox');
    jest.useFakeTimers('modern');
    act(() => userEvent.type(input, 'D'));
    act(() => {
      jest.runAllTimers();
    });
    const item: any = screen
      .getAllByRole('listitem')
      .filter((listitem: any) => listitem.textContent === 'daniele');
    fireEvent.click(item[0]);
    expect(input.value).toBe('daniele');
  });

  it('should allow to select the first item even if the list of choices is uppercase', () => {
    render(<Autocomplete options={['Daniele', 'destiny', 'isaac']} />);
    const input: any = screen.getByRole('textbox');
    jest.useFakeTimers('modern');
    act(() => userEvent.type(input, 'd'));
    act(() => {
      jest.runAllTimers();
    });
    const item: any = screen
      .getAllByRole('listitem')
      .filter((listitem: any) => listitem.textContent === 'Daniele');
    fireEvent.click(item[0]);
    expect(input.value).toBe('Daniele');
  });

  it('should call the onSelected function if the function is provided', () => {
    const handleOnSelected = jest.fn();
    render(
      <Autocomplete
        options={['daniele', 'destiny', 'isaac']}
        onSelected={handleOnSelected}
      />
    );
    const input: any = screen.getByRole('textbox');
    jest.useFakeTimers('modern');
    act(() => userEvent.type(input, 'd'));
    act(() => {
      jest.runAllTimers();
    });
    const item: any = screen
      .getAllByRole('listitem')
      .filter((listitem: any) => listitem.textContent === 'daniele');
    fireEvent.click(item[0]);
    expect(handleOnSelected).toBeCalled();
  });

  it('should highlight the selected option(s) on keyDown', () => {
    render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        prefix={<div>prefix</div>}
        suffix={<div>suffix</div>}
      />
    );
    const input: any = screen.getByRole('textbox');
    jest.useFakeTimers('modern');
    act(() => userEvent.type(input, 'da'));
    act(() => {
      jest.runAllTimers();
    });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'Enter', keyCode: 13 });
    expect(input.value).toBe('darren');
  });

  it('should highlight the selected option(s) on keyUp', () => {
    render(<Autocomplete options={['daniele', 'darren', 'isaac']} />);
    const input: any = screen.getByRole('textbox');
    jest.useFakeTimers('modern');
    act(() => userEvent.type(input, 'da'));
    act(() => {
      jest.runAllTimers();
    });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowUp' });
    fireEvent.keyDown(input, { code: 'Enter', keyCode: 13 });
    expect(input.value).toBe('daniele');
  });

  it('should higlight the first one as active if you try to keyUp', () => {
    render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
      />
    );
    const input: any = screen.getByRole('textbox');
    jest.useFakeTimers('modern');
    act(() => userEvent.type(input, 'da'));
    act(() => {
      jest.runAllTimers();
    });
    fireEvent.keyDown(input, { code: 'ArrowUp' });

    const listItems: any = screen.getAllByRole('listitem');
    expect(listItems[0].className).toBe('activeClass ');
  });

  it('should highlight the last one as active if you try to keyDown', () => {
    render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
      />
    );
    const input: any = screen.getByRole('textbox');
    jest.useFakeTimers('modern');
    act(() => userEvent.type(input, 'da'));
    act(() => {
      jest.runAllTimers();
    });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });

    const listItems: any = screen.getAllByRole('listitem');
    expect(listItems[1].className).toBe('activeClass ');
  });

  it('should call the selected function after the selection', () => {
    const handleSelected = jest.fn();
    render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        onSelected={handleSelected}
      />
    );
    const input: any = screen.getByRole('textbox');
    act(() => userEvent.type(input, 'da'));
    act(() => {
      jest.runAllTimers();
    });
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'Enter', keyCode: 13 });
    expect(handleSelected).toBeCalled();
  });

  it('should display an hint label if specified', () => {
    const { container } = render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
        hintText="search names"
      />
    );
    const hintTag: any = container.querySelector('label');
    expect(hintTag.innerHTML).toBe('search names');
  });

  it('should display an hint class if specified', () => {
    const { container } = render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
        hintText="search names"
        hintClass="labelClass"
      />
    );
    const hintTag: any = container.querySelector('label');
    expect(hintTag.className).toBe('labelClass');
  });

  it('should display the results after typing 2 character', () => {
    const { container } = render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
        resultUlClass="list"
        minCharsBeforeSearch={2}
      />
    );
    const input: any = screen.getByRole('textbox');
    act(() => userEvent.type(input, 'd'));
    act(() => {
      jest.runAllTimers();
    });
    const ulEl: any = container.querySelector('ul');
    expect(ulEl).toBeNull();
    act(() => userEvent.type(input, 'a'));
    act(() => {
      jest.runAllTimers();
    });
    const listItems: any = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(2);
  });

  it('should populate the list dynamically - i.e. fetch from the server', () => {
    render(<DummyAutoComplete />);
    jest.useFakeTimers('modern');
    const input: any = screen.getByRole('textbox');
    act(() => userEvent.type(input, 'p'));
    act(() => {
      jest.runAllTimers();
    });
    const listItemsFirst: any = screen.getAllByRole('listitem');

    expect(listItemsFirst.length).toBe(7);
    act(() => userEvent.type(input, 'e'));
    act(() => {
      jest.runAllTimers();
    });
    const listItemsSecond: any = screen.getAllByRole('listitem');
    expect(listItemsSecond.length).toBe(2);
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
});
