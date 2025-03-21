import React from 'react';
import { classNames } from '../common/utils';

type Props = {
  /**
   * optional CSS class name
   */
  className?: string;
  /**
   * title of the abbreviate
   */
  title?: string;
  /**
   * content of the code snippet
   */
  value: string | number;
  /**
   * Child components can also used for Abbreviate content
   */
  children: string | number | JSX.Element;
  /**
   * Additional props/attributes
   */

  props?: React.HTMLAttributes<HTMLElement>;
};

type AbbreviateValue = Omit<Props, 'children'>;
type AbbreviateChildren = Omit<Props, 'value'>;
type AbbreviateProps = AbbreviateValue | AbbreviateChildren;

const isValueType = (p: any): p is AbbreviateValue => !!p.value;
const isChildrenType = (p: any): p is AbbreviateChildren => !!p.children;

export const Abbreviate = ({
  className,
  props,
  title,
  ...rest
}: AbbreviateProps) => {
  const dynamicClassName = classNames(['dcx-abbreviate', className]);

  let content!: string | number | JSX.Element;

  if (isChildrenType(rest)) content = rest.children;
  if (isValueType(rest)) content = rest.value;

  return (
    <abbr className={dynamicClassName} title={title} {...props}>
      {content}
    </abbr>
  );
};
