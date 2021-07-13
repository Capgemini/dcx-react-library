import React from 'react';
import styles from './tooltip.module.css';

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
   * width for the tip, default value - 250px;
   */
  width: string;
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
  width,
  content,
  direction = 'top',
  delay = 400,
  ...props
}: ToolTipProps) => {
  let timeout: any;
  const [active, setActive] = React.useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div
          className={[styles.tooltip, direction].join(' ')}
          style={{
            color: color,
            background: background,
            width: width,
            ['--tooltip-background-color' as any]: background,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};
