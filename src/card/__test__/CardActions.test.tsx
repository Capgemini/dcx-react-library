import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CardActions } from '../CardActions';

describe('CardActions', () => {
  const dummyChild = <button>dummy button</button>;

  it('should render without errors', () => {
    const { container } = render(<CardActions>{dummyChild}</CardActions>);

    expect(container.querySelector('.dcx-card-actions')).toBeInTheDocument();
  });

  it('should have the default className if not other classes are specified', () => {
    const { getByTestId } = render(
      <CardActions data-testid="actions-testid">{dummyChild}</CardActions>
    );
    expect(getByTestId('actions-testid')).toBeInTheDocument();
    expect(getByTestId('actions-testid')).toHaveClass('dcx-card-actions');
  });

  it('should allow to pass a custom className', () => {
    const { container } = render(
      <CardActions className="my-custom-class">{dummyChild}</CardActions>
    );
    expect(container.querySelector('.dcx-card-actions')).toBeInTheDocument();
    expect(container.querySelector('.dcx-card-actions')).toHaveClass(
      'dcx-card-actions my-custom-class'
    );
  });

  it('should render a child element', () => {
    render(<CardActions>{dummyChild}</CardActions>);
    const childElement = screen.getByText('dummy button');
    expect(childElement).toBeInTheDocument();
  });

  it('should render children elements', () => {
    const { container } = render(
      <CardActions>
        {dummyChild}
        {dummyChild}
      </CardActions>
    );
    const parent = container.querySelector('.dcx-card-actions');
    expect(parent).toBeInTheDocument();
    expect(parent?.children.length).toBe(2);
  });

  it('should pass additional props', () => {
    const additionalProps = {
      'data-testid': 'custom-test-id',
      'aria-label': 'custom label',
    };

    const { container } = render(
      <CardActions {...additionalProps}>{dummyChild}</CardActions>
    );
    const component = container.querySelector('.dcx-card-actions');
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute('aria-label', 'custom label');
    expect(component).toHaveAttribute('data-testid', 'custom-test-id');
  });
});
