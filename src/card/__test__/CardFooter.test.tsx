import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CardFooter } from '../CardFooter';

describe('CardFooter', () => {
  const dummyChild = <p>content text</p>;

  it('should render without errors', () => {
    const { container } = render(<CardFooter>{dummyChild}</CardFooter>);

    expect(container.querySelector('.dcx-card-footer')).toBeInTheDocument();
  });

  it('should have the default className if not other classes are specified', () => {
    const { getByTestId } = render(
      <CardFooter data-testid="footer-testid">{dummyChild}</CardFooter>
    );
    expect(getByTestId('footer-testid')).toBeInTheDocument();
    expect(getByTestId('footer-testid')).toHaveClass('dcx-card-footer');
  });

  it('should allow to pass a custom className', () => {
    const { container } = render(
      <CardFooter className="my-custom-class">{dummyChild}</CardFooter>
    );
    expect(container.querySelector('.dcx-card-footer')).toBeInTheDocument();
    expect(container.querySelector('.dcx-card-footer')).toHaveClass(
      'dcx-card-footer my-custom-class'
    );
  });

  it('should render a child element', () => {
    render(<CardFooter>{dummyChild}</CardFooter>);
    const childElement = screen.getByText('content text');
    expect(childElement).toBeInTheDocument();
  });

  it('should render children elements', () => {
    const { container } = render(
      <CardFooter>
        <p>paragraph</p>
        <span>footer contacts</span>
      </CardFooter>
    );
    const parent = container.querySelector('.dcx-card-footer');
    expect(parent).toBeInTheDocument();
    expect(parent?.children.length).toBe(2);
  });

  it('should pass additional props', () => {
    const additionalProps = {
      'data-testid': 'custom-test-id',
      'aria-label': 'custom label',
    };

    const { container } = render(
      <CardFooter {...additionalProps}>{dummyChild}</CardFooter>
    );
    const component = container.querySelector('.dcx-card-footer');
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute('aria-label', 'custom label');
    expect(component).toHaveAttribute('data-testid', 'custom-test-id');
  });
});
