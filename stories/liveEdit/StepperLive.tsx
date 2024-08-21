import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Stepper, Step, StepHeader, StepContent } from '../../src/stepper';

const StepperDemo = `
function StepperDemo() {
  return (
    <Stepper
      selectedStep={0}
      activeStepClass="active-step"
      stepperClassName="custom-stepper"
      headerClassName="custom-header"
      contentClassName="custom-content"
    >
      <Step key="1">
        <StepHeader>Step 1</StepHeader>
        <StepContent>
          <p>This is the content for step 1. Here you can provide detailed instructions or information.</p>
        </StepContent>
      </Step>
      <Step key="2">
        <StepHeader>Step 2</StepHeader>
        <StepContent>
          <p>This is the content for step 2. Continue providing information or instructions here.</p>
        </StepContent>
      </Step>
      <Step key="3">
        <StepHeader>Step 3</StepHeader>
        <StepContent>
          <p>This is the content for step 3. Finalize your instructions or information here.</p>
        </StepContent>
      </Step>
    </Stepper>
  );
}
`;

const StepperLive = () => {
  const scope = { Stepper, Step, StepHeader, StepContent };
  return (
    <LiveProvider code={StepperDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default StepperLive;