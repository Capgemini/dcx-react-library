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
    text: string | number;
    /**
   * Additional props/attributes
   */
    props?: React.HTMLAttributes<HTMLQuoteElement>;
};


export const CodeSnippet = ({ className, text, props }: CodeSnippetProps) => {
    const dynamicClassName = classNames(['dcx-code', className]);

    return (
        <code className={dynamicClassName} {...props}>
                {text}
        </code>
        );
};