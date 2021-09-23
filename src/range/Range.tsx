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
  prefix?: JSX.Element;
  /**
   * generic parameter to pass whatever element after the input
   **/
  suffix?: JSX.Element;
  /**
   * allow to enable disable the range slider
   */
  disabled?: boolean;
  /**
   * define the aria-label for accessibility. If no value is passed it will render input-slider
   */
  ariaLabel?: string;
  /**
   * function that will trigger all the time there's a change in the input
   **/
  onChange?: any;
  /**
   * optional className to style the slider
   */
  inputClass?: string;
};

export const Range = ({
  min,
  max,
  value,
  prefix,
  suffix,
  disabled = false,
  ariaLabel,
  onChange,
  inputClass,
  ...props
}: RangeProps) => {
  const [defaultValue, setDefaultValue] = React.useState<any>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDefaultValue(value);
    onChange(value);
  };

  return (
    <div style={{ display: 'flex' }}>
      {prefix && <div>{prefix}</div>}
      <input
        type="range"
        min={min}
        max={max}
        value={defaultValue}
        onChange={handleChange}
        disabled={disabled}
        className={inputClass}
        aria-label={ariaLabel || 'input-slider'}
        {...props}
      />
      {suffix && <div>{suffix}</div>}
    </div>
  );
};
