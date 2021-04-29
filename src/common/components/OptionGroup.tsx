import React from 'react';
import { Option, OptionProps } from './Option';

export type OptionGroupProps = {
  /**
   * select group label
   */
  label: string;
  /**
   * select options
   */
  options: OptionProps[];
  /**
   * select show options count
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
