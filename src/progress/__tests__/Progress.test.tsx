import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Progress } from '../Progress';

describe('Progress', () => {
  it('should render an indeterminate progress bar', () => {
    const { container } = render(<Progress label="Progress" max={100} />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(container.querySelector('span')?.getAttribute('style')).toBeNull();
    expect(container.querySelector('span')?.innerHTML).toBe('');
  });

  it('should render an determinate progress bar', () => {
    const { container } = render(
      <Progress label="Progress" max={100} value={80} />
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(container.querySelector('span')?.getAttribute('style')).toEqual(
      'width: 80px;'
    );
    expect(container.querySelector('span')?.innerHTML).toBe('Progress: 80%');
  });

  it('should render a label for the progress bar with a className', () => {
    const { container } = render(
      <Progress
        id="progress-id"
        label="Progress"
        max={100}
        className="my-class"
        value={80}
      />
    );

    expect(container.querySelector('#progress-id')).toBeTruthy();
    expect(container.querySelector('label')?.innerHTML).toBe('Progress: ');
  });

  it('should render a fallback progress bar with a className', () => {
    const { container } = render(
      <Progress label="Progress" max={100} className="my-class" value={80} />
    );

    expect(container.querySelector('progress>div')?.className).toBe('my-class');
  });

  it('should have null tabIndex value by default', () => {
    render(<Progress id="progress-id" label="Progress" max={100} value={80} />);

    const container = screen.getByTestId('progress-id');
    expect(container.getAttribute('tabindex')).toBeNull();
  });

  it('should accept tabIndex attribute', () => {
    render(
      <Progress
        id="progress-id"
        label="Progress"
        max={100}
        value={80}
        tabIndex={1}
      />
    );

    const container = screen.getByTestId('progress-id');
    expect(container.getAttribute('tabindex')).toBe('1');
  });
});
