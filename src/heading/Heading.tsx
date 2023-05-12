import React from 'react';
import { classNames } from '../common/utils';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6'

type HeadingProps = {
    /**
     * Content of the Heading
     */
    label: string;

    /**
     * Level of the heading (1-6)
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
     * Additional props/attributes
     */
    props?: any;
};

export const Heading = ({ label, level, className, id, props }: HeadingProps) => {

    const dynamicClassName = classNames([
        'dcx-heading',
        `dcx-heading-${level}`,
        className,
    ]);

    const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <HeaderTag className={dynamicClassName} id={id} {...props}>
            {label}
        </HeaderTag>
    );
};