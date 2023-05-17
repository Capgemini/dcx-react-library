import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InsertText } from '../InsertText';

describe('InsertText', () => {
  it('should render', () => {
    render(<InsertText value="insert text" id="user-defined-id" />);

    expect(screen.getByText('insert text')).toBeInTheDocument();
  });

  it('should have the class dcx-insert-text if the user does not specify any additional class', () => {
    render(<InsertText value="insert text" id="user-defined-id" />);
    expect(screen.getByText('insert text')).toHaveClass('dcx-insert-text');
  });

  it('should have the class dcx-insert-text and the user based class if the user specifies any additional class', () => {
    render(
      <InsertText
        value="insert text"
        id="user-defined-id"
        className="my-custom-class"
      />
    );
    expect(screen.getByText('insert text')).toHaveClass('dcx-insert-text');
    expect(screen.getByText('insert text')).toHaveClass('my-custom-class');
  });

  it('should be able to pass some extra properties', () => {
    const { container } = render(
      <InsertText
        value="insert text"
        id="user-defined-id"
        props={{ style: { color: 'red' } }}
      />
    );
    const inserttextElement =
      container.getElementsByClassName('dcx-insert-text');
    const style = window.getComputedStyle(inserttextElement[0]);
    expect(style.color).toBe('red');
  });
});
