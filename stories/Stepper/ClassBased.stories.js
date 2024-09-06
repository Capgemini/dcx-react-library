/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepHeader,
  StepContent,
} from '../../src/stepper';
import './StepperDemo.css';
import './VerticalStepper.css';

/**
 * In this section, we are using the Stepper component styled with custom style. Feel free to use your own CSS and style the Stepper component as you prefer.
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
  name: 'Horizontal Stepper',
  render: function (args) {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepChange = (step) => {
      setActiveStep(step);
    };

    const steps = [
      {
        header: 'Introduction',
        content: 'This is the content for the Introduction step.',
      },
      {
        header: 'Details',
        content: 'This is the content for the Details step.',
      },
      {
        header: 'Confirmation',
        content: 'This is the content for the Confirmation step.',
      },
    ];

    return (
      <div className="stepper-container">
        <Stepper className="stepper" selectedStep={activeStep} orientation="horizontal">
          {steps.map((step, index) => (
            <Step
              key={index}
              className='step-header-item'
              onClick={() => handleStepChange(index)}
              aria-label={`Step ${index + 1}`}
            >
              <StepHeader className="step-header">
                <div className={`step-number-container ${activeStep > index ? 'completed' : activeStep === index ? 'active' : 'inactive'}`}>
                  {activeStep > index ? '' : index + 1}
                </div>
                <div className="step-header-text">
                  {step.header}
                </div>
              </StepHeader>
              <StepContent className="step-content-wrapper">
                {step.content}
              </StepContent>
            </Step>
          ))}
        </Stepper>

        <div className="button-container">
          {
            <button
              className="nav-button prev"
              onClick={() => handleStepChange(activeStep - 1)}
              aria-label="Previous Step"
              disabled={activeStep === 0}
            >
              Prev
            </button>
          }
          {activeStep < steps.length - 1 && (
            <button
              className="nav-button next"
              onClick={() => handleStepChange(activeStep + 1)}
              aria-label="Next Step"
            >
              Next
            </button>
          )}
          {activeStep === steps.length - 1 && (
            <button
              className="nav-button submit"
              onClick={() => alert('Form Submitted')}
              aria-label="Submit Form"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    );
  },
  args: {
    activeStep: 0,
  },
};
/**
 * This component renders a vertical stepper with custom class names.
 */
