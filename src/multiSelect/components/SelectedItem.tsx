import React from 'react';
import { Roles } from '../../common';

export type SelectedItemProps = {
  /**
   * Selected Item aria label
   */
  ariaLabel?: string;

  /**
   * Selected Item class name
   */
  className?: string;
  /**
   * Selected Item label
   */
  label?: string;
  /**
   * Selected Item role
   */
  role?: 'button';
  /**
   * Selected Item style
   */
  style?: React.CSSProperties;
  /**
   * Selected Item tab index
   */
  tabIndex?: number;
  /**
   * Selected Item handler for the click event
   */
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  /**
   * Select Item handler for the focus event
   */
  onFocus?: () => void;
  /**
   * Select Item handler for the key down event
   */
  onKeyDown?: (key: React.KeyboardEvent<HTMLSpanElement>) => void;
};

export const SelectedItem = ({
  label,
  ariaLabel,
  className,
  role,
  style,
  tabIndex,
  onClick,
  onFocus,
  onKeyDown,
}: SelectedItemProps) => (
  <span
    aria-label={ariaLabel || label}
    role={role || Roles.presentation}
    className={className}
    onClick={onClick}
    onFocus={onFocus}
    onKeyDown={onKeyDown}
    tabIndex={tabIndex}
    style={style}
  >
    {label}
  </span>
);
