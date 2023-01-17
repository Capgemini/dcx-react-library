import React, { useEffect } from 'react';
import { Roles } from '../common/utils/rolesType';
import style from './scrubber.module.css';

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
  onChange?: (value: number) => void;
  /**
   * function that will trigger when the max postfix is clicked
   **/
  onChangeMax?: (value: number) => void;
  /**
   * function that will trigger when the min postfix is clicked
   **/
  onChangeMin?: (value: number) => void;
  /**
   * optional className to style the slider
   */
  inputClass?: string;
  /**
   * allow to enable displaying a tooltip on the range slider
   */
  showTooltip?: boolean;
  /**
   * tab index value
   */
  tabIndex?: number;
};

export const Range = ({
  min = 0,
  max = 100,
  value = (min + max) / 2,
  prefix,
  suffix,
  disabled = false,
  ariaLabel,
  onChange,
  onChangeMax,
  onChangeMin,
  inputClass,
  showTooltip = false,
  tabIndex = 0,
  ...props
}: RangeProps) => {
  const [defaultValue, setDefaultValue] = React.useState<number>(value);
  const [scrubberPosition, setScrubberPosition] = React.useState<number>();
  const [styling, setStyling] = React.useState<object>();

  useEffect(() => {
    setScrubberPosition(((defaultValue - min) * 100) / (max - min));
    setStyling({ '--left': scrubberPosition + '%' });
  }, [defaultValue, scrubberPosition]);

  const handleClickMin = () => {
    setDefaultValue(min);

    if (onChangeMin) {
      onChangeMin(min);
    }
  };

  const handleClickMax = () => {
    setDefaultValue(max);

    if (onChangeMax) {
      onChangeMax(max);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setScrubberPosition(((defaultValue - min) * 100) / (max - min));
    setDefaultValue(parseInt(value));
    if (onChange) {
      onChange(parseInt(value));
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      {prefix && <div onClick={handleClickMin}>{prefix}</div>}
      <input
        type="range"
        role={Roles.slider}
        min={min}
        max={max}
        value={defaultValue}
        onChange={handleChange}
        disabled={disabled}
        className={[showTooltip ? style.tooltip : '', inputClass]
          .join(' ')
          .trim()}
        aria-label={ariaLabel || 'input-slider'}
        value-tooltip={defaultValue}
        style={styling}
        tabIndex={tabIndex}
        {...props}
      />

      {suffix && <div onClick={handleClickMax}>{suffix}</div>}
    </div>
  );
};
