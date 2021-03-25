import React from 'react';
import '@testing-library/jest-dom';
import { DynamicComponent } from '../DynamicComponent';
import { render } from '@testing-library/react';

export const Title = (props: any) => {
  const style: any = {
    tag: 'h1',
    color: 'red',
    fontWeight: 'bold',
  };

  return (
    <DynamicComponent dynamicStyle={style} tag="h1">
      {props.children}
    </DynamicComponent>
  );
};

export const Subtitle = (props: any) => {
  const style: any = {
    color: 'red',
    fontWeight: 'bold',
  };

  return (
    <DynamicComponent dynamicStyle={style}>{props.children}</DynamicComponent>
  );
};

describe('DynamicComponent', () => {
  it('should render an h1 component', () => {
    const { container } = render(<Title>title</Title>);
    expect(container.innerHTML).toContain('h1');
  });

  it('should render a div component if the tag is not specified', () => {
    const { container } = render(<Subtitle>subtitle</Subtitle>);
    expect(container.innerHTML).toContain('div');
  });

  it('should render the text', () => {
    const { container } = render(<Title>title</Title>);
    expect(container.textContent).toBe('title');
  });
});
