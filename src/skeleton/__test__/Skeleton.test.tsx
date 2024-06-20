import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Skeleton } from '../Skeleton';

describe('Skeleton', () => {
  test('renders with mandatory variant prop', () => {
    const { container } = render(<Skeleton variant="text" />);
    expect(container.firstChild).toHaveClass('dcx-skeleton dcx-skeleton-text');
  });

  test('applies default width, and height if not provided', () => {
    const { container } = render(<Skeleton variant="circular" />);
    expect(container.firstChild).toHaveStyle({
      width: '40px',
      height: '40px',
    });
  });

  test('applies custom width, and height if provided', () => {
    const { container } = render(
      <Skeleton variant="rectangular" width="100px" height="50px" />
    );
    expect(container.firstChild).toHaveStyle({
      width: '100px',
      height: '50px',
    });
  });

  test('applies wave animation class if animation prop is "wave"', () => {
    const { container } = render(
      <Skeleton variant="rounded" animation="wave" />
    );
    expect(container.firstChild).toHaveClass('dcx-skeleton-wave');
  });

  test('applies pulsate animation class if animation prop is "pulsate"', () => {
    const { container } = render(
      <Skeleton variant="text" animation="pulsate" />
    );
    expect(container.firstChild).toHaveClass('dcx-skeleton-pulsate');
  });

  test('does not apply animation class if animation prop is not provided', () => {
    const { container } = render(<Skeleton variant="circular" />);
    expect(container.firstChild).not.toHaveClass('wave');
    expect(container.firstChild).not.toHaveClass('pulsate');
  });

  test('sets height and width based on fontSize if variant is text', () => {
    const { container } = render(<Skeleton variant="text" fontSize="2rem" />);
    expect(container.firstChild).toHaveStyle({
      width: '100%',
      height: '2rem',
    });
  });

  it('should rendered a dcx-skeleton class and a user provided className', () => {
    const { container } = render(
      <Skeleton variant="circular" className="test-skeleton" />
    );
    expect(
      container.querySelector('.dcx-skeleton.test-skeleton')
    ).toBeInTheDocument();
  });

  test('passes additional props to the component', () => {
    const { getByTestId } = render(
      <Skeleton variant="rectangular" data-testid="custom-id" />
    );
    expect(getByTestId('custom-id')).toBeInTheDocument();
  });
});
