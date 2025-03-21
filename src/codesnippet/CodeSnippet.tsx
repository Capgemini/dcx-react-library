import React from 'react';
import { classNames } from '../common/utils';

type Props = {
  /**
   * optional CSS class name
   */
  className?: string;
  /**
   * content of the code snippet
   */
  value: string | number;
  /**
   * Child components can also used for CodeSnippet content
   */
  children: string | number | JSX.Element;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLElement>;
};

type CodeSnippetValue = Omit<Props, 'children'>;
type CodeSnippetChildren = Omit<Props, 'value'>;
type CodeSnippetProps = CodeSnippetValue | CodeSnippetChildren;

const isValueType = (p: any): p is CodeSnippetValue => !!p.value;
const isChildrenType = (p: any): p is CodeSnippetChildren => !!p.children;

export const CodeSnippet = ({
  className,
  props,
  ...rest
}: CodeSnippetProps) => {
  const dynamicClassName = classNames(['dcx-code', className]);

  let content!: string | number | JSX.Element;

  if (isChildrenType(rest)) content = rest.children;
  if (isValueType(rest)) content = rest.value;

  return (
    <code className={dynamicClassName} {...props}>
      {content}
    </code>
  );
};
