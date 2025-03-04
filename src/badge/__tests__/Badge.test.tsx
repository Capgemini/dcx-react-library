import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Badge } from '../Badge';

describe('Badge component', () => {
  it('renders badge with children', () => {
    render(
      <Badge>
        <button>Button</button>
      </Badge>
    );

    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('renders badge with badgeContents', () => {
    render(
      <Badge badgeContents="5">
        <button>Button</button>
      </Badge>
    );

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('renders a dot badge when "dot" prop is true', () => {
    render(
      <Badge dot>
        <button>Button</button>
      </Badge>
    );

    const dotBadge = screen.getByTestId('badge');
    const styles = getComputedStyle(dotBadge);
    expect(styles.width).toEqual('8px');
    expect(styles.height).toEqual('8px');
  });

  it('does not render badgeContents when "dot" prop is true', () => {
    render(
      <Badge dot badgeContents="5">
        <button>Button</button>
      </Badge>
    );

    expect(screen.queryByText('5')).not.toBeInTheDocument();
  });

  it('applies custom className to the parent div', () => {
    render(
      <Badge containerClassName="custom-container-class">
        <button>Button</button>
      </Badge>
    );

    const parentDiv = screen.getByText('Button').parentElement;
    expect(parentDiv?.className).toContain('custom-container-class');
  });

  it('applies custom contentsClassName to the badge content div', () => {
    render(
      <Badge badgeContents="5" badgeClassName="custom-contents-class">
        <button>Button</button>
      </Badge>
    );

    const badgeContentDiv = screen.getByText('5'); //.parentElement;
    expect(badgeContentDiv?.className).toEqual('custom-contents-class');
  });

  it('applies default styles for badge container', () => {
    render(
      <Badge badgeContents="10">
        <button>Button</button>
      </Badge>
    );

    const badge = screen.getByText('10');
    const styles = getComputedStyle(badge);

    expect(styles.position).toEqual('absolute');
    expect(styles.backgroundColor).toEqual('');
    expect(styles.color).toEqual('');
    expect(styles.borderRadius).toEqual('50%');
  });

  it('applies correct vertical alignment when "verticalAlignment" is "top"', () => {
    render(
      <Badge verticalAlignment="top" badgeContents="5">
        <button>Button</button>
      </Badge>
    );

    const badge = screen.getByText('5');
    const styles = getComputedStyle(badge);

    expect(styles.top).toEqual('-5px');
    expect(styles.bottom).not.toEqual('-5px');
  });

  it('applies correct vertical alignment when "verticalAlignment" is "bottom"', () => {
    render(
      <Badge verticalAlignment="bottom" badgeContents="5">
        <button>Button</button>
      </Badge>
    );

    const badge = screen.getByText('5');
    const styles = getComputedStyle(badge);

    expect(styles.bottom).toEqual('-5px');
    expect(styles.top).not.toEqual('-5px');
  });

  it('applies correct horizontal alignment when "horizontalAlignment" is "right"', () => {
    render(
      <Badge horizontalAlignment="right" badgeContents="5">
        <button>Button</button>
      </Badge>
    );

    const badge = screen.getByText('5');
    const styles = getComputedStyle(badge);

    expect(styles.right).toEqual('-5px');
    expect(styles.left).not.toEqual('-5px');
  });

  it('applies correct horizontal alignment when "horizontalAlignment" is "left"', () => {
    render(
      <Badge horizontalAlignment="left" badgeContents="5">
        <button>Button</button>
      </Badge>
    );

    const badge = screen.getByText('5');
    const styles = getComputedStyle(badge);

    expect(styles.left).toEqual('-5px');
    expect(styles.right).not.toEqual('-5px');
  });
});
