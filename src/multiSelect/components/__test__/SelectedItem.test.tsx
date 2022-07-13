import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { SelectedItem } from '../SelectedItem';
import { act } from '@testing-library/react-hooks';

describe('SelectedItem', () => {
  it('should render a selected item', () => {
    const handleClick = jest.fn();

    render(<SelectedItem label="some selected value" />);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(screen.getByText('some selected value')).toBeInTheDocument();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should render a selected item with styling', () => {
    render(
      <SelectedItem
        label="some selected value"
        style={{
          padding: '10px',
        }}
      />
    );

    const style: CSSStyleDeclaration = window.getComputedStyle(
      screen.getByText('some selected value')
    );

    expect(style.padding).toBe('10px');
  });

  it('should render a selected button', () => {
    const handleClick = jest.fn();

    render(<SelectedItem label="X" role="button" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByRole('button').hasAttribute('aria-label')).toBeTruthy();
    expect(screen.getByRole('button').getAttribute('aria-label')).toBe('X');
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should render a selected ', () => {
    const handleClick = jest.fn();

    render(<SelectedItem label="X" role="button" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByRole('button').hasAttribute('aria-label')).toBeTruthy();
    expect(screen.getByRole('button').getAttribute('aria-label')).toBe('X');
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should render a selected button with a class name', () => {
    render(<SelectedItem label="X" role="button" className="my-class-name" />);

    expect(
      screen.getByRole('button').getElementsByClassName('my-class-name')
    ).toBeTruthy();
  });

  it('should call given on click handler when clicked', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    render(<SelectedItem label="X" role="button" onClick={handleClick} />);

    await act(() => user.click(screen.getByRole('button')));
    expect(handleClick).toHaveBeenCalled();
  });

  it('should call given on focus handler when focused', () => {
    const handleFocus = jest.fn();

    render(
      <SelectedItem
        label="X"
        role="button"
        onFocus={handleFocus}
        tabIndex={0}
      />
    );

    screen.getByRole('button').focus();
    expect(handleFocus).toHaveBeenCalled();
  });

  it('should not call given on focus handler when not provided with a tab index', () => {
    const handleFocus = jest.fn();

    render(<SelectedItem label="X" onFocus={handleFocus} />);

    screen.getByText('X').focus();
    expect(handleFocus).not.toHaveBeenCalled();
  });

  it('should call given on key down handler when fired', () => {
    const handleKeyDown = jest.fn();

    render(
      <SelectedItem
        label="X"
        role="button"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      />
    );

    screen.getByRole('button').focus();
    fireEvent.keyDown(document.activeElement || document.body);
    expect(handleKeyDown).toHaveBeenCalled();
  });
});
