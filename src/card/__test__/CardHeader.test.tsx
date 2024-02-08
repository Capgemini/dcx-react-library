import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CardHeader } from '../CardHeader';

describe('CardHeader', () => {
  const dummyChild = <h4>header text</h4>;

  it('should render without errors', () => {
    const { container } = render(<CardHeader>{dummyChild}</CardHeader>);

    expect(container.querySelector('.dcx-card-header')).toBeInTheDocument();
  });

  it('should have the default className if not other classes are specified', () => {
    const { getByTestId } = render(
      <CardHeader data-testid="header-testid">{dummyChild}</CardHeader>
    );
    expect(getByTestId('header-testid')).toBeInTheDocument();
    expect(getByTestId('header-testid')).toHaveClass('dcx-card-header');
  });

  it('should allow to pass a custom className', () => {
    const { container } = render(
      <CardHeader className="my-custom-class">{dummyChild}</CardHeader>
    );
    expect(container.querySelector('.dcx-card-header')).toBeInTheDocument();
    expect(container.querySelector('.dcx-card-header')).toHaveClass(
      'dcx-card-header my-custom-class'
    );
  });

  it('should render a child element', () => {
    render(<CardHeader>{dummyChild}</CardHeader>);
    const childElement = screen.getByText('header text');
    expect(childElement).toBeInTheDocument();
  });

  it('should render children elements', () => {
    const { container } = render(
      <CardHeader>
        <h1>title</h1>
        <h3>subtitle</h3>
      </CardHeader>
    );
    const parent = container.querySelector('.dcx-card-header');
    expect(parent).toBeInTheDocument();
    expect(parent?.children.length).toBe(2);
  });

  it('should pass additional props', () => {
    const additionalProps = {
      'data-testid': 'custom-test-id',
      'aria-label': 'custom label',
    };

    const { container } = render(
      <CardHeader {...additionalProps}>{dummyChild}</CardHeader>
    );
    const component = container.querySelector('.dcx-card-header');
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute('aria-label', 'custom label');
    expect(component).toHaveAttribute('data-testid', 'custom-test-id');
  });
});
