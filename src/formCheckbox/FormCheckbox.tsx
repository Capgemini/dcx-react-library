import _ from 'lodash';
import React from 'react';
import { ConditionalInputProps, Hint, HintProps } from '../common';

type FormCheckboxProps = {
  /**
   * checkbox name
   **/
  name: string;
  /**
   * checkbox label
   **/
  label: string;
  /**
   * checkbox value
   **/
  value: string;
  /**
   * function that will trigger all the time there's a change on the checkbox
   **/
  onChange: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
  /**
   * checkbox id
   **/
  id?: string;
  /**
   * checkbox ariaLabel
   **/
  ariaLabel?: string;
  /**
   * checkbox ariaLabel
   **/
  ariaDescribedBy?: string;
  /**
   * checkbox ariaLabel
   **/
  ariaLabelledBy?: string;
  /**
   * checkbox ariaLabel
   **/
  ariaDataControls?: string;
  /**
   * checkbox hint properties
   **/
  hint?: HintProps;
  /**
   * checkbox hint position value 'above' or 'below'
   **/
  hintPosition?: string;
  /**
   * allows for customisation of the checkbox input with all the properites needed
   **/
  inputProps?: any;
  /**
   * allows for customisation of the checkbox input with all the properites needed
   **/
  itemProps?: any;
  /**
   * allows for customisation of the checkbox label with all the properites needed
   **/
  labelProps?: any;
  /**
   * specifies whether the checkbox should be disabled
   */
  disabled?: boolean;
  /**
   * specifies whether the checkbox should be pre-checked
   */
  defaultChecked?: boolean;
  /**
   * checkbox conditionally input field
   */
  conditional?: ConditionalInputProps;
};

const conditionalEl = ({
  label,
  className,
  id,
  groupClassName,
  labelClassName,
  inputId,
  inputClassName,
  name,
  type,
}: ConditionalInputProps) => (
  <div className={className} id={id}>
    <div className={groupClassName}>
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      <input className={inputClassName} id={inputId} name={name} type={type} />
    </div>
  </div>
);

export const FormCheckbox = ({
  id,
  name,
  value,
  label,
  inputProps,
  itemProps,
  labelProps,
  ariaLabel,
  ariaDataControls = '',
  ariaDescribedBy = '',
  ariaLabelledBy,
  onChange,
  conditional,
  disabled,
  defaultChecked,
  hint,
  hintPosition = 'below',
}: FormCheckboxProps) => {
  const conditionalReveal = (): boolean =>
    !_.isEmpty(conditional) && defaultChecked === true;

  return (
    <div {...itemProps}>
      {hint && hintPosition === 'above' && <Hint {...hint} />}
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        aria-label={ariaLabel || name}
        data-aria-controls={ariaDataControls}
        aria-describedby={ariaDescribedBy}
        aria-labelledby={ariaLabelledBy || labelProps ? labelProps.id : ''}
        disabled={disabled}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...inputProps}
      />
      <label {...labelProps} htmlFor={id}>
        {label}
      </label>
      {hint && hintPosition === 'below' && <Hint {...hint} />}
      {conditional !== undefined &&
        conditionalReveal() &&
        conditionalEl(conditional)}
    </div>
  );
};
