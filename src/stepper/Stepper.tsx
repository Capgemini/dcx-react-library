import React from 'react';
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
   * define the style of all the buttons inside the stepHeader from the parent.
   * If you want to style them independently you can use buttonClassName on the StepHeader element
   */
  buttonHeaderClasseName?: string;
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

export const Stepper = ({
  children,
  separator,
  selectedStep = 0,
  activeStepClass,
  stepperClassName,
  headerContainerClassNames,
  headerClassName,
  buttonHeaderClasseName,
  contentContainerClassNames,
  contentClassName,
}: StepperProps) => {
  const childHeader: any[] = [];
  const childContent: any[] = [];

  const [activeStep, setActiveStep] = React.useState(selectedStep);

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

  const onClickHandler: (index: number) => void = (index: number) =>
    setActiveStep(index);

  // it will refresh the selected step if someone change the value from outside
  React.useEffect(() => {
    setActiveStep(selectedStep);
  }, [selectedStep]);

  children.forEach((child: JSX.Element, index: number) => {
    if (child.type.name === 'Step') {
      child.props.children.forEach((child: JSX.Element) => {
        const { name } = child.type;
        if (child.type.name === 'StepHeader') {
          const buttonHeaderClasses = classNames([
            { 'dcx-active-step': index === activeStep },
            { [`${activeStepClass}`]: index === activeStep },
            buttonHeaderClasseName,
          ]);

          childHeader.push(
            <child.type
              key={`${name}-${index}`}
              _index={index}
              separator={index !== children.length - 1 && separator}
              headerClassName={headerClassName}
              buttonClassName={buttonHeaderClasses}
              {...child.props}
            />
          );
        } else if (child.type.name === 'StepContent') {
          childContent.push(
            <child.type
              key={`${name}-${index}`}
              className={contentClassName}
              {...child.props}
            />
          );
        }
      });
    }
  });

  return (
    <StepperContext.Provider
      value={{
        activeStep,
        changeActiveStep: onClickHandler,
      }}
    >
      <div className={containerClasses}>
        <div className={headerContainerClasses}>{childHeader}</div>

        <div className={contentContainerClasses}>
          {childContent[activeStep]}
        </div>
      </div>
    </StepperContext.Provider>
  );
};
