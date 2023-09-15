import { FormDate } from '../../src/formDate/FormDate';
import React, {useState} from 'react';
/**
 * In this section we're using the button component providing the **GovUk style** passing the relative `className.   
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Form/Date/Class based',
  component: FormDate,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'] 
};

export const PreSetDate = {  
  name: 'Preset date',
  render: function ({ onChange, ...args }) {
      const [isValid, setIsValid] = useState(false);
      const [date, setDate] =useState(0);
      const handleValidity = (valid, date) => {
        setIsValid(valid);
        setDate(date);
      };
      return (
        <div>
          <FormDate {...args} handleValidity={(v, d) => handleValidity(v, d)}/>
          <pre>isValid: {isValid.toString()}</pre>
          <pre>date: {JSON.stringify(new Date(date))}</pre>
        </div>
      )
  },
  args: {
    dateFormat:"dd/mm/yyyy",
    inputClass:"govuk-date-input",
    day:"29",
    month:"07",
    year:"1982",
    yearProps:{
      label: 'Year',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    },
    monthProps:{
      label: 'Month',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    },
    dayProps:{
      label: 'Day',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    }
  },
  argTypes: { onClick: { action: 'onClick' } },
};

export const PreSetDateDisabled = {  
  name: 'Preset date disabled',
  render: function ({ onChange, ...args }) {
      const [isValid, setIsValid] = useState(false);
      const [date, setDate] =useState(0);
      const handleValidity = (valid, date) => {
        setIsValid(valid);
        setDate(date);
      };
      return (
        <div>
          <FormDate {...args} handleValidity={(v, d) => handleValidity(v, d)}/>
          <pre>isValid: {isValid.toString()}</pre>
          <pre>date: {JSON.stringify(new Date(date))}</pre>
        </div>
      )
  },
  args: {
    dateFormat:"dd/mm/yyyy",
    inputClass:"govuk-date-input",
    day:"29",
    month:"07",
    year:"1982",
    yearProps:{
      label: 'Year',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    },
    monthProps:{
      label: 'Month',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    },
    dayProps:{
      label: 'Day',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    },
    disabled: true
  },
  argTypes: { onClick: { action: 'onClick' } },
};


/**
 * In the following example we specified as format: `yyyy/mm/dd`
 */
export const CustomDate = {  
  name: 'Custom date',
  render: function ({ onChange, ...args }) {
      const [isValid, setIsValid] = useState(false);
      const [date, setDate] =useState(0);
      const handleValidity = (valid, date) => {
        setIsValid(valid);
        setDate(date);
      };
      return (
        <div>
          <FormDate {...args} handleValidity={(v, d) => handleValidity(v, d)}/>
          <pre>isValid: {isValid.toString()}</pre>
          <pre>date: {JSON.stringify(new Date(date))}</pre>
        </div>
      )
  },
  args: {
    dateFormat:"yyyy/mm/dd",
    inputClass:"govuk-date-input",
    yearProps:{
      label: 'Year',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    },
    monthProps:{
      label: 'Month',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    },
    dayProps:{
      label: 'Day',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    },
  },
  argTypes: { onClick: { action: 'onClick' } },
};

export const ErrorMessage = {  
  name: 'Error message',
  render: function ({ onChange, ...args }) {
      const [isValid, setIsValid] = React.useState(false);
      const [date, setDate] = React.useState(0);
      const [showError, setShowError] = React.useState(false);
      const handleValidity = (valid, date) => {
        setShowError(!valid);
        setIsValid(valid);
        setDate(date);
      };
      return (
        <div>
          <FormDate {...args} handleValidity={(v, d) => handleValidity(v, d)} displayError={showError} inputContainerClass={showError ? 'govuk-date-errorContainer' : ''} errorMessage={showError ? 'Enter a valid date' : null}/>
          <pre>isValid: {isValid.toString()}</pre>
          <pre>date: {JSON.stringify(new Date(date))}</pre>
        </div>
      )
  },
  args: {
    dateFormat:"dd/mm/yyyy",
    inputClass:"govuk-date-input",
    errorPosition:"top",
    errorClass:"govuk-date-error",
    yearProps:{
      label: 'Year',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    },
    monthProps:{
      label: 'Month',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    },
    dayProps:{
      label: 'Day',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    },
  },
  argTypes: { onClick: { action: 'onClick' } },
};