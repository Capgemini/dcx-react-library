import React from 'react';
import { Option, OptionProps } from './Option';

export type OptionGroupProps = {
  /**
   * option group label
   */
  label: string;
  /**
   * option group options
   */
  options: OptionProps[];
  /**
   * show options count
   */
  displayCount?: boolean;
};

export const OptionGroup = ({
  label,
  displayCount,
  options,
}: OptionGroupProps) => (
  <optgroup label={displayCount ? `${label} (${options.length})` : label}>
    {options.map((item: OptionProps, index: number) => (
      <Option key={index} {...item} />
    ))}
  </optgroup>
);
