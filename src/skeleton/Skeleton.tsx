import React from 'react';
import { classNames } from '../common';

type SkeletonProps = {
  className?: string;
  //it will define the look and feel of the skeleton
  variant: 'text' | 'circular' | 'rectangular' | 'rounded';
  //it will define the background color of the skeleton
  bgColor?: string;
  // this property is used only for the variant text and will define the size of it. If not specified will have 1rem
  fontSize?: string;
  // this property is used for the other variants ('circular' | 'rectangular' | 'rounded') and will define the width of it. If not specified will have 40px
  width?: string;
  // this property is used for the other variants ('circular' | 'rectangular' | 'rounded') and will define the width of it. If not specified will have 40px
  height?: string;
  // this property is used to determine which animation style is used for the skeleton component (wave or pulsate). If this property is not provided then no animation will be used.
  animation?: 'wave' | 'pulsate';
  //additional properties to support something else that we didn't plan
  props?: React.HTMLAttributes<HTMLSpanElement>;
};

export const Skeleton = ({
  className,
  variant,
  bgColor = 'rgb(199, 199, 199)',
  fontSize = '1rem',
  width = '40px',
  height = '40px',
  animation,
  ...props
}: SkeletonProps) => (
  <span
    className={classNames([
      'dcx-skeleton',
      className,
      `dcx-skeleton-variant-${variant}`,
      {
        [`dcx-skeleton-animation-${animation}`]:
          animation !== undefined || animation !== null,
      },
    ])}
    aria-busy={true}
    style={{
      height: `${variant === 'text' ? fontSize : height}`,
      width: `${variant === 'text' ? '100%' : width}`,
      backgroundColor: bgColor,
      display: 'block',
      borderRadius: `${variant === 'circular' ? '50%' : variant === 'rounded' ? '1rem' : null}`,
    }}
    {...props}
  />
);
