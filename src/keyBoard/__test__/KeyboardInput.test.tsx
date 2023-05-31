import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { KeyboardInput } from '../KeyboardInput';

describe('KeyboardInput', () => {
  it('should render', () => {
    render(
      <KeyboardInput
        className="additional classes"
        children="text"
        id="user-defined-id"
      />
    );
    expect(screen.getByText('text')).toBeInTheDocument();
  });

  it('should have the class dcx-keyboard-Input if the user does not specify any additional class', () => {
    render(<KeyboardInput children="ctrl+p" id="user-defined-id" />);
    expect(screen.getByText('ctrl+p')).toHaveClass('dcx-keyboard-Input');
  });

  it('should have the class dcx-keyboard-Input and the user based class if the user specifies any additional class', () => {
    render(
      <KeyboardInput
        children="ctrl+p"
        id="user-defined-id"
        className="my-custom-class"
      />
    );
    expect(screen.getByText('ctrl+p')).toHaveClass('dcx-keyboard-Input');
    expect(screen.getByText('ctrl+p')).toHaveClass('my-custom-class');
  });

  it('should be able to pass some extra properties', () => {
    const { container } = render(
      <KeyboardInput
        children="ctrl+p"
        id="user-defined-id"
        props={{ style: { color: 'red' } }}
      />
    );
    const keyboadInputElement =
      container.getElementsByClassName('dcx-keyboard-Input');
    const style = window.getComputedStyle(keyboadInputElement[0]);
    expect(style.color).toBe('red');
  });

  it('should be able to pass an id', () => {
    const { container } = render(
      <KeyboardInput children="ctrl+p" id="user_defined_id" />
    );
    expect(container.firstChild).toHaveAttribute('id', 'user_defined_id');
  });
});
