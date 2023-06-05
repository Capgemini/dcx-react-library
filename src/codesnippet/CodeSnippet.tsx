import React from 'react';
import { classNames } from '../common/utils';


type CodeSnippetProps = {
    /**
   * optional CSS class name
   */
    className?: string;
    /**
   * content of the code snippet
   */
    value: string | number;
    /**
   * Additional props/attributes
   */
    props?: React.HTMLAttributes<HTMLQuoteElement>;
};


export const CodeSnippet = ({ className, value, props }: CodeSnippetProps) => {
    const dynamicClassName = classNames(['dcx-code', className]);

    return (
        <code className={dynamicClassName} {...props}>
                {value}
        </code>
        );
};