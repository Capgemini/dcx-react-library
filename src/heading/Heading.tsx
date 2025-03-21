import React from 'react';
import { classNames } from '../common/utils';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = {
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
   * Child components can also used for heading content
   */
  children: string | number | JSX.Element;

  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLHeadingElement>;
};

type HeadingLabel = Omit<Props, 'children'>;
type HeadingChildren = Omit<Props, 'label'>;
type HeadingProps = HeadingLabel | HeadingChildren;

const isLabelType = (p: any): p is HeadingLabel => !!p.label;
const isChildrenType = (p: any): p is HeadingChildren => !!p.children;

export const Heading = ({
  level,
  className,
  id,
  props,
  ...rest
}: HeadingProps) => {
  const dynamicClassName = classNames([
    'dcx-heading',
    `dcx-heading-${level}`,
    className,
  ]);

  const HeaderTag: HeadingLevel = level;

  let content!: string | number | JSX.Element;

  if (isChildrenType(rest)) content = rest.children;
  if (isLabelType(rest)) content = rest.label;

  return (
    <HeaderTag className={dynamicClassName} id={id} {...props}>
      {content}
    </HeaderTag>
  );
};
