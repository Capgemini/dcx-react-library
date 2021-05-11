import React from 'react';
import { HintProps } from '../components/commonTypes';

export const Hint = ({ text, className, id, useLabel }: HintProps) =>
  useLabel ? (
    <label id={id} className={className}>
      {text}
    </label>
  ) : (
    <div id={id} className={className}>
      {text}
    </div>
  );
