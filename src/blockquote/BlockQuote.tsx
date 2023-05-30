import React from 'react';
import { classNames } from '../common/utils';

type BlockQuoteProps = {
    /**
   * optional CSS class name
   */
    className?: string;
    /**
   * content of the paragraph
   */
    value: string | number;
    /**
   * Additional props/attributes
   */
    props?: React.HTMLAttributes<HTMLParagraphElement>;
};

export const BlockQuote = ({ className, value, props }: BlockQuoteProps) => {
    const dynamicClassName = classNames(['dcx-blockquote', className]);

    return (
    <p className={dynamicClassName} {...props}>
        {value}
    </p>
    );
};
