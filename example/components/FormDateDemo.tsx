import React from 'react';
import { FormDate } from 'dcx-react-library';
import { Label } from '../generated-components';
import './formDate.scss';
export const FormDateDemo = () => (
  <>
    <h1>Basic</h1>
    <FormDate dateFormat="dd/mm/yyyy" />
    <h1>With Label</h1>
    <FormDate
      dateFormat="dd/mm/yyyy"
      yearProps={{ label: 'Year' }}
      monthProps={{ label: 'Month' }}
      dayProps={{ label: 'Day' }}
    />
    <h1>Styled</h1>
    <FormDate
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
  </>
);
