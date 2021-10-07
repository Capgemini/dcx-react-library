import React from 'react';
import style from './tooltip.module.css';

type Direction = 'top' | 'bottom' | 'left' | 'right';
type ToolTipProps = {
  /**
   * color for text
   */
  color: string;
  /**
   * background - color for background
   */
  background: string;

  /**
   * className for style - width
   */
  className: string;
  /**
   * content for the tooltip
   */
  content: string;
  /**
   * direction for the tooltips - top, bottom, left and right
   */
  direction: Direction;
  /**
   * Delay for the tooltips
   */
  delay: number;
  children?: React.ReactNode;
};

export const ToolTip = ({
  color,
  background,
  className,
  content,
  direction,
  delay,
  ...props
}: ToolTipProps) => {
  let timeout: NodeJS.Timeout;
  const [active, setActive] = React.useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  const containerClassDirection = () => {
    switch (direction) {
      case 'bottom':
        return style.bottom;
      case 'right':
        return style.right;
      case 'left':
        return style.left;
      default:
        return style.top;
    }
  };

  return (
    <div
      className={style.tooltipContainer}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div
          className={[style.tooltip, className, containerClassDirection()].join(
            ' '
          )}
          style={{
            color: color,
            background: background,
            ['--tooltip-background-color' as any]: background,
            ['--tooltip-text-color' as any]: color,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};
