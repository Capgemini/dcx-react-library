import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Autocomplete } from '../';
import userEvent from '@testing-library/user-event';

describe('FormInput', () => {
  it('should display the formInput content', () => {
    render(<Autocomplete options={['daniele', 'isaac']} />);

    const input: any = screen.getByRole('textbox');
    expect(input.name).toBe('autocompleteSearch');
    expect(input.type).toBe('text');
    expect(input.value).toBe('');
    expect(input).toBeInTheDocument();
  });

  it('should contains the formInput suffix and prefix', () => {
    render(
      <Autocomplete
        options={['daniele', 'isaac']}
        prefix={<div>prefix</div>}
        suffix={<div>prefix</div>}
      />
    );

    expect(screen.getByRole('suffix')).toBeInTheDocument();
    expect(screen.getByRole('prefix')).toBeInTheDocument();
  });

  it('should display available options', () => {
    render(<Autocomplete options={['daniele', 'isaac']} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'da');
    const listItems: any = screen.getAllByRole('listitem');
    expect(listItems[0].innerHTML).toBe('daniele');
  });

  it('should not display available options', () => {
    const { container } = render(
      <Autocomplete options={['daniele', 'isaac']} />
    );
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'TEST VALUE');
    const noOptionTag: any = container.querySelector('em');
    expect(noOptionTag.innerHTML).toBe('No Option!');
  });

  it('should allow to click on the first item and select as choice', () => {
    render(<Autocomplete options={['daniele', 'destiny', 'isaac']} />);
    const input: any = screen.getByRole('textbox');
    userEvent.type(input, 'd');
    const item: any = screen
      .getAllByRole('listitem')
      .filter((listitem: any) => listitem.textContent === 'daniele');
    fireEvent.click(item[0]);
    expect(input.value).toBe('daniele');
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
    userEvent.type(input, 'd');
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
        suffix={<div>prefix</div>}
      />
    );
    const input: any = screen.getByRole('textbox');
    userEvent.type(input, 'da');
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'Enter', keyCode: 13 });
    expect(input.value).toBe('darren');
  });

  it('hould highlight the selected option(s) on keyUp', () => {
    render(<Autocomplete options={['daniele', 'darren', 'isaac']} />);
    const input: any = screen.getByRole('textbox');
    userEvent.type(input, 'da');
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
    userEvent.type(input, 'da');
    fireEvent.keyDown(input, { code: 'ArrowUp' });

    const listItems: any = screen.getAllByRole('listitem');
    expect(listItems[0].className).toBe('activeClass');
  });

  it('should highlight the first one as active if you try to keyUp', () => {
    render(
      <Autocomplete
        options={['daniele', 'darren', 'isaac']}
        resultActiveClass="activeClass"
      />
    );
    const input: any = screen.getByRole('textbox');
    userEvent.type(input, 'da');
    fireEvent.keyDown(input, { code: 'ArrowDown' });
    fireEvent.keyDown(input, { code: 'ArrowDown' });

    const listItems: any = screen.getAllByRole('listitem');
    expect(listItems[1].className).toBe('activeClass');
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
    userEvent.type(input, 'da');
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
});
