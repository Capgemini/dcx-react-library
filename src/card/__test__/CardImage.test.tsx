import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { CardImage } from '../CardImage';

describe('CardImage', () => {
  it('should render without errors', () => {
    const { container } = render(
      <CardImage src="dummy.jpg" alt="alternative" />
    );

    expect(container.querySelector('.dcx-card-image')).toBeInTheDocument();
  });

  it('should have the default className if not other classes are specified', () => {
    const { getByTestId } = render(
      <CardImage src="dummy.jpg" alt="alternative" data-testid="image-testid" />
    );
    expect(getByTestId('image-testid')).toBeInTheDocument();
    expect(getByTestId('image-testid')).toHaveClass('dcx-card-image');
  });

  it('should allow to pass a custom className', () => {
    const { container } = render(
      <CardImage
        src="dummy.jpg"
        alt="alternative"
        className="my-custom-class"
      />
    );
    expect(container.querySelector('.dcx-card-image')).toBeInTheDocument();
    expect(container.querySelector('.dcx-card-image')).toHaveClass(
      'dcx-card-image my-custom-class'
    );
  });

  it('should pass additional props', () => {
    const additionalProps = {
      'data-testid': 'custom-test-id',
      'aria-label': 'custom label',
    };

    const { container } = render(
      <CardImage src="dummy.jpg" alt="alternative" {...additionalProps} />
    );
    const component = container.querySelector('.dcx-card-image');
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute('aria-label', 'custom label');
    expect(component).toHaveAttribute('data-testid', 'custom-test-id');
  });
});
