import React from 'react';
import { Blockquote } from '../Blockquote';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('BlockQuote', () => {
  it('should render', () => {
    const { container } = render(<Blockquote text="blockquote text"  footer="blockquote footer" />);
    expect(container.querySelector('blockquote')).toBeInTheDocument();
  });
  it('should allow to pass a value', () => {
    render(<Blockquote className="blockquote" text="blockQuote text"  footer="blockquote footer" />);
    expect(screen.getByText('blockQuote text')).toBeInTheDocument();
  });

  it('should provide the ability to specify arbitrary props', () => {
    const { container } = render(
      <Blockquote
        className="blockquote"
        text="blockquote text"
        footer="blockquote footer" 
        props={{ id: 'my-blockquote' }}
      />
    );
    expect(container.querySelector('#my-blockquote')).toBeInTheDocument();
  });

  it('should contains a class called dcx-blockquote', () => {
    const { container } = render(<Blockquote text="blockQuote text"  footer="blockquote footer" />);
    expect(container.querySelector('.dcx-blockquote')).toBeInTheDocument();
  });
  it('should contains the class dcx-blockquote and the class decided by the developer', () => {
    const { container } = render(
      <Blockquote className="my-classname" text="blockQuote text"  footer="blockquote footer" />
    );
    expect(container.querySelector('.dcx-blockquote')).toBeInTheDocument();
    expect(container.querySelector('.my-classname')).toBeInTheDocument();
  });
});
