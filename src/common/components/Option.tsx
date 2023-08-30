import React, { CSSProperties } from 'react';
import { classNames } from '../utils';
import { iconStyle } from '../../formSelect/FormSelect';

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
  /**
   * option icon
   */
  icon?: string; 
  /**
   * option icon style
   */
  iconStyle?: iconStyle; 
};

export const Option = ({
  label,
  value,
  className,
  disabled,
  id,
  ariaLabel,
  icon,
  iconStyle
}: OptionProps) => (
  <option
    value={value}
    id={id}
    className={classNames([className, ...icon ? ['govuk-option'] : []])}
    disabled={disabled}
    aria-label={ariaLabel || label}
    style={icon ? { 
      '--govuk-option-icon-url': `url(${icon})`, 
      '--govuk-option-icon-width': `${iconStyle?.width}`,
      '--govuk-option-icon-height': `${iconStyle?.height}`,
      '--govuk-option-icon-border-radius': `${iconStyle?.borderRadius}`, 
    }as CSSProperties : {}}
  >
    {label}
  </option>
);
