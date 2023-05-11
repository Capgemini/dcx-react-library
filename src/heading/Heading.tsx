import React from 'react';

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
    className: string;

    /**
     * Unique html #id of the heading
     */
    id: string;

    /**
     * Additional props/attributes
     */
    props?: any;
};

export const Heading = ({ label, level, className, id, props }: HeadingProps) => {

    const embeddedClassName = `dcx-heading dcx-heading-${level} `;

    switch (level) {
        case '1':
            return (<h1 id={id} className={embeddedClassName + className} {...props}>{label}</h1>);
        case '2':
            return (<h2 id={id} className={embeddedClassName + className} {...props}>{label}</h2>);
        case '3':
            return (<h3 id={id} className={embeddedClassName + className} {...props}>{label}</h3>);
        case '4':
            return (<h4 id={id} className={embeddedClassName + className} {...props}>{label}</h4>);
        case '5':
            return (<h5 id={id} className={embeddedClassName + className} {...props}>{label}</h5>);
        case '6':
            return (<h6 id={id} className={embeddedClassName + className} {...props}>{label}</h6>);
    }
};