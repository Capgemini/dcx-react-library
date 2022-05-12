import React from 'react';

export type OptionProps = {
  /**
   * option label
   */
  label: string;
  /**
   * option value
   */
  value: string;
  /**
   * option ariaLabel
   */
  ariaLabel?: string;
  /**
   * option className
   */
  className?: string;
  /**
   * option disabled
   */
  disabled?: boolean;
  /**
   * option id
   */
  id?: string;
  /**
   * option label class name
   */
  labelClassName?: string;
};

export const Option = ({
  label,
  value,
  className,
  disabled,
  id,
  ariaLabel,
}: OptionProps) => (
  <option
    value={value}
    id={id}
    className={className}
    disabled={disabled}
    aria-label={ariaLabel || label}
  >
    {label}
  </option>
);
