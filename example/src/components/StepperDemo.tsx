import React from 'react';
import {
  Step,
  Stepper,
  StepHeader,
  StepContent,
} from '@capgeminiuk/dcx-react-library';
import './stepper.scss';
export const StepperDemo = () => {
  const [activeStep, setActiveStep] = React.useState(1);

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
          <div>content-first</div>
          <div>
            <button onClick={moveNext}>Next</button>
          </div>
        </StepContent>
      </Step>
      <Step>
        <StepHeader>
          <div className="stepNumber">2</div>
          Create an ad group
        </StepHeader>
        <StepContent>
          content-second
          <div>
            <button onClick={movePrev}>Prev</button>
            <button onClick={moveNext}>Next</button>
          </div>
        </StepContent>
      </Step>
      <Step>
        <StepHeader>
          <div className="stepNumber">3</div>
          Create an ad
        </StepHeader>
        <StepContent>
          content-third
          <div>
            <button onClick={movePrev}>Prev</button>
          </div>
        </StepContent>
      </Step>
    </Stepper>
  );
};
