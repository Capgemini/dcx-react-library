import React, { useEffect, useState, useRef } from 'react';
import style from './dragResize.module.css';

export type DragResizeProps = {
  /**
   * first pane content
   */
  firstPane: React.ReactElement;
  /**
   * second pane content
   */
  secondPane: React.ReactElement;
  /**
   * container className
   */
  containerClassName?: string;
  /**
   * divider className
   */
  dividerClassName?: string;
  /**
   * first pane className
   */
  firstPaneClassName?: string;
  /**
   * initial width/height of first pane
   */
  firstPaneMinSize?: number;
  /**
   * orientation horizontal or vertical
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * second pane className
   */
  secondPaneClassName?: string;
};

export type FirstPaneProps = {
  children: JSX.Element;
  width: number | undefined;
  height: number | undefined;
  setWidth: (value: number) => void;
  setHeight: (value: number) => void;
  orientation: string;
  className: string | undefined;
};

export const FirstPane = ({
  children,
  width,
  height,
  setWidth,
  setHeight,
  orientation,
  className,
}: FirstPaneProps) => {
  const firstRef = useRef<HTMLDivElement>(null);
  const isVertical = orientation === 'vertical';

  useEffect(() => {
    if (firstRef.current !== null && isVertical && width === undefined) {
      setWidth(firstRef.current.clientWidth);
      return;
    } else if (
      firstRef.current !== null &&
      !isVertical &&
      height === undefined
    ) {
      setHeight(firstRef.current.clientHeight);
      return;
    }

    if (firstRef.current) {
      isVertical
        ? (firstRef.current.style.width = `${width}px`)
        : (firstRef.current.style.height = `${height}px`);
    }
  }, [firstRef, width, height, setWidth, setHeight, isVertical]);

  return (
    <div ref={firstRef} className={className}>
      {children}
    </div>
  );
};

export const DragResize = ({
  firstPane,
  secondPane,
  containerClassName,
  dividerClassName,
  firstPaneClassName,
  firstPaneMinSize = 50,
  orientation = 'vertical',
  secondPaneClassName,
}: DragResizeProps) => {
  const [width, setWidth] = useState<undefined | number>(firstPaneMinSize);
  const [height, setHeight] = useState<undefined | number>(firstPaneMinSize);
  const [dividerXPos, setDividerXPos] = useState<undefined | number>(undefined);
  const [dividerYPos, setDividerYPos] = useState<undefined | number>(undefined);
  const [dragging, setDragging] = useState(false);
  const isVertical = orientation === 'vertical';
  const splitPaneRef = useRef<HTMLDivElement>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    isVertical ? setDividerXPos(e.clientX) : setDividerYPos(e.clientY);
    setDragging(true);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isVertical
      ? setDividerXPos(e.touches[0].clientX)
      : setDividerYPos(e.touches[0].clientY);
    setDragging(true);
  };

  const onMove = (clientX: number, clientY: number) => {
    if (isVertical) {
      if (dragging && width && dividerXPos) {
        const newWidth = width + clientX - dividerXPos;
        setDividerXPos(clientX);

        if (newWidth < firstPaneMinSize) {
          setWidth(firstPaneMinSize);
          return;
        }

        setWidth(newWidth);
      }
    }
    if (!isVertical) {
      if (dragging && height && dividerYPos) {
        const newHeight = height + clientY - dividerYPos;
        setDividerYPos(clientY);

        if (newHeight < firstPaneMinSize) {
          setHeight(firstPaneMinSize);
          return;
        }

        setHeight(newHeight);
      }
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    onMove(e.clientX, e.clientY);
  };

  const onTouchMove = (e: TouchEvent) => {
    onMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  });

  return (
    <>
      <div
        className={`${
          isVertical ? style.dragResizeContainerV : style.dragResizeContainerH
        } ${containerClassName}`}
        ref={splitPaneRef}
      >
        <FirstPane
          orientation={orientation}
          className={firstPaneClassName}
          width={isVertical ? width : undefined}
          height={!isVertical ? height : undefined}
          setWidth={setWidth}
          setHeight={setHeight}
        >
          {firstPane}
        </FirstPane>
        <div
          className={`${
            isVertical ? style.dividerV : style.dividerH
          } ${dividerClassName}`}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onMouseUp}
        />
        <div className={secondPaneClassName} style={{ alignItems: 'stretch' }}>
          {secondPane}
        </div>
      </div>
    </>
  );
};
