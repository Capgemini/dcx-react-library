import React from 'react';
import { LegendProps } from './commonTypes';

const LOWEST_HEADING: number = 6;
const HIGHEST_HEADING: number = 1;

export const Legend = ({ text, className, heading }: LegendProps) => (
  <legend className={className}>
    {heading
      ? React.createElement(
          `h${
            heading &&
            heading.priority >= HIGHEST_HEADING &&
            heading.priority <= LOWEST_HEADING
              ? heading.priority
              : 1
          }`,
          { className: heading.className },
          text
        )
      : text}
  </legend>
);
