import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StepContent } from '../StepContent';

describe('StepContent Component', () => {
  test('renders without crashing', () => {
    const { container } = render(<StepContent />);
    expect(container).toBeInTheDocument();
  });

  test('renders multiple children correctly', () => {
    const { getByText } = render(
      <StepContent>
        <div>Child 1</div>
        <div>Child 2</div>
      </StepContent>
    );
    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });

  test('applies className prop correctly', () => {
    const { container } = render(<StepContent className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  test('visible prop controls display style correctly', () => {
    const { container, rerender } = render(<StepContent visible={false} />);
    expect(container.firstChild).toHaveStyle('display: none');

    rerender(<StepContent visible={true} />);
    expect(container.firstChild).toHaveStyle('display: inherit');
  });
});