import React from 'react';
import { classNames } from '../common';

type Props = {
  /**
   * A CSS class for styling label
   */
  className?: string;
  /**
   * define the value of the label
   */
  value: string;
  /**
   * Child components can also used for Label content
   */
  children: JSX.Element;
  /**
   * it will pass an id to the label element
   */
  id?: string;
  /**
   * Additional props/attributes
   */
  props?: React.HtmlHTMLAttributes<HTMLLabelElement>;
};

type LabelValue = Omit<Props, 'children'>;
type LabelChildren = Omit<Props, 'value'>;
type LabelProps = LabelValue | LabelChildren;

const isValueType = (p: any): p is LabelValue => !!p.value;
const isChildrenType = (p: any): p is LabelChildren => !!p.children;

export const Label = ({ className, id, props, ...rest }: LabelProps) => {
  let content!: string | number | JSX.Element;

  if (isChildrenType(rest)) content = rest.children;
  if (isValueType(rest)) content = rest.value;

  return (
    <label className={classNames(['dcx-label', className])} id={id} {...props}>
      {content}
    </label>
  );
};
