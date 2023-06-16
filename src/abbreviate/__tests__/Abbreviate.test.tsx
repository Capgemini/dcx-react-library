import React from 'react';
import { Abbreviate } from '../Abbreviate';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Abbreviate', () => {
  it('should render', () => {
    const { container } = render(
      <Abbreviate  title="Laugh Out Loud" value="LOL"/>
    );
    expect(container.querySelector('abbr')).toBeInTheDocument();
  });
  it('should allow to pass a value', () => {
    render(
      <Abbreviate
        className="abbreviate"
        value="WHO"
        title="World Health Organization"
      />
      
    );
    expect(screen.getByText('WHO')).toBeInTheDocument();
  });

  it('should provide the ability to specify arbitrary props', () => {
    const { container } = render(
      <Abbreviate
        className="abbreviate"
        title="Laugh Out Loud"
        value="LOL"
        props={{ id: 'my-abbreviate' }}
      />
    );
    expect(container.querySelector('#my-abbreviate')).toBeInTheDocument();
  });

  it('should contains a class called dcx-abbreviate', () => {
    const { container } = render(
      <Abbreviate title="Laugh Out Loud" value="LOL" />
    );
    expect(container.querySelector('.dcx-abbreviate')).toBeInTheDocument();
  });
  it('should contains the class dcx-abbreviate and the class decided by the developer', () => {
    const { container } = render(
      <Abbreviate
        className="my-classname"
        value="LOL"
        title="Laugh Out Loud"
      />
    );
    expect(container.querySelector('.dcx-abbreviate')).toBeInTheDocument();
    expect(container.querySelector('.my-classname')).toBeInTheDocument();
  });
});
