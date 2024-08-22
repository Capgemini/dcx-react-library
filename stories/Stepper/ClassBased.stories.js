import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepHeader,
  StepContent,
} from '../../src/stepper';
import './style.css';

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
 * This component renders a vertical stepper with custom class names.
 */
export const VerticalStepper = {
  name: 'Vertical Stepper',
  render: function (args) {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepChange = (step) => {
      setActiveStep(step);
    };

    return (
      <Stepper
        orientation="vertical"
        selectedStep={activeStep}
        separator={<hr className="separator" />}
      >
        {args.steps.map((step, index) => (
          <Step
            key={index}
            className={`step ${activeStep === index ? 'active' : ''}`}
          >
            <StepHeader className="step-header">
              <div className="step-number" aria-label={`Step ${index + 1}`}>
                {activeStep > index ? '✔️' : index + 1}
              </div>
              {step.header}
            </StepHeader>
            <StepContent className="step-content">
              <div>{step.content}</div>
              <div className="button-container">
                {index > 0 && (
                  <button
                    onClick={() => handleStepChange(index - 1)}
                    aria-label="Previous Step"
                  >
                    Prev
                  </button>
                )}
                {index < args.steps.length - 1 && (
                  <button
                    onClick={() => handleStepChange(index + 1)}
                    aria-label="Next Step"
                  >
                    Next
                  </button>
                )}
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    );
  },
  args: {
    activeStep: 0,
    steps: [
      {
        header: 'Campaign Settings',
        content: (
          <div className="step-content">
            <label className="form-label">
              Campaign Name: <input type="text" name="campaignName" className="form-input" />
            </label>
            <label className="form-label">
              Budget: <input type="number" name="budget" className="form-input" />
            </label>
            <label className="form-label">
              Schedule: <input type="date" name="schedule" className="form-input" />
            </label>
          </div>
        ),
      },
      {
        header: 'Target Audience',
        content: (
          <div className="step-content">
            <label className="form-label">
              Age Range:
              <select name="ageRange" className="form-select">
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="55-64">55-64</option>
                <option value="65+">65+</option>
              </select>
            </label>
            <label className="form-label">
              Location: <input type="text" name="location" className="form-input" />
            </label>
            <label className="form-label">
              Interests: <input type="text" name="interests" className="form-input" />
            </label>
          </div>
        ),
      },
      {
        header: 'Ad Design',
        content: (
          <div className="step-content">
            <label className="form-label">
              Ad Title: <input type="text" name="adTitle" className="form-input" />
            </label>
            <label className="form-label">
              Ad Description: <textarea name="adDescription" className="form-textarea"></textarea>
            </label>
            <label className="form-label">
              Call to Action:
              <select name="callToAction" className="form-select">
                <option value="buy_now">Buy Now</option>
                <option value="learn_more">Learn More</option>
                <option value="sign_up">Sign Up</option>
              </select>
            </label>
          </div>
        ),
      },
      {
        header: 'Review & Submit',
        content: (
          <div className="step-content">
            <p>
              Please review your campaign settings, target audience, and ad design
              before submitting.
            </p>
            <button type="submit" className="form-button">
              Submit Campaign
            </button>
          </div>
        ),
      },
    ],
  },
};


/**
 * This component renders a horizontal stepper with a custom separator and custom class names.
 */
export const CustomSeparatorStepper = {
  name: 'Stepper with Custom Separator',
  render: function (args) {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepChange = (step) => {
      if (step >= 0 && step < args.steps.length) {
        setActiveStep(step);
      }
    };

    const isLastStep = activeStep === args.steps.length - 1;

    return (
      <div className="stepper-wrapper">
        <Stepper
          orientation="horizontal"
          selectedStep={activeStep}
          separator={<span className="separator-custom">|</span>}
          className="stepper-horizontal"
        >
          {args.steps.map((step, index) => (
            <Step
              key={index}
              className={`step-item ${activeStep === index ? 'active' : ''}`}
            >
              <StepHeader className="step-header-wrapper">
                <div className="step-number-badge" aria-label={`Step ${index + 1}`}>
                  {activeStep > index ? '✔️' : index + 1}
                </div>
                {step.header}
              </StepHeader>
              <StepContent className="step-content-wrapper">
                {step.content}
                <div className="navigation-buttons">
                  <button
                    onClick={() => handleStepChange(index - 1)}
                    aria-label="Previous Step"
                    className="navigation-button"
                    disabled={index === 0}
                  >
                    Prev
                  </button>
                  {!isLastStep && (
                    <button
                      onClick={() => handleStepChange(index + 1)}
                      aria-label="Next Step"
                      className="navigation-button"
                    >
                      Next
                    </button>
                  )}
                  {isLastStep && (
                    <button
                      onClick={() => args.onSubmit && args.onSubmit()}
                      aria-label="Submit"
                      className="navigation-button"
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
          <div className="step-content-wrapper">
            <p>Configure your campaign settings including name, budget, and schedule.</p>
          </div>
        ),
      },
      {
        header: 'Target Audience',
        content: (
          <div className="step-content-wrapper">
            <p>Define your target audience by specifying age range, location, and interests.</p>
          </div>
        ),
      },
      {
        header: 'Ad Design',
        content: (
          <div className="step-content-wrapper">
            <p>Design your ad by providing a title, description, and call to action.</p>
          </div>
        ),
      },
      {
        header: 'Review & Submit',
        content: (
          <div className="step-content-wrapper">
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
          <div className="step-content">
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
          <div className="step-content">
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
          <div className="step-content">
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
          <div className="step-content">
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
          <div className="step-content">
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
        <div className="stepper-header">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-header-item ${activeStep > index ? 'completed' : activeStep === index ? 'active' : 'inactive'}`}
              onClick={() => handleStepChange(index)}
              aria-label={`Step ${index + 1}`}
            >
              <div className="step-number-container">
                {activeStep > index ? '✔️' : index + 1}
              </div>
              <div className="step-header-text">
                {step.header}
              </div>
            </div>
          ))}
        </div>

        <div className="step-content-wrapper">
          <div className="step-content">
            {steps[activeStep].content}
          </div>

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
      </div>
    );
  },
  args: {
    activeStep: 0,
  },
};