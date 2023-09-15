import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Label } from '../Label';

describe('Label', () => {
  it('should render', () => {
    render(
      <Label className="additional classes" value="text" id="user-defined-id" />
    );
    expect(screen.getByText('text')).toBeInTheDocument();
  });

  it('should render with the dcx-label className when no className Provided', () => {
    const { container } = render(<Label value="text" />);
    expect(container.querySelector('.dcx-label')).toBeInTheDocument();
  });

  it('should be able to render the dcx-label and the user specific className', () => {
    const { container } = render(<Label value="text" className="styleOne" />);
    expect(container.querySelector('.dcx-label')).toBeInTheDocument();
    expect(container.querySelector('.styleOne')).toBeInTheDocument();
  });

  it('should be able to pass an id', () => {
    const { container } = render(<Label value="text" id="my_id" />);
    expect(container.firstChild).toHaveAttribute('id', 'my_id');
  });

  it('should be able to pass some extra properties', () => {
    const { container } = render(
      <Label value="text" props={{ style: { color: 'red' } }} />
    );
    const labelElement = container.getElementsByClassName('dcx-label');
    const style = window.getComputedStyle(labelElement[0]);
    expect(style.color).toBe('red');
  });
});
