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
   * internal usage to detemine the content that need to be displayed
   **/
  _index?: number;
};

//NOTES
// I wanted to use the Button component however it doesnt' support children. Ticket raised: https://github.com/Capgemini/dcx-react-library/issues/563
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
