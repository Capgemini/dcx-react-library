import React from 'react';

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
  /**
   * tab index value
   */
  tabIndex?: number;
};

export const Progress = ({
  label,
  max,
  className,
  id,
  labelClassName,
  value,
  tabIndex,
}: ProgressProps) => (
  <div tabIndex={tabIndex} data-testid={id}>
    <label className={labelClassName} htmlFor={id}>{`${label}: `}</label>
    <progress id={id} className={className} max={max} value={value}>
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
  </div>
);
