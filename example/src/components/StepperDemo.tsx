import React from 'react';
import {
  Step,
  Stepper,
  StepHeader,
  StepContent,
} from '@capgeminiuk/dcx-react-library';
import './stepper.scss';
export const StepperDemo = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const moveNext = () => {
    setActiveStep(activeStep + 1);
  };

  const movePrev = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Stepper selectedStep={activeStep} separator={<hr className="separator" />}>
  <Step>
    <StepHeader>
      <div className="stepNumber">1</div>
      Select campaign settings
    </StepHeader>
    <StepContent>
      <div>Configure the basic settings for your campaign, such as name, budget, and duration.</div>
      <div>
        <button onClick={moveNext} aria-label="Go to next step">Next</button>
      </div>
    </StepContent>
  </Step>
  <Step>
    <StepHeader>
      <div className="stepNumber">2</div>
      Create an ad group
    </StepHeader>
    <StepContent>
      <div>Define the target audience and bidding strategy for your ad group.</div>
      <div>
        <button onClick={movePrev} aria-label="Go to previous step">Prev</button>
        <button onClick={moveNext} aria-label="Go to next step">Next</button>
      </div>
    </StepContent>
  </Step>
  <Step>
    <StepHeader>
      <div className="stepNumber">3</div>
      Create an ad
    </StepHeader>
    <StepContent>
      <div>Design your ad content, including images, text, and call-to-action.</div>
      <div>
        <button onClick={movePrev} aria-label="Go to previous step">Prev</button>
      </div>
    </StepContent>
  </Step>
</Stepper>
  );
};