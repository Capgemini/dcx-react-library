import React from 'react';
import { Roles } from '../';

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
   * className
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
   * option selected
   */
  selected?: boolean;
};

export const Option = ({
  label,
  value,
  className,
  disabled,
  id,
}: OptionProps) => (
  <option
    value={value}
    id={id}
    className={className}
    disabled={disabled}
    aria-label={Roles.listItem}
  >
    {label}
  </option>
);
