import React from 'react';

type RangeProps = {
    /**
     * max value of the range component
     */
    max?: number;
    /**
     * min value of the range component
     */
    min?: number;

    /**
     * current value of the range component
     */
    value?: number;
    /**
     * generic parameter to pass whatever element before the input
     **/
    prefix?: any;
    /**
     * generic parameter to pass whatever element after the input
     **/
    suffix?: any;
    disabled?: boolean;
    ariaLabel?: string;
    /**
     * function that will trigger all the time there's a change in the input
     **/
    getAriaValueText: any;



};

export const Range = ({
                          min,
                          max,
                          value,
                          prefix,
                          suffix,
                          disabled=false,
                          ariaLabel,
                          getAriaValueText,
                      }: RangeProps) => {

    const [defaultValue, setDefaultValue] = React.useState<any>(value);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDefaultValue(event.target.value);
        getAriaValueText(event.target.value);
    };

    return (

        <div style={{display: 'flex'}}>
            {prefix && <div>{prefix}</div>}
            <input
                type="range"
                min={min} max={max}
                value={defaultValue}
                onInput={handleChange}
                disabled={disabled}
                aria-label={ariaLabel || 'input-slider'}
            />
            {suffix && <div>{suffix}</div>}
        </div>

    );
};

