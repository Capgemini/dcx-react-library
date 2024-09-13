import React, {
  useState,
  useEffect,
  Children,
  cloneElement,
  memo,
} from 'react';
import { StepperContext } from './UseStepper';
import { classNames } from '../common';

export type StepperProps = {
  /**
   * An array of JSX elements representing the steps.
   */
  children: JSX.Element[];

  /**
   * An optional JSX element to be used as a separator between steps.
   */
  separator?: JSX.Element;

  /**
   * The index of the initially selected step. Defaults to 0.
   */
  selectedStep?: number;

  /**
   * The class name to be applied to the active step.
   */
  activeStepClassName?: string;

  /**
   * The class name to be applied to the stepper container.
   */
  stepperClassName?: string;

  /**
   * The class name to be applied to the header of each step.
   */
  headerClassName?: string;

  /**
   * The class name to be applied to the content of each step.
   */
  contentClassName?: string;

  /**
   * The orientation of the stepper, either 'horizontal' or 'vertical'.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * This allows the Stepper component to accept any valid HTML attributes for a div element.
   */
  props?: React.HTMLAttributes<HTMLDivElement>;
};

export const Stepper = memo(
  ({
    children,
    separator,
    selectedStep = 0,
    activeStepClassName,
    stepperClassName,
    headerClassName,
    contentClassName,
    orientation = 'horizontal',
    ...props
  }: StepperProps) => {
    const [activeStep, setActiveStep] = useState(selectedStep);

    useEffect(() => {
      setActiveStep(selectedStep);
    }, [selectedStep]);

    const onClickHandler = (index: number) => setActiveStep(index);

    const headers: JSX.Element[] = [];
    const contents: JSX.Element[] = [];

    Children.forEach(children, (child, index) => {
      if (child.type.name === 'Step') {
        let stepHeader: JSX.Element | null = null;
        let stepContent: JSX.Element | null = null;

        Children.forEach(child.props.children, (child) => {
          if (child.type.name === 'StepHeader') {
            const headerClasses = classNames([
              'dcx-step-header',
              { 'dcx-active-step': index === activeStep },
              { [`${activeStepClassName}`]: index === activeStep },
              headerClassName,
            ]);

            stepHeader = cloneElement(child, {
              key: `header-${index}`,
              _index: index,
              className: headerClasses,
              'aria-selected': index === activeStep ? 'true' : 'false',
              'aria-posinset': index + 1,
              'aria-setsize': Children.count(children),
              tabIndex: index === activeStep ? '0' : '-1',
              onClick: () => onClickHandler(index),
            });
          } else if (child.type.name === 'StepContent') {
            const contentClasses = classNames([
              'dcx-step-content',
              contentClassName,
              { 'dcx-visible-content': index === activeStep },
            ]);

            stepContent = cloneElement(child, {
              key: `content-${index}`,
              className: contentClasses,
              visible: index === activeStep,
            });
          }
        });

        if (stepHeader) {
          headers.push(
            <div key={`header-${index}`} className="dcx-header-wrapper">
              {stepHeader}
            </div>
          );
          if (separator && index < children.length - 1) {
            headers.push(
              cloneElement(separator, {
                key: `separator-${index}`,
                className: 'dcx-separator',
              })
            );
          }
        }

        if (stepContent) {
          contents.push(
            <div key={`content-${index}`} className="dcx-content-wrapper">
              {stepContent}
            </div>
          );
        }
      }
    });

    const containerClasses = classNames([
      'dcx-stepper',
      orientation === 'horizontal'
        ? 'dcx-horizontal-stepper'
        : 'dcx-vertical-stepper',
      stepperClassName,
    ]);

    return (
      <StepperContext.Provider
        value={{ activeStep, changeActiveStep: onClickHandler }}
      >
        <div className={containerClasses} {...props}>
          <div className="dcx-header-container">{headers}</div>
          <div className="dcx-content-container">{contents}</div>
        </div>
      </StepperContext.Provider>
    );
  }
);
