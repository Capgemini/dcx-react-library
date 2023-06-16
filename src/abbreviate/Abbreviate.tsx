import React from 'react';
import { classNames } from '../common/utils';


type AbbreviateProps = {
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
   * Additional props/attributes
   */
    props?: React.HTMLAttributes<HTMLElement>;
};


export const Abbreviate = ({ className, props, value, title }: AbbreviateProps) => {
    const dynamicClassName = classNames(['dcx-abbreviate', className]);

    return (
            <abbr className={dynamicClassName} title={title} {...props}> {value}</abbr>
        );
};