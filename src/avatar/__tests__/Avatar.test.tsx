import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Avatar } from '../Avatar';

describe('Avatar', () => {
  it('should render an image', () => {
    const { container } = render(<Avatar src="test.jpg" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    const div = container.querySelector('div');
    expect(div).toBeInTheDocument();
  });

  it('should render an avatar with default shape', () => {
    const { container } = render(<Avatar />);
    const div = container.querySelector('div');
    expect(div?.style.borderRadius).toBe('50%');
  });

  it('should render an avatar with circle shape styling', () => {
    const { container } = render(<Avatar shape="circle" />);
    const div = container.querySelector('div');
    expect(div?.style.borderRadius).toBe('50%');
  });

  it('should render an avatar with rounded shape styling', () => {
    const { container } = render(<Avatar shape="rounded" />);
    const div = container.querySelector('div');
    expect(div?.style.borderRadius).toBe('4px');
  });

  it('should render an avatar with custom styling', () => {
    const { container } = render(
      <Avatar shape="circle" style={{ fontSize: '28px' }} />
    );
    const div = container.querySelector('div');
    expect(div?.style.borderRadius).toBe('50%');
    expect(div?.style.fontSize).toBe('28px');
  });

  it('should render an circle variant avatar with custom styling', () => {
    const { container } = render(
      <Avatar shape="circle" style={{ fontSize: '28px' }} />
    );
    const div = container.querySelector('div');
    expect(div?.style.fontSize).toBe('28px');
    expect(div?.style.borderRadius).toBe('50%');
  });

  it('should render an avatar circle variant with custom styling merged into styles', () => {
    const { container } = render(
      <Avatar shape="circle" style={{ fontSize: '28px' }} />
    );
    const div = container.querySelector('div');
    expect(div?.style.borderRadius).toBe('50%');
    expect(div?.style.fontSize).toBe('28px');
  });

  it('should render an avatar with letters', () => {
    const { container } = render(<Avatar>test</Avatar>);
    const div = container.querySelector('div');
    expect(div?.innerHTML).toContain('test');
  });

  it('should render with a classname', () => {
    const { container } = render(<Avatar className="test">text</Avatar>);
    const div = container.querySelector('div');
    expect(div?.className).toBe('test');
  });

  it('should render with a default background colour', () => {
    const { container } = render(<Avatar className="test">text</Avatar>);
    const div = container.querySelector('div');
    expect(div?.style.backgroundColor).toBe('rgb(189, 189, 189)');
  });

  it('should render with the selected preset background colour', () => {
    let divPointer;
    let containerPointer;

    //dark theme
    containerPointer = render(
      <Avatar backgroundColourOption="dark">text</Avatar>
    ).container;
    divPointer = containerPointer.querySelector('div');
    expect(divPointer?.style.backgroundColor).toBe('rgb(0, 0, 0)');

    // light theme
    containerPointer = render(
      <Avatar backgroundColourOption="light">text</Avatar>
    ).container;
    divPointer = containerPointer.querySelector('div');
    expect(divPointer?.style.backgroundColor).toBe('rgb(255, 255, 255)');
  });
});
