import React from 'react';
import { classNames } from '../common';

type SkeletonProps = {
  className?: string;
  //it will define the look and feel of the skeleton
  variant: 'text' | 'circular' | 'rectangular' | 'rounded';
  // this property is used only for the variant text and will define the size of it. If not specified will have 1rem
  fontSize?: string;
  // this property is used for the other variants ('circular' | 'rectangular' | 'rounded') and will define the width of it. If not specified will have 40px
  width?: string;
  // this property is used for the other variants ('circular' | 'rectangular' | 'rounded') and will define the width of it. If not specified will have 40px
  height?: string;
  // this property is used to animate the skeleton component thought some css that we need to provide. We want to provide by default the wave and the pulsate animate. When this property is not passed that it will not animate
  // if not provided will disable the animation
  animation?: 'wave' | 'pulsate';
  //additional properties to support something else that we didn't plan
  props?: React.HTMLAttributes<HTMLElement>;
  // accessibility props
  ariaBusy?: boolean;
  ariaLive?: 'polite' | 'assertive' | 'off';
};

export const Skeleton = ({
  className,
  variant,
  fontSize = '1rem',
  width = '40px',
  height = '40px',
  animation,
  ariaBusy,
  ariaLive,
  ...props
}: SkeletonProps) => {
  return (
    <span
      className={classNames([
        'dcx-skeleton',
        className,
        `dcx-skeleton-${variant}`,
        `dcx-skeleton-${animation ? animation : ''}`,
      ])}
      aria-live={ariaLive}
      aria-busy={ariaBusy}
      style={{
        height: `${variant === 'text' ? fontSize : height}`,
        width: `${variant === 'text' ? '100%' : width}`,
        backgroundColor: 'rgb(199, 199, 199)',
        display: 'block',
      }}
      {...props}
    ></span>
  );
};
