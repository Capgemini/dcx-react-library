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

const DummyLoadingButton = ({ loadingLabel }: any) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <Button
      isLoading={isLoading}
      onClick={handleClick}
      label="Register"
      loadingLabel={loadingLabel}
      customPrefixImg={<img id="prefixImg" alt="" src="" />}
      customPostfixImg={<img id="postfixmg" alt="" src="" />}
      customLoadingPostImage={<img id="postLoadingImg" alt="" src="" />}
      customLoadingPreImage={<img id="preLoadingImg" alt="" src="" />}
    />
  );
};

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

  it('should disable the button if is in loading state', () => {
    render(<DummyLoadingButton />);
    const button: any = screen.getByRole('button');
    act(() => userEvent.click(button));
    act(() => {
      jest.runAllTimers();
    });
    expect(button).not.toBeDisabled();
  });
  it('should display a different label if is loading state', () => {
    render(<DummyLoadingButton loadingLabel="Loading..." />);
    const button: any = screen.getByRole('button');
    act(() => userEvent.click(button));
    expect(button.innerHTML).toContain('Loading...');
    act(() => {
      jest.runAllTimers();
    });
    expect(button.innerHTML).toContain('Register');
  });
  it('should display a different prefix and postfix if is loading state', () => {
    render(<DummyLoadingButton loadingLabel="Loading..." />);
    const button: any = screen.getByRole('button');
    act(() => userEvent.click(button));
    expect(button.innerHTML).toContain(
      '<img id="preLoadingImg" alt="" src="">Loading...<img id="postLoadingImg" alt="" src="">'
    );
    act(() => {
      jest.runAllTimers();
    });
    expect(button.innerHTML).toContain(
      '<img id="prefixImg" alt="" src="">Register<img id="postfixmg" alt="" src="">'
    );
  });

  it('should display the same label in loading state', () => {
    render(<DummyLoadingButton />);
    const button: any = screen.getByRole('button');
    act(() => userEvent.click(button));
    expect(button.innerHTML).toContain(
      '<img id="preLoadingImg" alt="" src="">Register<img id="postLoadingImg" alt="" src="">'
    );
    act(() => {
      jest.runAllTimers();
    });
    expect(button.innerHTML).toContain(
      '<img id="prefixImg" alt="" src="">Register<img id="postfixmg" alt="" src="">'
    );
  });

  it('should remain enable', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} label="Register" />);
    const button: any = screen.getByRole('button');
    act(() => userEvent.click(button));
    expect(button.disable).toBeFalsy();
  });

  it('should accept className as attribute', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} className="test" />);
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('class')).toBe('test');
  });

  it('should accept formAction as attribute', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} formAction={"https://www.w3schools.com/tags/att_button_formaction.asp"} />);
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('formAction')).toBe('https://www.w3schools.com/tags/att_button_formaction.asp');
  });

  
});
