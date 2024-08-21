import React from 'react';
import { Stepper, Step, StepHeader, StepContent } from '../../src/stepper';

export default {
  title: 'DCXLibrary/Layout/Stepper/Without style',
  component: Stepper,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function (args) {
    return (
      <Stepper {...args}>
        <Step key="1">
          <StepHeader>Step 1</StepHeader>
          <StepContent>
            <p>
              This is the content for step 1. Here you can provide detailed instructions or information.
            </p>
          </StepContent>
        </Step>
        <Step key="2">
          <StepHeader>Step 2</StepHeader>
          <StepContent>
            <p>
              This is the content for step 2. Continue providing information or instructions here.
            </p>
          </StepContent>
        </Step>
        <Step key="3">
          <StepHeader>Step 3</StepHeader>
          <StepContent>
            <p>
              This is the content for step 3. Finalize your instructions or information here.
            </p>
          </StepContent>
        </Step>
      </Stepper>
    );
  },
  args: {
    selectedStep: 0,
    activeStepClass: 'active-step',
    stepperClassName: 'custom-stepper',
    headerClassName: 'custom-header',
    contentClassName: 'custom-content',
  },
};