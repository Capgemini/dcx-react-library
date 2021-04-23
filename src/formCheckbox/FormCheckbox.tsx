import _ from 'lodash';
import React from 'react';
import { ConditionalInputProps, Hint, HintProps } from '../common';
import PropTypes from 'prop-types';

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

export const FormCheckbox = ({
  id,
  name,
  value,
  label,
  inputProps,
  itemProps,
  labelProps,
  ariaLabel,
  ariaDataControls,
  ariaDescribedBy,
  ariaLabelledBy,
  onChange,
  conditional,
  disabled,
  defaultChecked,
  hint,
}: FormCheckboxProps) => {
  const conditionalReveal = (): boolean =>
    !_.isEmpty(conditional) && defaultChecked === true;

  const conditionalEl = (conditional: ConditionalInputProps) => (
    <div className={conditional.className} id={conditional.id}>
      <div className={conditional.groupClassName}>
        <label className={conditional.labelClassName} htmlFor={conditional.id}>
          {conditional.label}
        </label>
        <input
          className={conditional.inputClassName}
          id={conditional.inputId}
          name={conditional.name}
          type={conditional.type}
        />
      </div>
    </div>
  );
  return (
    <div {...itemProps}>
      {hint?.position === 'above' && <Hint {...hint} />}
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        aria-label={ariaLabel || name}
        data-aria-controls={ariaDataControls || ''}
        aria-describedby={ariaDescribedBy || ''}
        aria-labelledby={ariaLabelledBy || labelProps ? labelProps.id : ''}
        disabled={disabled}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...inputProps}
      />
      <label {...labelProps} htmlFor={id}>
        {label}
      </label>
      {hint && hint?.position !== 'above' && <Hint {...hint} />}
      {conditional !== undefined &&
        conditionalReveal() &&
        conditionalEl(conditional)}
    </div>
  );
};

FormCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.shape({
    text: PropTypes.string.isRequired,
    classes: PropTypes.string,
    id: PropTypes.string,
    position: PropTypes.string,
  }),
  id: PropTypes.string,
  inputProps: PropTypes.any,
  itemProps: PropTypes.any,
  labelProps: PropTypes.any,
  name: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
};
