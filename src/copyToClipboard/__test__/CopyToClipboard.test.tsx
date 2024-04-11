import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { CopyToClipboard } from '../CopyToClipboard';
import '@testing-library/jest-dom';
const DummyCopyToClipboardRef = () => {
  const [copy, setCopy] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <input value="this is a test" ref={inputRef} onChange={() => {}} />
      <CopyToClipboard
        ref={inputRef}
        onCopy={(value: string) => setCopy(value)}
      />
      <div data-testid="copied">{copy}</div>
    </>
  );
};

const DummyCopyToClipboardRefHidden = () => {
  const [copy, setCopy] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <div
        aria-hidden="true"
        className="table"
        ref={inputRef}
        style={{ display: 'none' }}
      >
        helloWorld
      </div>
      <CopyToClipboard
        ref={inputRef}
        onCopy={(value: string) => setCopy(value)}
      />
      <div data-testid="copied">{copy}</div>
    </>
  );
};

const DummyCopyToClipboardText = () => {
  const [copy, setCopy] = React.useState('');
  return (
    <>
      <div>copy me</div>
      <CopyToClipboard
        text="copy me"
        onCopy={(value: string) => {
          setCopy(value);
        }}
      />
      <div data-testid="copied">{copy}</div>
    </>
  );
};

const DummyCopyToClipboardRefText = () => {
  const [copy, setCopy] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <div ref={inputRef}>this is a test ref text</div>
      <CopyToClipboard
        ref={inputRef}
        // @ts-expect-error
        onCopy={(value: string) => setCopy(value)}
      />
      <div data-testid="copied">{copy}</div>
    </>
  );
};
const mockUseRef = (obj: any) => () =>
  Object.defineProperty({}, 'current', {
    get: () => obj,
    set: () => {},
  });

describe('CopyToClipboard', () => {
  beforeEach(() => {
    document.execCommand = jest.fn();
  });
  it('should render the component', () => {
    const inputRef = mockUseRef({ refFunction: jest.fn() });
    const onCopyHandler = jest.fn();
    render(<CopyToClipboard ref={inputRef} onCopy={onCopyHandler} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('should render an icon', () => {
    const inputRef = mockUseRef({ refFunction: jest.fn() });
    const onCopyHandler = jest.fn();
    render(
      <CopyToClipboard
        ref={inputRef}
        onCopy={onCopyHandler}
        icon={<img src="" alt="test" />}
      />
    );
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
  });
  it('should render a custom content', () => {
    const inputRef = mockUseRef({ refFunction: jest.fn() });
    const onCopyHandler = jest.fn();
    render(
      <CopyToClipboard ref={inputRef} onCopy={onCopyHandler}>
        <div>custom</div>
      </CopyToClipboard>
    );
    const customValue = screen.getByText('custom');
    expect(customValue).toBeInTheDocument();
  });
  it('should allow to pass a class', () => {
    const inputRef = mockUseRef({ refFunction: jest.fn() });
    const onCopyHandler = jest.fn();
    render(
      <CopyToClipboard ref={inputRef} onCopy={onCopyHandler} className="test">
        <div>custom</div>
      </CopyToClipboard>
    );
    const button: any = screen.getByRole('button');
    expect(button.getAttribute('class')).toBe('test');
  });
  it('should copy the content with ref', () => {
    render(<DummyCopyToClipboardRef />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const copiedValue = screen.getByTestId('copied');
    expect(copiedValue.innerHTML).toBe('this is a test');
  });

  it('should copy the content with text', () => {
    render(<DummyCopyToClipboardText />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const copiedValue = screen.getByTestId('copied');
    expect(copiedValue.innerHTML).toBe('copy me');
  });

  it('should copy the content of div with ref', () => {
    render(<DummyCopyToClipboardRefText />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const copiedValue = screen.getByTestId('copied');
    expect(copiedValue.innerHTML).toBe('this is a test ref text');
  });

  it('should copy the content of div with ref and hidden value', () => {
    render(<DummyCopyToClipboardRefHidden />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const copiedValue = screen.getByTestId('copied');
    expect(copiedValue.innerHTML).toBe('helloWorld');
  });

  it('should have 0 tabIndex value by default', () => {
    const onCopyHandler = jest.fn();

    render(
      <CopyToClipboard onCopy={onCopyHandler}>
        <div>custom</div>
      </CopyToClipboard>
    );

    const button: any = screen.getByRole('button');

    expect(button.getAttribute('tabindex')).toBe('0');
  });

  it('should accept tabIndex attribute', () => {
    const onCopyHandler = jest.fn();

    render(
      <CopyToClipboard tabIndex={1} onCopy={onCopyHandler}>
        <div>custom</div>
      </CopyToClipboard>
    );

    const button: any = screen.getByRole('button');

    expect(button.getAttribute('tabindex')).toBe('1');
  });
});
