import React from 'react';
import { Roles } from '../';

export type OptionProps = {
  /**
   * select option label
   */
  label: string;
  /**
   * select option value
   */
  value: string;
  /**
   * select className
   */
  className?: string;
  /**
   * select option disabled
   */
  disabled?: boolean;
  /**
   * select id
   */
  id?: string;
  /**
   * select selected
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
