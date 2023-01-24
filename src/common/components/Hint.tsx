import React from 'react';
import { classNames } from '../utils';
import { HintProps } from './commonTypes';

export const Hint = ({ text, className, id, useLabel }: HintProps) =>
  useLabel ? (
    <label id={id} className={classNames(['dcx-hint', className])}>
      {text}
    </label>
  ) : (
    <div id={id} className={classNames(['dcx-hint', className])}>
      {text}
    </div>
  );
