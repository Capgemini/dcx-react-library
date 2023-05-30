import React from 'react';
import { classNames } from '../common/utils';

type BlockquoteProps = {
    /**
   * optional CSS class name
   */
    className?: string;
    /**
   * content of the blockquotes
   */
    text: string | number;
    /**
   * footer of the blockquotes
   */
    footer: string | number;
    /**
   * Additional props/attributes
   */
    props?: React.HTMLAttributes<HTMLParagraphElement>;
};

export const Blockquote = ({ 
    className, 
    text, 
    footer, 
    props 
    }: BlockquoteProps) => {
    const dynamicClassName = classNames(['dcx-blockquote', className]);

    return (
        <blockquote>
            <p className={dynamicClassName} {...props}>
                {text}
            </p>
            <footer>{footer}</footer>
        </blockquote>
        );
};
