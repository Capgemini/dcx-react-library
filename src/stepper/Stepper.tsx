import React, { useState, useEffect, Children, cloneElement, memo } from 'react';
import { StepperContext } from './UseStepper';
import { classNames } from '../common';

export type StepperProps = {
  /**
   * Specifies the content of the stepper. The allowed elements are Step, StepHeader, StepContent.
   */
  children: JSX.Element[];
  /**
   * Specifies a custom separator.
   */
  separator?: JSX.Element;
  /**
   * Programmatically set the active step (starts from 0).
   */
  selectedStep?: number;
  /**
   * Specifies a specific class for the selected step.
   */
  activeStepClass?: string;
  /**
   * Defines the className of the entire stepper.
   */
  stepperClassName?: string;
  /**
   * Defines the className of the header container.
   */
  headerContainerClassNames?: string;
  /**
   * Defines the style of all StepHeader elements from the parent.
   * To style them independently, use className on the StepHeader element.
   */
  headerClassName?: string;
  /**
   * Defines the className of the content container.
   */
  contentContainerClassNames?: string;
  /**
   * Defines the style of all StepContent elements from the parent.
   * To style them independently, use className on the StepContent element.
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

  const childHeaders: JSX.Element[] = [];
  const childContents: JSX.Element[] = [];

  Children.forEach(children, (child, index) => {
    if (child.type.name === 'Step') {
      Children.forEach(child.props.children, (child) => {
        if (child.type.name === 'StepHeader') {
          const headerClasses = classNames([
            { 'dcx-active-step': index === activeStep },
            { [`${activeStepClass}`]: index === activeStep },
            headerClassName,
          ]);

          childHeaders.push(cloneElement(child, {
            key: `header-${index}`,
            _index: index,
            headerClassName: headerClasses,
            'aria-selected': index === activeStep ? 'true' : 'false',
            'aria-posinset': index + 1,
            'aria-setsize': Children.count(children),
            tabIndex: index === activeStep ? '0' : '-1',
          }));

          if (separator && index < children.length - 1) {
            childHeaders.push(
              cloneElement(separator, { key: `separator-${index}`, className: 'dcx-separator' })
            );
          }
        } else if (child.type.name === 'StepContent') {
          childContents.push(cloneElement(child, {
            key: `content-${index}`,
            className: contentClassName,
            visible: index === activeStep,
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
    <StepperContext.Provider value={{ activeStep, changeActiveStep: onClickHandler }}>
      <div className={containerClasses}>
        <div className={headerContainerClasses}>{childHeaders}</div>
        <div className={contentContainerClasses}>{childContents}</div>
      </div>
    </StepperContext.Provider>
  );
});