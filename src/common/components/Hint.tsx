import React from 'react';
import { HintProps } from './commonTypes';

export const Hint = ({ text, className, id, useLabel }: HintProps) =>
  useLabel ? (
    <label id={id} className={['dcx-hint', className].join(' ')}>
      {text}
    </label>
  ) : (
    <div id={id} className={['dcx-hint', className].join(' ')}>
      {text}
    </div>
  );
