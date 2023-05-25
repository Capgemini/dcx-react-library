import React from 'react';
import { Paragraph } from '../Paragraph';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Paragraph', () => {
  
  it('should render', () => {
    const { container } = render(<Paragraph value="paragraph text"/>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });
  it('should allow to pass a value', () => {
    render(<Paragraph className="paragraph" value="paragraph text" />);
    expect(screen.getByText('paragraph text')).toBeInTheDocument();
  });

  it('should provide the ability to specify arbitrary props', () => {
    const { container } = render(
      <Paragraph
        className="paragraph"
        value="paragraph text"
        props= {{ id:'my-paragraph'}}
      />
    );
    expect(container.querySelector('#my-paragraph')).toBeInTheDocument();
  });

  it('should contains a class called dcx-paragraph', () => {
    const { container } = render(<Paragraph value="paragraph text" />);
    expect(container.querySelector('.dcx-paragraph')).toBeInTheDocument();
  });
  it('should contains the class dcx-paragraph and the class decided by the developer', () => {
    const { container } = render(
      <Paragraph className="my-classname" value="paragraph text" />
    );
    expect(container.querySelector('.dcx-paragraph')).toBeInTheDocument();
    expect(container.querySelector('.my-classname')).toBeInTheDocument();
  });
});
