import React from 'react';
import { Heading } from '../Heading';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Heading', () => {
  it('should rendered an H1 element', () => {
    const { container } = render(
      <Heading id="test" label="This is a Level 1 Heading" level="h1" />
    );
    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('should rendered an H2 element', () => {
    const { container } = render(
      <Heading id="test" label="This is a Level 2 Heading" level="h2" />
    );
    expect(container.querySelector('h2')).toBeInTheDocument();
  });

  it('should rendered an H3 element', () => {
    const { container } = render(
      <Heading id="test" label="This is a Level 3 Heading" level="h3" />
    );
    expect(container.querySelector('h3')).toBeInTheDocument();
  });

  it('should rendered an H4 element', () => {
    const { container } = render(
      <Heading id="test" label="This is a Level 4 Heading" level="h4" />
    );
    expect(container.querySelector('h4')).toBeInTheDocument();
  });

  it('should rendered an H5 element', () => {
    const { container } = render(
      <Heading id="test" label="This is a Level 5 Heading" level="h5" />
    );
    expect(container.querySelector('h5')).toBeInTheDocument();
  });

  it('should rendered an H6 element', () => {
    const { container } = render(
      <Heading id="test" label="This is a Level 6 Heading" level="h6" />
    );
    expect(container.querySelector('h6')).toBeInTheDocument();
  });

  it('should rendered an id', () => {
    const { container } = render(
      <Heading id="first" label="This is a Level 1 Heading" level="h1" />
    );
    expect(container.querySelector('#first')).toBeInTheDocument();
  });

  it('should rendered a dcx-heading class', () => {
    const { container } = render(
      <Heading id="first" label="This is a Level 1 Heading" level="h1" />
    );
    expect(
      container.querySelector('.dcx-heading.dcx-heading-h1')
    ).toBeInTheDocument();
  });

  it('should rendered a dcx-heading class and a user provided className', () => {
    const { container } = render(
      <Heading
        id="first"
        className="test-heading"
        label="This is a Level 2 Heading"
        level="h2"
      />
    );
    expect(
      container.querySelector('.dcx-heading.dcx-heading-h2.test-heading')
    ).toBeInTheDocument();
  });

  it('should provide the ability to pass other props', () => {
    const { container } = render(
      <Heading
        id="first"
        className="heading"
        label="This is a Level 1 Heading"
        level="h1"
        props={{ role: 'heading' }}
      />
    );
    expect(container.querySelector('h1[role="heading"]')).toBeInTheDocument();
  });

  it('should provid the ability to pass a label', () => {
    render(
      <Heading
        id="first"
        className="heading"
        label="This is a Level 1 Heading"
        level="h1"
      />
    );
    expect(screen.getByText('This is a Level 1 Heading')).toBeInTheDocument();
  });
});
