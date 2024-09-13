/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepHeader,
  StepContent,
} from '../../src/stepper';

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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        width: '100%',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'fixed',
          top: 0,
          width: '100%',
          padding: '10px 0',
          zIndex: 1000,
        }}>
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => handleStepChange(index)}
              aria-label={`Step ${index + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                flex: 1,
              }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '10px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: activeStep >= index ? '#1976d2' : '#D1D0CE',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  position: 'relative',
                }}>
                  {activeStep > index ? (
                    <span style={{
                      fontSize: '18px',
                      color: 'white',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}>✓</span>
                  ) : (
                    index + 1
                  )}
                </div>
                <div style={{
                  fontSize: '14px',
                  textAlign: 'center',
                  color: '#333',
                }}>
                  {step.header}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '80px', // Adjust this value based on the height of the header
          width: '100%',
        }}>
          {steps.map((step, index) => (
            activeStep === index && (
              <div key={index} style={{
                marginTop: '20px',
                padding: '16px',
                width: '100%',
                overflow: 'hidden',
                overflowWrap: 'break-word',
              }}>
                {step.content}
              </div>
            )
          ))}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '14px',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              margin: '0 5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => handleStepChange(activeStep - 1)}
            aria-label="Previous Step"
            disabled={activeStep === 0}
          >
            Prev
          </button>
          {activeStep < steps.length - 1 && (
            <button
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                backgroundColor: '#1976d2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                margin: '0 5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
              onClick={() => handleStepChange(activeStep + 1)}
              aria-label="Next Step"
            >
              Next
            </button>
          )}
          {activeStep === steps.length - 1 && (
            <button
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                margin: '0 5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
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
      <div style={{ width: '100%', padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {args.steps.map((step, index) => (
            <div key={index} style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: activeStep >= index ? '#1976d2' : '#D1D0CE',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    position: 'relative',
                  }}
                >
                  {activeStep > index ? (
                    <span style={{
                      fontSize: '18px',
                      color: 'white',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}>✓</span>
                  ) : (
                    index + 1
                  )}
                </div>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                  {step.header}
                </div>
              </div>
              {activeStep === index && (
                <div style={{ marginTop: '8px', paddingLeft: '52px', color: '#666' }}>
                  <p>{step.content}</p>
                  <div style={{ display: 'flex', marginTop: '16px' }}>
                    <button
                      onClick={() => handleStepChange(index - 1)}
                      style={{
                        padding: '10px 20px',
                        fontSize: '14px',
                        backgroundColor: '#1976d2',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: '8px',
                      }}
                      disabled={index === 0}
                    >
                      Back
                    </button>
                    <button
                      onClick={() => handleStepChange(index + 1)}
                      style={{
                        padding: '10px 20px',
                        fontSize: '14px',
                        backgroundColor: isLastStep ? '#28a745' : '#1976d2',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      {isLastStep ? 'Submit' : 'Continue'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  },
  args: {
    activeStep: 0,
    steps: [
      {
        header: 'Campaign Settings',
        content: 'Configure your campaign settings including name, budget, and schedule.',
      },
      {
        header: 'Target Audience',
        content: 'Define your target audience by specifying age range, location, and interests.',
      },
      {
        header: 'Ad Design',
        content: 'Design your ad by providing a title, description, and call to action.',
      },
      {
        header: 'Review and Submit',
        content: 'Review all your settings and submit your campaign for approval.',
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
          <div className="form" style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', width: '30%' }}>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>First Name:</label>
              <input type="text" name="firstName" className="form-input" aria-label="First Name" style={{ width: '80%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>Last Name:</label>
              <input type="text" name="lastName" className="form-input" aria-label="Last Name" style={{ width: '80%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>Email:</label>
              <input type="email" name="email" className="form-input" aria-label="Email" style={{ width: '80%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
          </div>
        ),
      },
      {
        header: 'Address Details',
        content: (
          <div className="form" style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', width: '30%' }}>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>Street Address:</label>
              <input type="text" name="streetAddress" className="form-input" aria-label="Street Address" style={{ width: '80%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>City:</label>
              <input type="text" name="city" className="form-input" aria-label="City" style={{ width: '80%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>State:</label>
              <input type="text" name="state" className="form-input" aria-label="State" style={{ width: '80%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>Zip Code:</label>
              <input type="text" name="zipCode" className="form-input" aria-label="Zip Code" style={{ width: '80%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
          </div>
        ),
      },
      {
        header: 'Payment Information',
        content: (
          <div className="form" style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', width: '30%' }}>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>Credit Card Number:</label>
              <input type="text" name="cardNumber" className="form-input" aria-label="Credit Card Number" style={{ width: '80%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>Expiration Date:</label>
              <input type="month" name="expirationDate" className="form-input" aria-label="Expiration Date" style={{ width: '80%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>CVV:</label>
              <input type="text" name="cvv" className="form-input" aria-label="CVV" style={{ width: '80%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
          </div>
        ),
      },
      {
        header: 'Shipping Details',
        content: (
          <div className="form" style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', width: '30%' }}>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>Shipping Method:</label>
              <select name="shippingMethod" className="form-select" aria-label="Shipping Method" style={{ width: '80%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                <option value="standard">Standard</option>
                <option value="express">Express</option>
              </select>
            </div>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>Shipping Address:</label>
              <input type="text" name="shippingAddress" className="form-input" aria-label="Shipping Address" style={{ width: '80%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
          </div>
        ),
      },
      {
        header: 'Review and Submit',
        content: (
          <div className="form" style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', width: '30%' }}>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>Comments:</label>
              <textarea name="comments" className="form-textarea" aria-label="Comments" style={{ width: '80%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
            </div>
            <div className="form-row" style={{ marginBottom: '12px' }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '4px' }}>Agree to Terms:</label>
              <input type="checkbox" name="terms" className="form-checkbox" aria-label="Agree to Terms" style={{ marginLeft: '4px' }} />
            </div>
          </div>
        ),
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '10px 0' }}>
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => handleStepChange(index)}
              aria-label={`Step ${index + 1}`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', flex: 1 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: activeStep >= index ? '#1976d2' : '#D1D0CE', color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', position: 'relative' }}>
                  {activeStep > index ? (
                    <span style={{ fontSize: '18px', color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>✓</span>
                  ) : (
                    index + 1
                  )}
                </div>
                <div style={{ fontSize: '14px', textAlign: 'center', color: '#333' }}>
                  {step.header}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '20px', width: '100%' }}>
          {steps.map((step, index) => (
            activeStep === index && (
              <div key={index} style={{ marginTop: '20px', padding: '16px', width: '100%' }}>
                {step.content}
              </div>
            )
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button
            style={{ padding: '10px 20px', fontSize: '14px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', margin: '0 5px' }}
            onClick={() => handleStepChange(activeStep - 1)}
            aria-label="Previous Step"
            disabled={activeStep === 0}
          >
            Prev
          </button>
          {activeStep < steps.length - 1 && (
            <button
              style={{ padding: '10px 20px', fontSize: '14px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', margin: '0 5px' }}
              onClick={() => handleStepChange(activeStep + 1)}
              aria-label="Next Step"
            >
              Next
            </button>
          )}
          {activeStep === steps.length - 1 && (
            <button
              style={{ padding: '10px 20px', fontSize: '14px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', margin: '0 5px' }}
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