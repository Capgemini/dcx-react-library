import React, {useEffect} from 'react';
import style from './scrubber.module.css';

type RangeProps = {
  /**
   * max value of the range component
   */
  max: number;
  /**
   * min value of the range component
   */
  min: number;
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
  showTooltip?: boolean;
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
  showTooltip = false,
  ...props
}: RangeProps) => {
  const [defaultValue, setDefaultValue] = React.useState<any>(value);
  const [scrubberPosition, setScrubberPosition] = React.useState<any>();
  const [styling, setStyling] = React.useState<any>();

  useEffect(() => {
    if(isNaN(defaultValue)) {
      setDefaultValue((min + max) / 2);
    }
      setScrubberPosition(((defaultValue - min) * 100) / (max - min));
      setStyling({"--left":  scrubberPosition + '%',});
  }, [defaultValue, scrubberPosition]);


  const handleClickMin = () => {
    setDefaultValue(min || 0);
  }

  const handleClickMax = () => {
    setDefaultValue(max || 100);
  }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setScrubberPosition(((parseInt(defaultValue) - min) * 100) / (max - min));
    setDefaultValue(value);
    if(onChange) {
      onChange(value);
    }
  };
  

  return (

    <div style={{ display: 'flex' }}>
      {prefix && <div onClick={handleClickMin}>{prefix}</div>}
      <input
        type="range"
        min={min}
        max={max}
        value={defaultValue || ''}
        onInput={handleChange}
        disabled={disabled}
          className={[ (showTooltip ? style.tooltip : ''), inputClass].join(' ')}
        aria-label={ariaLabel || 'input-slider'}
        value-tooltip={defaultValue || value}
        style={styling}
        {...props}

      />

      {suffix && <div onClick={handleClickMax}>{suffix}</div>}


    </div>
  );
};