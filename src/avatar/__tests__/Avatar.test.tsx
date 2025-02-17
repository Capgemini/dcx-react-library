import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Avatar } from '../Avatar';

describe('Avatar', () => {
  it('should render an image', () => {
    const { container } = render(
      <Avatar src="http://somewebsite.io/test.jpg" alt="sample alt text" />
    );
    const img = container.querySelector('img');
    expect(img?.src).toEqual('http://somewebsite.io/test.jpg');
    expect(img?.alt).toEqual('sample alt text');
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

  it('should render an anchor tag if avatarLink and avatarLinkTarget prop is passed', () => {
    const testUrl = 'http://test.url/';

    const { container } = render(
      <Avatar className="test" avatarLink={testUrl} avatarLinkTarget="_blank">
        text
      </Avatar>
    );
    const anchor = container.querySelector('a');
    expect(anchor?.href).toBe(testUrl);
    expect(anchor?.target).toBe('_blank');
  });

  it('should not render avatarLinkTarget if avatarLink prop is not passed', () => {
    const { container } = render(
      <Avatar className="test" avatarLinkTarget="_blank">
        text
      </Avatar>
    );
    const anchor = container.querySelector('a');
    expect(anchor?.href).toBeUndefined();
    expect(anchor?.target).toBeUndefined();
  });

  it('should have a default width and height', () => {
    const { container } = render(<Avatar className="test">text</Avatar>);
    const div = container.querySelector('div');
    expect(div?.style.width).toBe('40px');
    expect(div?.style.height).toBe('40px');
  });

  it('should accept a width and height prop', () => {
    const { container } = render(
      <Avatar className="test" width="4em" height="4em">
        text
      </Avatar>
    );
    const div = container.querySelector('div');
    expect(div?.style.width).toBe('4em');
    expect(div?.style.height).toBe('4em');
  });

  it('should accept border [color, width, style] props', () => {
    const { container } = render(
      <Avatar
        className="test"
        borderWidth="2px"
        borderStyle="dashed"
        borderColor="#66cc00"
      >
        text
      </Avatar>
    );
    const div = container.querySelector('div');
    expect(div?.style.borderWidth).toBe('2px');
    expect(div?.style.borderStyle).toBe('dashed');
    expect(div?.style.borderColor).toBe('#66cc00');
  });

  it('should pass classname to child components', () => {
    render(<Avatar childClassName="test" src="test.jpg" />);
    const img = screen.getByRole('img');
    expect(img).toHaveClass('test');
  });

  it('should pass styles to child components', () => {
    const { container } = render(
      <Avatar
        childClassName="childComponent"
        childStyle={{ backgroundColor: 'red' }}
        src="test.jpg"
      ></Avatar>
    );
    const div = container.querySelector('.childComponent');
    expect(div).toHaveStyle('background-color: red');
  });

  describe('image failure fallbacks', () => {
    it('should render the provided children', () => {
      const { container } = render(
        <Avatar 
          defaultAvatarImg="http://test.url/fallback.png"
          src="samplewebsite.com/wont-load.jpg" 
        >test</Avatar>
      );

      fireEvent.error(screen.getByRole('img'));
      const div = container.querySelector('div');
      expect(div?.innerHTML).toEqual('test');
    });

    it('should render the provided children even if alt text is provided', () => {
      const { container } = render(
        <Avatar
          alt="sample alt text"
          defaultAvatarImg="http://test.url/fallback.png"
          src="samplewebsite.com/wont-load.jpg"
        >
          test
        </Avatar>
      );
      fireEvent.error(screen.getByRole('img'));

      const div = container.querySelector('div');
      expect(div?.innerHTML).toEqual('test');
    });

    it('should render the first letter of the alt text', () => {
      const { container } = render(
        <Avatar
          alt="sample alt text"
          defaultAvatarImg="http://test.url/fallback.png"
          src="samplewebsite.com/wont-load.jpg" 
        />
      );
      const div = container.querySelector('div');
      fireEvent.error(screen.getByRole('img'));

      expect(div?.innerHTML).toEqual('s');
    });

    it('should render a generic avatar icon', () => {
      const { container } = render(<Avatar defaultAvatarImg="http://test.url/fallback.png" src="wont-load.jpg" />);
      const img = container.querySelector('img');
      fireEvent.error(screen.getByRole('img'));

      expect(img?.src).toEqual('http://test.url/fallback.png');
    });
  });
});
