import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CardContent } from '../CardContent';

describe('CardContent', () => {
  const dummyChild = <p>content text</p>;

  it('should render without errors', () => {
    const { container } = render(<CardContent>{dummyChild}</CardContent>);

    expect(container.querySelector('.dcx-card-content')).toBeInTheDocument();
  });

  it('should have the default className if not other classes are specified', () => {
    const { getByTestId } = render(
      <CardContent data-testid="content-testid">{dummyChild}</CardContent>
    );
    expect(getByTestId('content-testid')).toBeInTheDocument();
    expect(getByTestId('content-testid')).toHaveClass('dcx-card-content');
  });

  it('should allow to pass a custom className', () => {
    const { container } = render(
      <CardContent className="my-custom-class">{dummyChild}</CardContent>
    );
    expect(container.querySelector('.dcx-card-content')).toBeInTheDocument();
    expect(container.querySelector('.dcx-card-content')).toHaveClass(
      'dcx-card-content my-custom-class'
    );
  });

  it('should render a child element', () => {
    render(<CardContent>{dummyChild}</CardContent>);
    const childElement = screen.getByText('content text');
    expect(childElement).toBeInTheDocument();
  });

  it('should render children elements', () => {
    const { container } = render(
      <CardContent>
        <p>paragraph</p>
        <span>article date</span>
      </CardContent>
    );
    const parent = container.querySelector('.dcx-card-content');
    expect(parent).toBeInTheDocument();
    expect(parent?.children.length).toBe(2);
  });

  it('should pass additional props', () => {
    const additionalProps = {
      'data-testid': 'custom-test-id',
      'aria-label': 'custom label',
    };

    const { container } = render(
      <CardContent {...additionalProps}>{dummyChild}</CardContent>
    );
    const component = container.querySelector('.dcx-card-content');
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute('aria-label', 'custom label');
    expect(component).toHaveAttribute('data-testid', 'custom-test-id');
  });
});
