import React, { useState } from 'react';
import {
  Step,
  Stepper,
  StepHeader,
  StepContent,
} from '@capgeminiuk/dcx-react-library';
import './stepper.scss';

const StepperDemo: React.FC = () => {
  const [activeStepHorizontal, setActiveStepHorizontal] = useState(0);
  const [activeStepVertical, setActiveStepVertical] = useState(0);
  const [activeStepCustomSeparator, setActiveStepCustomSeparator] = useState(0);
  const [activeStepItems, setActiveStepItems] = useState(0);

  const handleStepChange = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    step: number
  ) => {
    setter(step);
  };

  const steps = [
    {
      header: 'Campaign Settings',
      content: (
        <div className="step-content">
          <label className="form-label">
            Campaign Name:{' '}
            <input type="text" name="campaignName" className="form-input" />
          </label>
          <label className="form-label">
            Budget: <input type="number" name="budget" className="form-input" />
          </label>
          <label className="form-label">
            Schedule:{' '}
            <input type="date" name="schedule" className="form-input" />
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
            Location:{' '}
            <input type="text" name="location" className="form-input" />
          </label>
          <label className="form-label">
            Interests:{' '}
            <input type="text" name="interests" className="form-input" />
          </label>
        </div>
      ),
    },
    {
      header: 'Ad Design',
      content: (
        <div className="step-content">
          <label className="form-label">
            Ad Title:{' '}
            <input type="text" name="adTitle" className="form-input" />
          </label>
          <label className="form-label">
            Ad Description:{' '}
            <textarea name="adDescription" className="form-textarea"></textarea>
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
  ];

  const items = [
    {
      header: 'Order Summary',
      content: (
        <div className="step-content">
          <label className="form-label">
            Product Name:{' '}
            <input
              type="text"
              name="productName"
              className="form-input"
              aria-label="Product Name"
            />
          </label>
          <label className="form-label">
            Quantity:{' '}
            <input
              type="number"
              name="quantity"
              className="form-input"
              aria-label="Quantity"
            />
          </label>
          <label className="form-label">
            Price:{' '}
            <input
              type="number"
              name="price"
              className="form-input"
              aria-label="Price"
            />
          </label>
        </div>
      ),
    },
    {
      header: 'Shipping Information',
      content: (
        <div className="step-content">
          <label className="form-label">
            Shipping Method:
            <select
              name="shippingMethod"
              className="form-select"
              aria-label="Shipping Method"
            >
              <option value="standard">Standard</option>
              <option value="express">Express</option>
            </select>
          </label>
          <label className="form-label">
            Address:{' '}
            <input
              type="text"
              name="address"
              className="form-input"
              aria-label="Shipping Address"
            />
          </label>
        </div>
      ),
    },
    {
      header: 'Payment Information',
      content: (
        <div className="step-content">
          <label className="form-label">
            Credit Card Number:{' '}
            <input
              type="text"
              name="cardNumber"
              className="form-input"
              aria-label="Credit Card Number"
            />
          </label>
          <label className="form-label">
            Expiration Date:{' '}
            <input
              type="month"
              name="expirationDate"
              className="form-input"
              aria-label="Expiration Date"
            />
          </label>
          <label className="form-label">
            CVV:{' '}
            <input
              type="text"
              name="cvv"
              className="form-input"
              aria-label="CVV"
            />
          </label>
        </div>
      ),
    },
    {
      header: 'Billing Information',
      content: (
        <div className="step-content">
          <label className="form-label">
            Street Address:{' '}
            <input
              type="text"
              name="billingStreet"
              className="form-input"
              aria-label="Billing Street Address"
            />
          </label>
          <label className="form-label">
            City:{' '}
            <input
              type="text"
              name="billingCity"
              className="form-input"
              aria-label="Billing City"
            />
          </label>
          <label className="form-label">
            County:{' '}
            <input
              type="text"
              name="billingState"
              className="form-input"
              aria-label="Billing County"
            />
          </label>
          <label className="form-label">
            Post Code:{' '}
            <input
              type="text"
              name="billingZip"
              className="form-input"
              aria-label="Billing Post Code"
            />
          </label>
        </div>
      ),
    },
    {
      header: 'Review and Confirm',
      content: (
        <div className="step-content">
          <label className="form-label">
            Order Notes:{' '}
            <textarea
              name="orderNotes"
              className="form-textarea"
              aria-label="Order Notes"
            ></textarea>
          </label>
          <label className="form-label">
            Agree to Terms:{' '}
            <input
              type="checkbox"
              name="terms"
              className="form-checkbox"
              aria-label="Agree to Terms"
            />
          </label>
        </div>
      ),
    },
    {
      header: 'Place Order',
      content: (
        <div className="step-content">
          <button
            type="submit"
            className="form-button"
            aria-label="Submit Order"
          >
            Submit Order
          </button>
        </div>
      ),
    },
  ];

  const renderStepper = (
    activeStep: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    items: any[],
    orientation: 'horizontal' | 'vertical',
    customSeparator: JSX.Element | undefined = undefined
  ) => (
    <Stepper
      orientation={orientation}
      selectedStep={activeStep}
      separator={customSeparator || <hr className="separator" />}
    >
      {items.map((item, index) => (
        <Step
          key={index}
          className={`step ${activeStep === index ? 'active' : ''}`}
        >
          <StepHeader className="step-header">
            <div className="step-number" aria-label={`Step ${index + 1}`}>
              {activeStep > index ? '✔️' : index + 1}
            </div>
            {item.header}
          </StepHeader>
          <StepContent className="step-content">
            <div>{item.content}</div>
            <div className="button-container">
              {index > 0 && (
                <button
                  onClick={() => handleStepChange(setter, index - 1)}
                  aria-label="Previous Step"
                >
                  Prev
                </button>
              )}
              {index < items.length - 1 && (
                <button
                  onClick={() => handleStepChange(setter, index + 1)}
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

  return (
    <div className="stepper-demo">
      <h1>Horizontal Stepper</h1>
      {renderStepper(
        activeStepHorizontal,
        setActiveStepHorizontal,
        steps,
        'horizontal'
      )}

      <h1>Vertical Stepper</h1>
      {renderStepper(
        activeStepVertical,
        setActiveStepVertical,
        steps,
        'vertical'
      )}

      <h1>Stepper with Custom Separator</h1>
      {renderStepper(
        activeStepCustomSeparator,
        setActiveStepCustomSeparator,
        steps,
        'horizontal',
        <span className="custom-separator">|</span>
      )}

      <h1>Order Process Stepper</h1>
      {renderStepper(activeStepItems, setActiveStepItems, items, 'horizontal')}
    </div>
  );
};

export default StepperDemo;
