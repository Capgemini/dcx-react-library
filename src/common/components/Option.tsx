import React, { CSSProperties } from 'react';
import { classNames } from '../utils';
import { iconStyle } from '../../formSelect/FormSelect';
import style from './option.module.css';

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
  /**
   * option items hover background color
   */
  itemHoverBackgroundColor?: string;
};

export const Option = ({
  label,
  value,
  className,
  disabled,
  id,
  ariaLabel,
  icon,
  iconStyle,
  itemHoverBackgroundColor,
}: OptionProps) => (
  <option
    value={value}
    id={id}
    className={classNames([
      className,
      ...(icon ? [style.dcxOptionWithIcon] : []),
    ])}
    disabled={disabled}
    aria-label={ariaLabel || label}
    style={
      icon
        ? ({
            '--dcx-option-icon-url': `url(${icon})`,
            '--dcx-option-icon-width': iconStyle?.width,
            '--dcx-option-icon-height': iconStyle?.height,
            '--dcx-option-icon-border-radius': iconStyle?.borderRadius,
            '--dcx-option-hover-background-color': itemHoverBackgroundColor,
          } as CSSProperties)
        : {}
    }
  >
    {label}
  </option>
);
