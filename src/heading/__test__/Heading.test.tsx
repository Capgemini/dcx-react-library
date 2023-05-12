import React from 'react';
import { Heading } from '../Heading';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Heading', () => {
  it('h1 rendered', () => {
    const { container } = render(
      <Heading id="test" label="This is a Level 1 Heading" level="h1" />
    );
    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('h2 rendered', () => {
    const { container } = render(
      <Heading id="test" label="This is a Level 2 Heading" level="h2" />
    );
    expect(container.querySelector('h2')).toBeInTheDocument();
  });

  it('h3 rendered', () => {
    const { container } = render(
      <Heading id="test" label="This is a Level 3 Heading" level="h3" />
    );
    expect(container.querySelector('h3')).toBeInTheDocument();
  });

  it('h4 rendered', () => {
    const { container } = render(
      <Heading id="test" label="This is a Level 4 Heading" level="h4" />
    );
    expect(container.querySelector('h4')).toBeInTheDocument();
  });

  it('h5 rendered', () => {
    const { container } = render(
      <Heading id="test" label="This is a Level 5 Heading" level="h5" />
    );
    expect(container.querySelector('h5')).toBeInTheDocument();
  });

  it('h6 rendered', () => {
    const { container } = render(
      <Heading id="test" label="This is a Level 6 Heading" level="h6" />
    );
    expect(container.querySelector('h6')).toBeInTheDocument();
  });

  it('id attribute rendered', () => {
    const { container } = render(
      <Heading id="first" label="This is a Level 1 Heading" level="h1" />
    );
    expect(container.querySelector('#first')).toBeInTheDocument();
  });

  it('dcx-heading classes are rendered', () => {
    const { container } = render(
      <Heading id="first" label="This is a Level 1 Heading" level="h1" />
    );
    expect(
      container.querySelector('.dcx-heading.dcx-heading-h1')
    ).toBeInTheDocument();
  });

  it('dcx-heading class and additional classes are rendered', () => {
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

  it('the ability to provide other heading props', () => {
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

  it('Renders content in Header', () => {
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
