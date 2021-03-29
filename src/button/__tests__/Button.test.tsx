import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../Button';

import { BUTTON_TYPE } from '..';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react-hooks';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

describe('Button', () => {
  it('should render', () => {
    const handleClick = jest.fn();
    render(<Button label="label" onClick={handleClick} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render the label', () => {
    const handleClick = jest.fn();
    render(
      <Button
        label="start"
        type={BUTTON_TYPE.RESET}
        ariaLabel="signInButton"
        customPrefixImg={<img id="prefixImg" alt="" src="" />}
        customPostfixImg={<img id="postfixmg" alt="" src="" />}
        onClick={handleClick}
      />
    );
    const button = screen.getByRole('button');
    expect(button.innerHTML).toContain('start');
  });

  it('should render disable button', () => {
    const handleClick = jest.fn();
    render(<Button label="start" disabled={true} onClick={handleClick} />);
    const button: any = screen.getByRole('button');
    expect(button.disabled).toBeTruthy();
  });

  it('should render submit button', () => {
    const handleClick = jest.fn();
    render(
      <Button label="start" type={BUTTON_TYPE.SUBMIT} onClick={handleClick} />
    );
    const button: any = screen.getByRole('button');
    expect(button.type).toBe(BUTTON_TYPE.SUBMIT);
  });

  it('should render reset button', () => {
    const handleClick = jest.fn();
    render(
      <Button label="start" type={BUTTON_TYPE.RESET} onClick={handleClick} />
    );
    const button: any = screen.getByRole('button');
    expect(button.type).toBe(BUTTON_TYPE.RESET);
  });

  it('should render postfix image', () => {
    const handleClick = jest.fn();
    render(
      <Button
        label="start"
        type={BUTTON_TYPE.RESET}
        ariaLabel="signInButton"
        customPostfixImg={<img id="postfixmg" alt="" src="" />}
        onClick={handleClick}
      />
    );
    const button = screen.getByRole('button');
    expect(button.innerHTML).toContain('<img id="postfixmg" alt="" src="">');
  });

  it('should render prefix image', () => {
    const handleClick = jest.fn();
    render(
      <Button
        label="start"
        type={BUTTON_TYPE.RESET}
        ariaLabel="signInButton"
        customPrefixImg={<img id="prefixImg" alt="" src="" />}
        onClick={handleClick}
      />
    );
    const button = screen.getByRole('button');
    expect(button.innerHTML).toContain('<img id="prefixImg" alt="" src="">');
  });

  it('should call onClick function', () => {
    const handleClick = jest.fn();
    render(<Button label="start" onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('should display disable button for 1sec', async () => {
    const handleClick = jest.fn();
    render(
      <Button label="start" onClick={handleClick} disableClickForMs={100} />
    );
    const button: any = screen.getByRole('button');
    act(() => userEvent.click(button));
    expect(button).toBeDisabled();
    act(() => {
      jest.runAllTimers();
    });
    expect(button).not.toBeDisabled();
  });
});
