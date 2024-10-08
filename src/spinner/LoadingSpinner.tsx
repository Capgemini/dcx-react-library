import React from 'react';
import styles from './spinner.module.css';

export type SpinnerProps = {
  /**
   * allow user to define the spinner color
   */
  color?: string;

  /**
   * allow user to define the background spinner color
   */
  background?: string;

  /**
   * allow user to define the spinner rotation speed in seconds
   */
  speed?: string;

  /**
    * The diameter of the progress spinner (will set width and height)
  */
  diameter?: string;

  /**
   * allow user to define loading message
   */
  message?: string;

  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLElement>;
};

export const LoadingSpinner = ({
  color,
  background,
  speed,
  message,
  diameter,
  ...props
}: SpinnerProps) => (
  <div className={`${styles['loading-spinner']}`}>
    <div
      className={`${styles['loading-spinner__spinner']}`}
      style={{
        ['--spinner-border-top-color' as any]: color,
        ['--spinner-border-color' as any]: background,
        ['--spinner-rotation-speed' as any]: speed,
        ['--spinner-diameter' as any]: diameter,
      }}
      aria-live="polite"
      role="status"
      {...props}
    ></div>
    {message && (
      <div className={`${styles['loading-spinner__content']}`}>
        <h3>{message}</h3>
      </div>)}
  </div>
);
