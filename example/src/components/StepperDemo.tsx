import React from 'react';
import {
  Step,
  Stepper,
  StepHeader,
  StepContent,
} from '@capgeminiuk/dcx-react-library';
import './stepper.scss';

export const StepperDemo = () => {
  const [activeStepHorizontal, setActiveStepHorizontal] = React.useState(0);
  const [activeStepVertical, setActiveStepVertical] = React.useState(0);
  const [activeStepCustomSeparator, setActiveStepCustomSeparator] = React.useState(0);

  const moveNextHorizontal = () => {
    setActiveStepHorizontal(activeStepHorizontal + 1);
  };

  const movePrevHorizontal = () => {
    setActiveStepHorizontal(activeStepHorizontal - 1);
  };

  const moveNextVertical = () => {
    setActiveStepVertical(activeStepVertical + 1);
  };

  const movePrevVertical = () => {
    setActiveStepVertical(activeStepVertical - 1);
  };

  const moveNextCustomSeparator = () => {
    setActiveStepCustomSeparator(activeStepCustomSeparator + 1);
  };

  const movePrevCustomSeparator = () => {
    setActiveStepCustomSeparator(activeStepCustomSeparator - 1);
  };

  return (
    <div>
      <h1>Horizontal Stepper</h1>
      <Stepper orientation="horizontal" selectedStep={activeStepHorizontal} separator={<hr className="separator" />}>
        <Step>
          <StepHeader>
            <div className="stepNumber">1</div>
            Select campaign settings
          </StepHeader>
          <StepContent>
            <div>Configure the basic settings for your campaign, such as name, budget, and duration.</div>
            <div>
              <button onClick={moveNextHorizontal} aria-label="Go to next step">Next</button>
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
              <button onClick={movePrevHorizontal} aria-label="Go to previous step">Prev</button>
              <button onClick={moveNextHorizontal} aria-label="Go to next step">Next</button>
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
              <button onClick={movePrevHorizontal} aria-label="Go to previous step">Prev</button>
            </div>
          </StepContent>
        </Step>
      </Stepper>

      <h1>Vertical Stepper</h1>
      <Stepper orientation="vertical" selectedStep={activeStepVertical} separator={<hr className="separator" />}>
        <Step>
          <StepHeader>
            <div className="stepNumber">1</div>
            Select campaign settings
          </StepHeader>
          <StepContent>
            <div>Configure the basic settings for your campaign, such as name, budget, and duration.</div>
            <div>
              <button onClick={moveNextVertical} aria-label="Go to next step">Next</button>
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
              <button onClick={movePrevVertical} aria-label="Go to previous step">Prev</button>
              <button onClick={moveNextVertical} aria-label="Go to next step">Next</button>
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
              <button onClick={movePrevVertical} aria-label="Go to previous step">Prev</button>
            </div>
          </StepContent>
        </Step>
      </Stepper>

      <h1>Stepper with Custom Separator</h1>
      <Stepper orientation="horizontal" selectedStep={activeStepCustomSeparator} separator={<div className="custom-separator">|</div>}>
        <Step>
          <StepHeader>
            <div className="stepNumber">1</div>
            Select campaign settings
          </StepHeader>
          <StepContent>
            <div>Configure the basic settings for your campaign, such as name, budget, and duration.</div>
            <div>
              <button onClick={moveNextCustomSeparator} aria-label="Go to next step">Next</button>
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
              <button onClick={movePrevCustomSeparator} aria-label="Go to previous step">Prev</button>
              <button onClick={moveNextCustomSeparator} aria-label="Go to next step">Next</button>
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
              <button onClick={movePrevCustomSeparator} aria-label="Go to previous step">Prev</button>
            </div>
          </StepContent>
        </Step>
      </Stepper>
    </div>
  );
};

export default StepperDemo;