export const VerticalStepper = {
  name: 'Vertical Stepper',
  render: function (args) {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepChange = (step) => {
      if (step >= 0 && step < args.steps.length) {
        setActiveStep(step);
      }
    };

    const isLastStep = activeStep === args.steps.length - 1;

    return (
      <div className="custom-stepper-container">
        <Stepper
          orientation="vertical" /* Ensure vertical orientation */
          selectedStep={activeStep}
          className="custom-stepper-vertical"
        >
          {args.steps.map((step, index) => (
            <Step
              key={index}
              className={`custom-step-item ${activeStep === index ? 'custom-active' : ''}`}
            >
              <StepHeader className="custom-step-header-wrapper">
                <div className={`custom-step-number-badge ${activeStep > index ? 'completed' : activeStep === index ? 'active' : 'inactive'}`} aria-label={`Step ${index + 1}`}>
                  {activeStep > index ? '' : index + 1}
                </div>
                <div className="custom-step-header-text">
                  {step.header}
                </div>
              </StepHeader>
              <StepContent className="custom-step-content-wrapper">
                {step.content}
                <div className="custom-navigation-buttons">
                  <button
                    onClick={() => handleStepChange(index - 1)}
                    aria-label="Previous Step"
                    className="custom-navigation-button"
                    disabled={index === 0}
                  >
                    Prev
                  </button>
                  {!isLastStep && (
                    <button
                      onClick={() => handleStepChange(index + 1)}
                      aria-label="Next Step"
                      className="custom-navigation-button"
                    >
                      Next
                    </button>
                  )}
                  {isLastStep && (
                    <button
                      onClick={() => args.onSubmit && args.onSubmit()}
                      aria-label="Submit"
                      className="custom-navigation-button custom-submit"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    );
  },
  args: {
    activeStep: 0,
    steps: [
      {
        header: 'Campaign Settings',
        content: (
          <div className="custom-step-content-wrapper">
            <p>Configure your campaign settings including name, budget, and schedule.</p>
          </div>
        ),
      },
      {
        header: 'Target Audience',
        content: (
          <div className="custom-step-content-wrapper">
            <p>Define your target audience by specifying age range, location, and interests.</p>
          </div>
        ),
      },
      {
        header: 'Ad Design',
        content: (
          <div className="custom-step-content-wrapper">
            <p>Design your ad by providing a title, description, and call to action.</p>
          </div>
        ),
      },
      {
        header: 'Review and Submit',
        content: (
          <div className="custom-step-content-wrapper">
            <p>Review all your settings and submit your campaign for approval.</p>
          </div>
        ),
      },
    ],
    onSubmit: () => alert('Campaign Submitted!'),
  },
};



/**
 * This is a demo component for the Stepper with multiple form sections.
 */
export const StepperDemo = {
  name: 'Stepper Demo',
  render: function (args) {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepChange = (step) => {
      setActiveStep(step);
    };

    const steps = [
      {
        header: 'Personal Information',
        content: (
          <div className="form">
            <div className="form-row">
              <label className="form-label">First Name:</label>
              <input type="text" name="firstName" className="form-input" aria-label="First Name" />
            </div>
            <div className="form-row">
              <label className="form-label">Last Name:</label>
              <input type="text" name="lastName" className="form-input" aria-label="Last Name" />
            </div>
            <div className="form-row">
              <label className="form-label">Email:</label>
              <input type="email" name="email" className="form-input" aria-label="Email" />
            </div>
          </div>
        ),
      },
      {
        header: 'Address Details',
        content: (
          <div className="form">
            <div className="form-row">
              <label className="form-label">Street Address:</label>
              <input type="text" name="streetAddress" className="form-input" aria-label="Street Address" />
            </div>
            <div className="form-row">
              <label className="form-label">City:</label>
              <input type="text" name="city" className="form-input" aria-label="City" />
            </div>
            <div className="form-row">
              <label className="form-label">State:</label>
              <input type="text" name="state" className="form-input" aria-label="State" />
            </div>
            <div className="form-row">
              <label className="form-label">Zip Code:</label>
              <input type="text" name="zipCode" className="form-input" aria-label="Zip Code" />
            </div>
          </div>
        ),
      },
      {
        header: 'Payment Information',
        content: (
          <div className="form">
            <div className="form-row">
              <label className="form-label">Credit Card Number:</label>
              <input type="text" name="cardNumber" className="form-input" aria-label="Credit Card Number" />
            </div>
            <div className="form-row">
              <label className="form-label">Expiration Date:</label>
              <input type="month" name="expirationDate" className="form-input" aria-label="Expiration Date" />
            </div>
            <div className="form-row">
              <label className="form-label">CVV:</label>
              <input type="text" name="cvv" className="form-input" aria-label="CVV" />
            </div>
          </div>
        ),
      },
      {
        header: 'Shipping Details',
        content: (
          <div className="form">
            <div className="form-row">
              <label className="form-label">Shipping Method:</label>
              <select name="shippingMethod" className="form-select" aria-label="Shipping Method">
                <option value="standard">Standard</option>
                <option value="express">Express</option>
              </select>
            </div>
            <div className="form-row">
              <label className="form-label">Shipping Address:</label>
              <input type="text" name="shippingAddress" className="form-input" aria-label="Shipping Address" />
            </div>
          </div>
        ),
      },
      {
        header: 'Review and Submit',
        content: (
          <div className="form">
            <div className="form-row">
              <label className="form-label">Comments:</label>
              <textarea name="comments" className="form-textarea" aria-label="Comments"></textarea>
            </div>
            <div className="form-row">
              <label className="form-label">Agree to Terms:</label>
              <input type="checkbox" name="terms" className="form-checkbox" aria-label="Agree to Terms" />
            </div>
          </div>
        ),
      },
    ];

    return (
      <div className="stepper-container">
        <Stepper className="stepper" selectedStep={activeStep} orientation="horizontal">
          {steps.map((step, index) => (
            <Step
              key={index}
              className='step-header-item'
              onClick={() => handleStepChange(index)}
              aria-label={`Step ${index + 1}`}
            >
              <StepHeader className="step-header">
                <div className={`step-number-container ${activeStep > index ? 'completed' : activeStep === index ? 'active' : 'inactive'}`}>
                  {activeStep > index ? '' : index + 1}
                </div>
                <div className="step-header-text">
                  {step.header}
                </div>
              </StepHeader>
              <StepContent className="step-content-wrapper">
                {step.content}
              </StepContent>
            </Step>
          ))}
        </Stepper>

        <div className="button-container">
          {activeStep > 0 && (
            <button
              className="nav-button prev"
              onClick={() => handleStepChange(activeStep - 1)}
              aria-label="Previous Step"
            >
              &lt;
            </button>
          )}
          {activeStep < steps.length - 1 && (
            <button
              className="nav-button next"
              onClick={() => handleStepChange(activeStep + 1)}
              aria-label="Next Step"
            >
              &gt;
            </button>
          )}
          {activeStep === steps.length - 1 && (
            <button
              className="nav-button submit"
              onClick={() => alert('Form Submitted')}
              aria-label="Submit Form"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    );
  },
  args: {
    activeStep: 0,
  },
};