import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import {
  ConditionalInputProps,
  FormRadioProps,
  Hint,
} from '../common/components';

export const FormRadio = ({
  label,
  value,
  id,
  ariaLabel,
  ariaDataControls,
  ariaDescribedBy,
  ariaLabelledBy,
  disabled,
  conditional,
  hint,
  inputProps,
  itemProps,
  labelProps,
  name,
  selected,
  onChange,
}: FormRadioProps) => {
  const conditionalReveal = (): boolean =>
    !_.isEmpty(conditional) && selected === true;

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
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        aria-label={ariaLabel || name}
        data-aria-controls={ariaDataControls || ''}
        aria-describedby={ariaDescribedBy || ''}
        aria-labelledby={ariaLabelledBy || labelProps ? labelProps.id : ''}
        disabled={disabled}
        checked={selected}
        {...inputProps}
        onChange={onChange}
      />
      <label {...labelProps} htmlFor={id}>
        {label}
      </label>
      {hint && <Hint {...hint} />}
      {conditional !== undefined &&
        conditionalReveal() &&
        conditionalEl(conditional)}
    </div>
  );
};

FormRadio.propTypes = {
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
  }),
  id: PropTypes.string,
  inputProps: PropTypes.any,
  itemProps: PropTypes.any,
  labelProps: PropTypes.any,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
};
