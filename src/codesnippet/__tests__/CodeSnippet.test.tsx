import React from 'react';
import { CodeSnippet } from '../CodeSnippet';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('CodeSnippet', () => {
  it('should render', () => {
    const { container } = render(
      <CodeSnippet text="CodeSnippet text" />
    );
    expect(container.querySelector('code')).toBeInTheDocument();
  });
  it('should allow to pass a value', () => {
    render(
      <CodeSnippet
        className="code"
        text="Code snippet text"
      />
    );
    expect(screen.getByText('Code snippet text')).toBeInTheDocument();
  });

  it('should provide the ability to specify arbitrary props', () => {
    const { container } = render(
      <CodeSnippet
        className="code"
        text="Code snippet text"
        props={{ id: 'my-code' }}
      />
    );
    expect(container.querySelector('#my-codesnippet')).toBeInTheDocument();
  });

  it('should contains a class called dcx-code', () => {
    const { container } = render(
      <CodeSnippet text="Code snippet text"/>
    );
    expect(container.querySelector('.dcx-code')).toBeInTheDocument();
  });
  it('should contains the class dcx-code and the class decided by the developer', () => {
    const { container } = render(
      <CodeSnippet
        className="my-classname"
        text="Code snippet text"
      />
    );
    expect(container.querySelector('.dcx-code')).toBeInTheDocument();
    expect(container.querySelector('.my-classname')).toBeInTheDocument();
  });
});
