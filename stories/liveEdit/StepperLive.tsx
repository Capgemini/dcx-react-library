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
      style={{
        width: '100%',
        marginBottom: '40px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Step key="1" style={{ marginBottom: '20px' }}>
        <StepHeader
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#333',
            marginBottom: '10px',
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#1976d2',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            1
          </div>
          Step 1
        </StepHeader>
        <StepContent
          style={{
            padding: '10px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p>This is the content for step 1. Here you can provide detailed instructions or information.</p>
        </StepContent>
      </Step>
      <Step key="2" style={{ marginBottom: '20px' }}>
        <StepHeader
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#333',
            marginBottom: '10px',
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#1976d2',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            2
          </div>
          Step 2
        </StepHeader>
        <StepContent
          style={{
            padding: '10px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p>This is the content for step 2. Continue providing information or instructions here.</p>
        </StepContent>
      </Step>
      <Step key="3" style={{ marginBottom: '20px' }}>
        <StepHeader
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#333',
            marginBottom: '10px',
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#1976d2',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            3
          </div>
          Step 3
        </StepHeader>
        <StepContent
          style={{
            padding: '10px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
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