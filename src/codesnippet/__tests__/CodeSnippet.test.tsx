import React from 'react';
import { CodeSnippet } from '../CodeSnippet';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('CodeSnippet', () => {
  it('should render', () => {
    const { container } = render(
      <CodeSnippet value="CodeSnippet value" />
    );
    expect(container.querySelector('code')).toBeInTheDocument();
  });
  it('should allow to pass a value', () => {
    render(
      <CodeSnippet
        className="code"
        value="Code snippet text"
      />
    );
    expect(screen.getByText('Code snippet text')).toBeInTheDocument();
  });

  it('should provide the ability to specify arbitrary props', () => {
    const { container } = render(
      <CodeSnippet
        className="code"
        value="Code snippet text"
        props={{ id: 'my-code' }}
      />
    );
    expect(container.querySelector('#my-code')).toBeInTheDocument();
  });

  it('should contains a class called dcx-code', () => {
    const { container } = render(
      <CodeSnippet value="Code snippet value"/>
    );
    expect(container.querySelector('.dcx-code')).toBeInTheDocument();
  });
  it('should contains the class dcx-code and the class decided by the developer', () => {
    const { container } = render(
      <CodeSnippet
        className="my-classname"
        value="Code snippet value"
      />
    );
    expect(container.querySelector('.dcx-code')).toBeInTheDocument();
    expect(container.querySelector('.my-classname')).toBeInTheDocument();
  });
});
