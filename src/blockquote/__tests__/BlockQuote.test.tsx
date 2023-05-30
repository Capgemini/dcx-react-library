import React from 'react';
import { BlockQuote } from '..//BlockQuote';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('BlockQuote', () => {
  it('should render', () => {
    const { container } = render(<BlockQuote value="blockquote text" />);
    expect(container.querySelector('p')).toBeInTheDocument();
  });
  it('should allow to pass a value', () => {
    render(<BlockQuote className="blockquote" value="blockQuote text" />);
    expect(screen.getByText('blockQuote text')).toBeInTheDocument();
  });

  it('should provide the ability to specify arbitrary props', () => {
    const { container } = render(
      <BlockQuote
        className="blockquote"
        value="blockquote text"
        props={{ id: 'my-blockquote' }}
      />
    );
    expect(container.querySelector('#my-blockquote')).toBeInTheDocument();
  });

  it('should contains a class called dcx-blockquote', () => {
    const { container } = render(<BlockQuote value="blockQuote text" />);
    expect(container.querySelector('.dcx-blockquote')).toBeInTheDocument();
  });
  it('should contains the class dcx-blockquote and the class decided by the developer', () => {
    const { container } = render(
      <BlockQuote className="my-classname" value="blockQuote text" />
    );
    expect(container.querySelector('.dcx-blockquote')).toBeInTheDocument();
    expect(container.querySelector('.my-classname')).toBeInTheDocument();
  });
});
