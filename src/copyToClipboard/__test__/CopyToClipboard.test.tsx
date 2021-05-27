import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { CopyToClipboard } from '../CopyToClipboard';
import '@testing-library/jest-dom';
const DummyCopyToClipboard = () => {
  const [copy, setCopy] = React.useState('');
  const inputRef = React.useRef(null);
  return (
    <>
      <input value="this is a test" ref={inputRef} onChange={() => {}} />
      <CopyToClipboard
        ref={inputRef}
        onCopy={value => {
          setCopy(value);
        }}
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
  it('should copy the content', () => {
    render(<DummyCopyToClipboard />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const copiedValue = screen.getByTestId('copied');
    expect(copiedValue.innerHTML).toBe('this is a test');
  });
});
