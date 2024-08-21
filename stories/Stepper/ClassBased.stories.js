import {
  Stepper,
  Step,
  StepHeader,
  StepContent,
} from '../../src/stepper';

/**
 * In this section, we are using the Stepper component styled with the GovUk style by passing the relative className. Feel free to use your own CSS and style the Stepper component as you prefer.
 */
export default {
  title: 'DCXLibrary/Layout/Stepper/Class based',
  component: Stepper,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

/**
 * By default, the Stepper is designed to have only one step active at a time.
 */
export const BasicStepper = {
  name: 'Basic',
  render: function (args) {
    return (
      <Stepper className="govuk-stepper" {...args}>
        <Step className="govuk-stepper__step" title="Step 1">
          <StepHeader className="govuk-stepper__step-header">
            Step 1: Introduction
          </StepHeader>
          <StepContent className="govuk-stepper__step-content">
            <p className="govuk-body">
              This is the content for Step 1: Introduction.
            </p>
          </StepContent>
        </Step>
        <Step className="govuk-stepper__step" title="Step 2">
          <StepHeader className="govuk-stepper__step-header">
            Step 2: Details
          </StepHeader>
          <StepContent className="govuk-stepper__step-content">
            <p className="govuk-body">
              This is the content for Step 2: Details.
            </p>
          </StepContent>
        </Step>
        <Step className="govuk-stepper__step" title="Step 3">
          <StepHeader className="govuk-stepper__step-header">
            Step 3: Confirmation
          </StepHeader>
          <StepContent className="govuk-stepper__step-content">
            <p className="govuk-body">
              This is the content for Step 3: Confirmation.
            </p>
          </StepContent>
        </Step>
      </Stepper>
    );
  },
  args: {
    activeStep: 0,
  },
};

/**
 * Passing the property *activeStep* we can set the initial active step upon initialization.
 */
export const defaultActiveStep = {
  name: 'Default Active Step',
  render: function (args) {
    return (
      <Stepper className="govuk-stepper" {...args}>
        <Step className="govuk-stepper__step" title="Step 1">
          <StepHeader className="govuk-stepper__step-header">
            Step 1: Introduction
          </StepHeader>
          <StepContent className="govuk-stepper__step-content">
            <p className="govuk-body">
              This is the content for Step 1: Introduction.
            </p>
          </StepContent>
        </Step>
        <Step className="govuk-stepper__step" title="Step 2">
          <StepHeader className="govuk-stepper__step-header">
            Step 2: Details
          </StepHeader>
          <StepContent className="govuk-stepper__step-content">
            <p className="govuk-body">
              This is the content for Step 2: Details.
            </p>
          </StepContent>
        </Step>
        <Step className="govuk-stepper__step" title="Step 3">
          <StepHeader className="govuk-stepper__step-header">
            Step 3: Confirmation
          </StepHeader>
          <StepContent className="govuk-stepper__step-content">
            <p className="govuk-body">
              This is the content for Step 3: Confirmation.
            </p>
          </StepContent>
        </Step>
      </Stepper>
    );
  },
  args: {
    activeStep: 1,
  },
};

/**
 * Passing the property *stepClassName* and *contentClassName* as props at the root level will allow for custom styling of the step and content sections of the stepper.
 */
export const definedStepAndContentClassNames = {
  name: 'Global classNames',
  render: function (args) {
    return (
      <Stepper className="govuk-stepper" {...args}>
        <Step className="govuk-stepper__step" title="Step 1">
          <StepHeader>
            Step 1: Introduction
          </StepHeader>
          <StepContent>
            <p className="govuk-body">
              This is the content for Step 1: Introduction.
            </p>
          </StepContent>
        </Step>
        <Step className="govuk-stepper__step" title="Step 2">
          <StepHeader>
            Step 2: Details
          </StepHeader>
          <StepContent>
            <p className="govuk-body">
              This is the content for Step 2: Details.
            </p>
          </StepContent>
        </Step>
        <Step className="govuk-stepper__step" title="Step 3">
          <StepHeader>
            Step 3: Confirmation
          </StepHeader>
          <StepContent>
            <p className="govuk-body">
              This is the content for Step 3: Confirmation.
            </p>
          </StepContent>
        </Step>
      </Stepper>
    );
  },
  args: {
    activeStep: 0,
    stepClassName: 'govuk-stepper__step-header',
    contentClassName: 'govuk-stepper__step-content',
  },
};