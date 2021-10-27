import React from 'react';
import { FormDate } from 'dcx-react-library';
import { Label } from '../generated-components';
import './formDate.scss';
export const FormDateDemo = () => {
  const [isValid, setIsValid] = React.useState(false);
  const [date, setDate] = React.useState(0);
  const [showError, setShowError] = React.useState(false);
  const handleValidity = (valid: boolean, date: number) => {
    valid === false ? setShowError(true) : setShowError(false);
    setIsValid(valid);
    setDate(date);
  };
  return (
    <>
      <h1>Basic</h1>
      <label htmlFor="basicNoLabelDate" style={{ display: 'none' }}>
        Basic no label date
      </label>
      <FormDate
        //@ts-ignore
        id="basicNoLabelDate"
        //@ts-ignore
        handleValidity={(v, d) => handleValidity(v, d)}
        dateFormat="dd/mm/yyyy"
      />
      <h1>Pre set date</h1>
      <label htmlFor="preSetNoLabelDate" style={{ display: 'none' }}>
        Pre set no label date
      </label>
      <FormDate
        //@ts-ignore
        id="preSetNoLabelDate"
        //@ts-ignore
        handleValidity={(v, d) => handleValidity(v, d)}
        dateFormat="dd/mm/yyyy"
        day="29"
        month="07"
        year="1982"
      />
      <h1>Disabled</h1>
      <label htmlFor="disabledNoLabelDate" style={{ display: 'none' }}>
        Disabled no label date
      </label>
      <FormDate
        //@ts-ignore
        id="disabledNoLabelDate"
        //@ts-ignore
        handleValidity={(v, d) => handleValidity(v, d)}
        dateFormat="dd/mm/yyyy"
        day="29"
        month="07"
        year="1982"
        disabled={true}
      />
      <h1>With Label</h1>
      <FormDate
        //@ts-ignore
        handleValidity={(v, d) => handleValidity(v, d)}
        dateFormat="dd/mm/yyyy"
        yearProps={{ label: 'Year' }}
        monthProps={{ label: 'Month' }}
        dayProps={{ label: 'Day' }}
      />
      <h1>Styled</h1>
      <FormDate
        //@ts-ignore
        handleValidity={(v, d) => handleValidity(v, d)}
        dateFormat="dd/mm/yyyy"
        inputClass="input"
        yearProps={{
          label: 'Year',
          classNameLabel: 'yearLabel',
          classNameSpan: 'span',
        }}
        monthProps={{
          label: 'Month',
          classNameLabel: 'yearLabel',
          classNameSpan: 'span',
        }}
        dayProps={{
          label: 'Day',
          classNameLabel: 'yearLabel',
          classNameSpan: 'span',
        }}
      />
      <h1>Custom Label</h1>
      <FormDate
        //@ts-ignore
        handleValidity={(v, d) => handleValidity(v, d)}
        dateFormat="dd/mm/yyyy"
        inputClass="input"
        yearProps={{
          classNameLabel: 'yearLabel',
          customLabel: <Label>Year</Label>,
        }}
        monthProps={{
          classNameLabel: 'yearLabel',
          customLabel: <Label>Month</Label>,
        }}
        dayProps={{
          classNameLabel: 'yearLabel',
          customLabel: <Label>Day</Label>,
        }}
      />
      <h1>With error message</h1>
      <FormDate
        //@ts-ignore
        handleValidity={(v, d) => handleValidity(v, d)}
        inputContainerClass={showError ? 'errorContainer' : ''}
        displayError={showError}
        errorMessage={showError ? 'Enter a valid date' : null}
        errorPosition="top"
        errorClass="error"
        dateFormat="dd/mm/yyyy"
        inputClass="input"
        yearProps={{
          label: 'Year',
          classNameLabel: 'yearLabel',
          classNameSpan: 'span',
        }}
        monthProps={{
          label: 'Month',
          classNameLabel: 'yearLabel',
          classNameSpan: 'span',
        }}
        dayProps={{
          label: 'Day',
          classNameLabel: 'yearLabel',
          classNameSpan: 'span',
        }}
      />
      <hr />
      <pre>isValid: {isValid.toString()}</pre>
      <pre>date: {JSON.stringify(new Date(date))}</pre>
    </>
  );
};
