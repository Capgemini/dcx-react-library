import { FormDate } from '../../src/formDate/FormDate';
import React, { useState } from 'react';

export default {
  title: 'DCXLibrary/Form/Date/Without style',
  component: FormDate,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function ({ onClick, ...args }) {
    const [isValid, setIsValid] = useState(false);
    const [date, setDate] = useState(0);
    const handleValidity = (valid, date) => {
      onClick(valid);
      setIsValid(valid);
      setDate(date);
    };
    return (
      <div>
        <FormDate
          dateFormat="dd/mm/yyyy"
          handleValidity={(v, d) => handleValidity(v, d)}
        />
        <pre>isValid: {isValid.toString()}</pre>
        <pre>date: {JSON.stringify(new Date(date))}</pre>
      </div>
    );
  },
  args: {
    dateFormat: 'dd/mm/yyyy',
  },
  argTypes: { onClick: { action: 'onClick' } },
};
