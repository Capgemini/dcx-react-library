import React from 'react';
import { Roles } from '../../common';
import { SelectedItem } from './SelectedItem';
import { MultiSelectOption } from '../Types';

const ENTER_KEY: number = 13;

export type SelectedProps = {
  /**
   * Selected select value
   */
  select: MultiSelectOption;
  /**
   * Selected select ariaLabel
   */
  ariaLabel?: string;
  /**
   * Selected select className
   */
  className?: string;
  /**
   * Selected select label class name
   */
  labelClassName?: string;
  /**
   * Selected select remove class name
   */
  removeButtonClassName?: string;
  /**
   * Selected select styling
   */
  style?: React.CSSProperties;
  /**
   * Selected select remove handler
   */
  onRemove?: (select: MultiSelectOption) => void;
  /**
   * Selected select focus handler
   */
  onFocus?: () => void;
};

export const Selected = ({
  select,
  ariaLabel,
  className,
  labelClassName,
  removeButtonClassName,
  style,
  onFocus,
  onRemove,
}: SelectedProps) => {
  const handleClick = () => onRemove && onRemove(select);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>): void => {
    if (parseInt(event.code) === ENTER_KEY) {
      onRemove && onRemove(select);
    }
  };

  return (
    <div
      id={select.id}
      className={className}
      role={Roles.listItem}
      style={style}
    >
      <SelectedItem className={labelClassName} label={select.label} />
      <SelectedItem
        className={removeButtonClassName}
        label="x"
        role="button"
        ariaLabel={ariaLabel || `Remove ${select.label}`}
        onClick={handleClick}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
        style={{
          marginLeft: '5px',
          fontWeight: 'bold',
        }}
        tabIndex={0}
      />
    </div>
  );
};
