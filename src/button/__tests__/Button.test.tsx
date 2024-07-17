import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../Button';
import { BUTTON_TYPE } from '..';
import userEvent from '@testing-library/user-event';

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
    const user = userEvent.setup();
    render(
      <Button label="start" onClick={handleClick} disableClickForMs={100} />
    );
    const button: any = screen.getByRole('button');
    await act(() => user.click(button));
    expect(button).toBeDisabled();
    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
  });

  it('should disable the button if is in loading state', async () => {
    const user = userEvent.setup();
    render(<DummyLoadingButton />);
    const button: any = screen.getByRole('button');
    await act(() => user.click(button));
    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
  });

  it('should display a different label if is loading state', async () => {
    const user = userEvent.setup();
    render(<DummyLoadingButton loadingLabel="Loading..." />);
    const button: any = screen.getByRole('button');
    await act(() => user.click(button));
    expect(button.innerHTML).toContain('Loading...');
    await waitFor(() => {
      expect(button.innerHTML).toContain('Register');
    });
  });

  it('should display a different prefix and postfix if is loading state', async () => {
    const user = userEvent.setup();
    render(<DummyLoadingButton loadingLabel="Loading..." />);
    const button: any = screen.getByRole('button');
    await act(() => user.click(button));
    await waitFor(() => {
      expect(button.innerHTML).toContain(
        '<img id="preLoadingImg" alt="" src="">Loading...<img id="postLoadingImg" alt="" src="">'
      );
    });
    await waitFor(() => {
      expect(button.innerHTML).toContain(
        '<img id="prefixImg" alt="" src="">Register<img id="postfixmg" alt="" src="">'
      );
    });
  });

  it('should display the same label in loading state', async () => {
    const user = userEvent.setup();
    render(<DummyLoadingButton />);
    const button: any = screen.getByRole('button');
    await act(() => user.click(button));
    expect(button.innerHTML).toContain(
      '<img id="preLoadingImg" alt="" src="">Register<img id="postLoadingImg" alt="" src="">'
    );
    await waitFor(() => {
      expect(button.innerHTML).toContain(
        '<img id="prefixImg" alt="" src="">Register<img id="postfixmg" alt="" src="">'
      );
    });
  });

  it('should remain enable', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick} label="Register" />);
    const button: any = screen.getByRole('button');
    await act(() => user.click(button));
    expect(button.disable).toBeFalsy();
  });

  it('should accept className as attribute', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} className="test" label="Register" />);
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('class')).toBe('dcx-button test');
  });

  it('should accept formAction as attribute', () => {
    const handleClick = jest.fn();
    render(
      <Button
        onClick={handleClick}
        formAction={'https://www.w3schools.com/tags/att_button_formaction.asp'}
      />
    );
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('formAction')).toBe(
      'https://www.w3schools.com/tags/att_button_formaction.asp'
    );
  });

  it('should accept name as attribute', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} name="submit" />);
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('name')).toBe('submit');
  });

  it('should accept value as attribute', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} value="buttonValue" />);
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('value')).toBe('buttonValue');
  });

  it('should render the default className dcx-button', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} label="Register" />);
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('class')).toBe('dcx-button');
  });

  it('should render the developer specified className', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} className="daniele" label="Login" />);
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('class')).toBe('dcx-button daniele');
  });

  it('should render the primary variant to the className', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} variant="primary" label="Register" />);
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('class')).toBe('dcx-button dcx-button--primary');
  });

  it('should render the secondary variant to the className', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} variant="secondary" label="Register" />
    );
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('class')).toBe(
      'dcx-button dcx-button--secondary'
    );
  });

  it('should render the default, user specified and variant className', () => {
    const handleClick = jest.fn();
    render(
      <Button
        onClick={handleClick}
        className="active"
        variant="tertiary"
        label="Register"
      />
    );
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('class')).toBe(
      'dcx-button active dcx-button--tertiary'
    );
  });

  it('renders JSX elements as children', () => {
    const childElement = <span>Child Element</span>;
    const { getByText } = render(<Button>{childElement}</Button>);
    expect(getByText('Child Element')).toBeInTheDocument();
  });

  it('renders multiple JSX elements as children', () => {
    const childElement1 = <span>Child Element 1</span>;
    const childElement2 = <span>Child Element 2</span>;
    const { getByText } = render(
      <Button>
        {childElement1}
        {childElement2}
      </Button>
    );
    expect(getByText('Child Element 1')).toBeInTheDocument();
    expect(getByText('Child Element 2')).toBeInTheDocument();
  });

  it('should throws an error when both value and children are provided', () => {
    expect(() => render(<Button label="test">Children test</Button>)).toThrow(
      'You can use label or children but not both at the same time'
    );
  });

  it('should not default the aria-label to the label attribute if not defined', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} label="Register" />);
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('aria-label')).toBeNull();
  });

  it('should render the provided aria-label if the attribute is defined', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} ariaLabel="Registers" label="Register" />
    );
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('aria-label')).toBe('Registers');
  });

  it('should render a button with visually hidden text', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button
        label="label"
        onClick={handleClick}
        visuallyHiddenText={{
          text: 'this text is hidden',
          className: 'visually-hidden',
        }}
      />
    );

    expect(getByText('this text is hidden')).toBeInTheDocument();
  });
});
