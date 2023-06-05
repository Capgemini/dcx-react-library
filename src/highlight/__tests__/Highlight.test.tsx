import React from 'react';
import { Highlight } from '../Highlight';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Highlight', () => {
  it('should render', () => {
    const { container } = render(<Highlight text="Highlighted text" />);
    expect(container.querySelector('mark')).toBeInTheDocument();
  });
  it('should allow to pass a value', () => {
    render(<Highlight className="highlight" text="Highlighted text" />);
    expect(screen.getByText('Highlighted text')).toBeInTheDocument();
  });
  it('should contains a class called dcx-highlight', () => {
    const { container } = render(<Highlight text="Highlighted text" />);
    expect(container.querySelector('.dcx-highlight')).toBeInTheDocument();
  });
  it('should contains the class dcx-highlight and relevant classes for shared / reusable styling', () => {
    const { container } = render(
      <Highlight className="my-classname" text="Highlighted text" />
    );
    expect(container.querySelector('.dcx-highlight')).toBeInTheDocument();
    expect(container.querySelector('.my-classname')).toBeInTheDocument();
  });
});
