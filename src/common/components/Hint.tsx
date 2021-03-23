import React from 'react';
import { HintProps } from '../components';

export const Hint = ({ text, classes, id }: HintProps) => (
  <div id={id} className={classes}>
    {text}
  </div>
);
