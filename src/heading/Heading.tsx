import React from 'react';
import { classNames } from '../common/utils';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  /**
   * Content of the Heading
   */
  label: string;

  /**
   * Level of the heading (h1-h6)
   */
  level: HeadingLevel;

  /**
   * CSS Classes of the heading
   */
  className?: string;

  /**
   * Unique html #id of the heading
   */
  id?: string;

  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLHeadingElement>;
};

export const Heading = ({
  label,
  level,
  className,
  id,
  props,
}: HeadingProps) => {
  const dynamicClassName = classNames([
    'dcx-heading',
    `dcx-heading-${level}`,
    className,
  ]);

  const HeaderTag: HeadingLevel = level;

  return (
    <HeaderTag className={dynamicClassName} id={id} {...props}>
      {label}
    </HeaderTag>
  );
};
