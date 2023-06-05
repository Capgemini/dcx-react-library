import React from 'react';
import { classNames } from '../common/utils';


type HighlightProps = {
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
    footer?: string;
    /**
   * Additional props/attributes
   */
    props?: React.HTMLAttributes<HTMLQuoteElement>;
};


export const Highlight = ({ className, text, footer, props }: HighlightProps) => {
    const dynamicClassName = classNames(['dcx-highlight', className]);

    return (
        <mark className={dynamicClassName} {...props}>
                {text}
            <footer>{footer}</footer>
        </mark>
        );
};
