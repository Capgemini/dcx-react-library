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
  /**
   * Defines the orientation of the stepper.
   */
  orientation?: 'horizontal' | 'vertical';
};

export const Stepper = memo(({
  children,
  separator,
  selectedStep = 0,
  activeStepClass,
  stepperClassName,
  headerClassName,
  contentClassName,
  orientation = 'horizontal',
}: StepperProps) => {
  const [activeStep, setActiveStep] = useState(selectedStep);

  useEffect(() => {
    setActiveStep(selectedStep);
  }, [selectedStep]);

  const onClickHandler = (index: number) => setActiveStep(index);

  const steps: JSX.Element[] = [];

  Children.forEach(children, (child, index) => {
    if (child.type.name === 'Step') {
      let stepHeader: JSX.Element | null = null;
      let stepContent: JSX.Element | null = null;

      Children.forEach(child.props.children, (child) => {
        if (child.type.name === 'StepHeader') {
          const headerClasses = classNames([
            { 'dcx-active-step': index === activeStep },
            { [`${activeStepClass}`]: index === activeStep },
            headerClassName,
          ]);

          stepHeader = cloneElement(child, {
            key: `header-${index}`,
            _index: index,
            headerClassName: headerClasses,
            'aria-selected': index === activeStep ? 'true' : 'false',
            'aria-posinset': index + 1,
            'aria-setsize': Children.count(children),
            tabIndex: index === activeStep ? '0' : '-1',
            onClick: () => onClickHandler(index),
          });
        } else if (child.type.name === 'StepContent') {
          stepContent = cloneElement(child, {
            key: `content-${index}`,
            className: contentClassName,
            visible: index === activeStep,
          });
        }
      });

      if (stepHeader && stepContent) {
        steps.push(
          <div key={`step-${index}`} className="dcx-step">
            {stepHeader}
            {stepContent}
          </div>
        );

        if (separator && index < children.length - 1) {
          steps.push(
            cloneElement(separator, { key: `separator-${index}`, className: 'dcx-separator' })
          );
        }
      }
    }
  });

  const containerClasses = classNames([
    'dcx-stepper',
    orientation === 'horizontal' ? 'dcx-horizontal-stepper' : 'dcx-vertical-stepper',
    stepperClassName,
  ]);

  return (
    <StepperContext.Provider value={{ activeStep, changeActiveStep: onClickHandler }}>
      <div className={containerClasses}>
        {steps}
      </div>
    </StepperContext.Provider>
  );
});