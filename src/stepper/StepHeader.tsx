import React from 'react';
import { useStepper } from './UseStepper';
import { classNames } from '../common';
export type StepHeaderProps = {
  /**
   * this will allow to pass a custom content to the header like a span or other.
   * The container will be a button
   */
  children?: JSX.Element;
  /**
   *
   */
  headerClassName?: string;
  /**
   * you can define a custom separator between each steps
   */
  separator?: JSX.Element;
  /**
   * internal usage to determine the content that need to be displayed
   **/
  _index?: number;
};


export const StepHeader = ({
  _index,
  separator,
  children,
  headerClassName,
  ...props
}: any) => {
  const { changeActiveStep } = useStepper();
  const headerClassNames = classNames([
    'dcx-stepper-header-content',
    headerClassName,
  ]);
  return (
    <>
      <button
        role="tab"
        className={headerClassNames}
        onClick={() => changeActiveStep(_index)}
        {...props}
      >
        {children}
      </button>
      <>{separator}</>
    </>
  );
};