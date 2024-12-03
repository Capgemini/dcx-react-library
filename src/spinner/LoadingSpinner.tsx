import React from 'react';
import styles from './spinner.module.css';

export type Props = {
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
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLElement>;

  /**
   * Allows the user to specify custom content for the loading message
   */
  children?: string | number | JSX.Element;

  /**
   * content of the loading message. it has precedence to children
   */
  value?: string | number;
};

type SpinnerValue = Omit<Props, 'children'>;
type SpinnerChildren = Omit<Props, 'value'>;
type SpinnerProps = SpinnerValue | SpinnerChildren;

const isValueType = (p: any): p is SpinnerValue => !!p.value;
const isChildrenType = (p: any): p is SpinnerChildren => !!p.children;

export const LoadingSpinner = ({
  color,
  background,
  speed,
  diameter = '60px',
  props,
  ...rest
}: SpinnerProps) => {
  let content!: string | number | JSX.Element | undefined;

  if (isChildrenType(rest)) content = rest.children;
  if (isValueType(rest)) content = rest.value;

  return (
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
      {content && (
        <div className={`${styles['loading-spinner__content']}`}>{content}</div>
      )}
    </div>
  );
};
