import React, { useState, useEffect, Children, cloneElement, memo } from 'react';
import { StepperContext } from './UseStepper';
import { classNames } from '../common';

export type StepperProps = {
  /**
   * private - allow to specify the content of the stepper. The allowed elements are Step, StepHeader, StepContent
   */
  children: JSX.Element[];
  /**
   * it allow to specify a custom separator
   */
  separator?: JSX.Element;
  /**
   * it allow to programmatically set the active step (it starts from 0)
   */
  selectedStep?: number;
  /**
   * it will allow to specify a specific class for the selected step
   */
  activeStepClass?: string;
  /**
   * define the className of the entire stepper
   */
  stepperClassName?: string;
  /**
   * define the className of the header container
   */
  headerContainerClassNames?: string;
  /**
   * define the style of all the stepHeader from the parent.
   * If you want to style them independently you can use className on the StepHeader element
   */
  headerClassName?: string;
  /**
   * define the className of the content container
   */
  contentContainerClassNames?: string;
  /**
   * define the style of all the stepContent from the parent.
   * If you want to style them independently you can use className on the StepContent element
   */
  contentClassName?: string;
};

export const Stepper = memo(({
  children,
  separator,
  selectedStep = 0,
  activeStepClass,
  stepperClassName,
  headerContainerClassNames,
  headerClassName,
  contentContainerClassNames,
  contentClassName,
}: StepperProps) => {
  const [activeStep, setActiveStep] = useState(selectedStep);

  useEffect(() => {
    setActiveStep(selectedStep);
  }, [selectedStep]);

  const onClickHandler = (index: number) => setActiveStep(index);

  const childHeader: any[] = [];
  const childContent: any[] = [];

  Children.forEach(children, (child, index) => {
    if (child.type.name === 'Step') {
      Children.forEach(child.props.children, (child) => {
        if (child.type.name === 'StepHeader') {
          const headerClasses = classNames([
            { 'dcx-active-step': index === activeStep },
            { [`${activeStepClass}`]: index === activeStep },
            headerClassName,
          ]);

          childHeader.push(cloneElement(child, {
            key: `header-${index}`,
            _index: index,
            separator: index !== children.length - 1 && separator,
            headerClassName: headerClasses,
            'aria-selected': index - 1 === activeStep ? 'true' : 'false',
            'aria-posinset': index + 1,
            'aria-setsize': child.props.children.length + 1,
            tabIndex: index - 1 === activeStep ? '0' : '-1',
          }));
        } else if (child.type.name === 'StepContent') {
          childContent.push(cloneElement(child, {
            key: `content-${index}`,
            className: contentClassName,
            visible: index - 1 === activeStep,
          }));
        }
      });
    }
  });

  const containerClasses = classNames([
    'dcx-stepper',
    'dcx-horizontal-stepper',
    stepperClassName,
  ]);

  const headerContainerClasses = classNames([
    'dcx-stepper-header-container',
    headerContainerClassNames,
  ]);

  const contentContainerClasses = classNames([
    'dcx-stepper-content-container',
    contentContainerClassNames,
  ]);

  return (
    <StepperContext.Provider
      value={{
        activeStep,
        changeActiveStep: onClickHandler,
      }}
    >
      <div className={containerClasses}>
        <div className={headerContainerClasses}>{childHeader}</div>
        <div className={contentContainerClasses}>{childContent}</div>
      </div>
    </StepperContext.Provider>
  );
});
