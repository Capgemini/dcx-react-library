import React from 'react';
import { render } from '@testing-library/react';
import { DragResize, FirstPane } from '../DragResize';

type DummyFirstPaneProps = {
  width?: number;
  height?: number;
  className?: string;
  mockSetWidth: (value: number) => void;
  mockSetHeight: (value: number) => void;
  orientation?: 'vertical' | 'horizontal';
};

const DummyFirstPane = (
  {
    width,
    height,
    className,
    mockSetHeight,
    mockSetWidth,
    orientation = 'vertical',
  }: DummyFirstPaneProps = {
    height: 0,
    width: 0,
    className: 'paneClassName',
    mockSetHeight: () => {},
    mockSetWidth: () => {},
  }
) => (
  <FirstPane
    children={<div>Hi</div>}
    width={width}
    height={height}
    setHeight={mockSetHeight}
    setWidth={mockSetWidth}
    orientation={orientation}
    className={className}
  />
);

describe('DragResize', () => {
  it('should render the component', () => {
    const { container } = render(
      <DragResize
        firstPane={DummyFirstPane()}
        secondPane={DummyFirstPane()}
        containerClassName={'containerClass'}
      />
    );

    expect(container.querySelector('.containerClass')).not.toBeNull();
  });

  it('should render the component when horizontal', () => {
    const mockSetWidth = jest.fn();
    const mockSetHeight = jest.fn();

    const { container } = render(
      <DragResize
        firstPane={DummyFirstPane({
          width: 0,
          height: 10,
          className: 'firstPaneClass',
          mockSetHeight: mockSetHeight,
          mockSetWidth: mockSetWidth,
          orientation: 'horizontal',
        })}
        secondPane={DummyFirstPane()}
        containerClassName={'containerClass'}
        orientation={'horizontal'}
      />
    );

    expect(
      container.querySelector('.firstPaneClass')?.getAttribute('style')
    ).toBe('height: 10px;');
  });

  it('should set the width to current width of first pane', () => {
    const mockSetWidth = jest.fn();
    const mockSetHeight = jest.fn();

    render(
      <DragResize
        firstPane={DummyFirstPane({
          width: undefined,
          height: 0,
          className: 'firstPaneClass',
          mockSetHeight: mockSetHeight,
          mockSetWidth: mockSetWidth,
        })}
        secondPane={DummyFirstPane()}
        containerClassName={'containerClass'}
      />
    );

    expect(mockSetWidth).toHaveBeenCalledWith(0);
    expect(mockSetHeight).not.toHaveBeenCalled();
  });

  it('should set the width to current width of first pane', () => {
    const mockSetWidth = jest.fn();
    const mockSetHeight = jest.fn();

    render(
      <DragResize
        firstPane={DummyFirstPane({
          width: 0,
          height: undefined,
          className: 'firstPaneClass',
          mockSetHeight: mockSetHeight,
          mockSetWidth: mockSetWidth,
          orientation: 'horizontal',
        })}
        secondPane={DummyFirstPane()}
        containerClassName={'containerClass'}
      />
    );

    expect(mockSetWidth).not.toHaveBeenCalled();
    expect(mockSetHeight).toHaveBeenCalledWith(0);
  });

  it('should set width and height state to given firstPaneMiniSize', () => {
    const mockSetWidth = jest.fn();
    const mockSetHeight = jest.fn();

    const { container } = render(
      <DragResize
        firstPane={<div></div>}
        secondPane={<div></div>}
        firstPaneMinSize={100}
        firstPaneClassName={'firstPanelClassName'}
      />
    );

    expect(
      container.querySelector('.firstPanelClassName')?.getAttribute('style')
    ).toBe('width: 100px;');

    expect(mockSetWidth).not.toHaveBeenCalled();
    expect(mockSetHeight).not.toHaveBeenCalled();
  });

  it('should render first panel without ref', () => {
    jest.spyOn(React, 'useRef').mockReturnValue({ current: null });

    const { container } = render(
      <DragResize
        firstPane={<div></div>}
        secondPane={<div></div>}
        firstPaneMinSize={100}
        firstPaneClassName={'firstPanelClassName'}
      />
    );

    expect(container.querySelector('.firstPanelClassName')).not.toBeNull();

    jest.restoreAllMocks();
  });
});
