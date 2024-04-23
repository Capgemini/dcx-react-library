import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Range } from '../Range';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

describe('Range', () => {
  it('should render', () => {
    render(<Range min={0} max={100} />);
    expect(screen.getByLabelText('input-slider')).toBeInTheDocument();
  });

  it('should render a range default min and max values ', () => {
    render(<Range />);
    expect(screen.getByLabelText('input-slider').getAttribute('min')).toBe('0');
    expect(screen.getByLabelText('input-slider').getAttribute('max')).toBe(
      '100'
    );
  });

  it('should render with tooltip', () => {
    render(<Range min={0} max={100} showTooltip={true} />);
    expect(screen.getByLabelText('input-slider').className).toContain(
      'tooltip'
    );
  });

  it('should render disable range', () => {
    render(<Range min={0} max={100} disabled={true} />);
    const range: any = screen.getByLabelText('input-slider');
    expect(range.disabled).toBeTruthy();
  });

  it('should render prefix image', () => {
    render(
      <Range
        min={0}
        max={100}
        prefix={<img aria-label="prefixImg" alt="" src="" />}
      />
    );
    expect(screen.getByLabelText('prefixImg')).toBeInTheDocument();
  });

  it('should render suffix image', () => {
    render(
      <Range
        min={0}
        max={0}
        suffix={<img aria-label="suffixImg" alt="" src="" />}
      />
    );
    expect(screen.getByLabelText('suffixImg')).toBeInTheDocument();
  });

  it('should accept className as attribute', () => {
    render(<Range min={0} max={100} inputClass="test" />);
    const range: any = screen.getByRole('slider');
    expect(range.getAttribute('class')).toBe('test');
  });

  it('should call onChange function', async () => {
    const handleChange = jest.fn();
    render(<Range min={0} max={100} value={50} onChange={handleChange} />);
    fireEvent.change(screen.getByRole('slider'), { target: { value: '80' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('should not call onChange function', async () => {
    const handleChange = jest.fn();
    render(<Range min={0} max={100} value={50} />);
    fireEvent.change(screen.getByRole('slider'), { target: { value: '80' } });
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should call ClickMin function', async () => {
    const handleChange = jest.fn();
    render(
      <Range
        min={0}
        max={100}
        value={50}
        onChangeMin={handleChange}
        prefix={<div data-testid="min-test">Min</div>}
      />
    );
    fireEvent.click(screen.getByTestId('min-test'));
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledWith(0);
  });

  it('should not call ClickMin function', async () => {
    const handleChange = jest.fn();
    render(
      <Range
        min={0}
        max={100}
        value={50}
        prefix={<div data-testid="min-test">Min</div>}
      />
    );
    fireEvent.click(screen.getByTestId('min-test'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should call ClickMax function', async () => {
    const handleChange = jest.fn();
    render(
      <Range
        min={0}
        max={0}
        value={50}
        onChangeMax={handleChange}
        suffix={<div data-testid="max-test">Max</div>}
      />
    );
    fireEvent.click(screen.getByTestId('max-test'));
    expect(handleChange).toHaveBeenCalled();
  });

  it('should not call ClickMax function', async () => {
    const handleChange = jest.fn();
    render(
      <Range
        min={0}
        max={100}
        value={50}
        suffix={<div data-testid="max-test">Max</div>}
      />
    );
    fireEvent.click(screen.getByTestId('max-test'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should have a null tabIndex value by default', () => {
    render(<Range min={0} max={100} value={50} />);

    const slider = screen.getByRole('slider');
    expect(slider.getAttribute('tabindex')).toBeNull();
  });

  it('should accept tabIndex attribute', () => {
    render(<Range min={0} max={100} value={50} tabIndex={1} />);

    const slider = screen.getByRole('slider');
    expect(slider.getAttribute('tabindex')).toBe('1');
  });
});
