import React from 'react';
import { LegendProps } from '../components';

export const Legend = ({
  text,
  classes,
  isHeading = false,
  headingClasses,
}: LegendProps) => (
  <legend className={classes}>
    {isHeading ? <h1 className={headingClasses}>{text}</h1> : text}
  </legend>
);
