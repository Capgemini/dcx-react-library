import React from 'react';
import { Roles } from '../common';

type ProgressProps = {
  /**
   * display for the progress bar
   */
  label: string;
  /**
   * max value of the progress bar
   */
  max: number;
  /**
   * class name for the progress bar
   */
  className?: string;
  /**
   * id for the progress bar
   */
  id?: string;
  /**
   * class name for the label
   */
  labelClassName?: string;
  /**
   * current value of the progress bar
   */
  value?: number;
};

export const Progress = ({
  label,
  max,
  className,
  id,
  labelClassName,
  value,
}: ProgressProps) => (
  <>
    <label className={labelClassName} htmlFor={id}>{`${label}: `}</label>
    <progress id={id} max={max} value={value} role={Roles.progress}>
      <div id={id} className={className}>
        <span
          style={{
            width: value,
          }}
        >
          {value ? `${label}: ${value}%` : ''}
        </span>
      </div>
    </progress>
  </>
);
