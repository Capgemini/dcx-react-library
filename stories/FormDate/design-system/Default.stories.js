import { FormDate } from '../../../src/formDate';
import React, { useState } from 'react';

const InputStory = (args) => {
  const [isValid, setIsValid] = useState(false);
    const [date, setDate] = useState(0);
    const handleValidity = (valid, date) => {
      setIsValid(valid);
      setDate(date);
    };
    return (
      <div>
        <FormDate {...args} handleValidity={(v, d) => handleValidity(v, d)} />
        <pre>isValid: {isValid.toString()}</pre>
        <pre>date: {JSON.stringify(new Date(date))}</pre>
      </div>
    );
};

/**
 * Here we display the component in its natural form, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Form/Date/Design system/Default',
  component: FormDate,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  render: InputStory,
  args: {
    dateFormat: 'dd/mm/yyyy',
    inputClass: 'govuk-date-input',
    day: '29',
    month: '07',
    year: '1982',
    yearProps: {
      label: 'Year',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    },
    monthProps: {
      label: 'Month',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    },
    dayProps: {
      label: 'Day',
      classNameLabel: 'govuk-date-yearLabel',
      classNameSpan: 'govuk-date-span',
    }

  },
  argTypes: { onChange: { action: 'onChange' } },
};

// export const Label = {
//   name: 'Label',
//   render: InputStory,
//   args: {
//     name: 'text',
//     type: 'text',
//     label: 'User Reference (Optional)',
//     inputProps: {
//       id: 'user-reference',
//     },
//     labelProps: {
//       htmlFor: 'user-reference',
//     },
//     value: '',
//     ariaLabel: 'standard-input',
//     ariaRequired: 'true',
//   },
//   argTypes: { onChange: { action: 'onChange' } },
// };

// export const Disabled = {
//   name: 'Disabled',
//   render: InputStory,
//   args: {
//     name: 'text',
//     type: 'text',
//     label: 'User Reference (Optional)',
//     inputProps: {
//       id: 'user-reference',
//       disabled: true,
//     },
//     labelProps: {
//       htmlFor: 'user-reference',
//     },
//     value: '',
//     ariaLabel: 'standard-input',
//     ariaRequired: 'true',
//   },
//   argTypes: { onChange: { action: 'onChange' } },
// };

// export const Suffix = {
//   name: 'Suffix',
//   render: InputStory,
//   args: {
//     name: 'text0',
//     type: 'text',
//     value: '',
//     suffix: {
//       properties: {
//         'aria-hidden': 'true',
//       },
//       content: 'kg',
//     },
//     ariaLabel: 'standard-input-suffix',
//     ariaRequired: 'true',
//   },
//   argTypes: { onChange: { action: 'onChange' } },
// };

// export const Prefix = {
//   name: 'Prefix',
//   render: InputStory,
//   args: {
//     name: 'text0',
//     type: 'text',
//     value: '',
//     prefix: {
//       properties: {
//         'aria-hidden': 'true',
//       },
//       content: '£',
//     },
//     ariaLabel: 'standard-input-suffix',
//     ariaRequired: 'true',
//   },
//   argTypes: { onChange: { action: 'onChange' } },
// };

// export const PrefixAndSuffix = {
//   name: 'Prefix and suffix',
//   render: InputStory,
//   args: {
//     name: 'text0',
//     type: 'text',
//     value: '',
//     suffix: {
//       properties: {
//         'aria-hidden': 'true',
//       },
//       content: 'per item',
//     },
//     prefix: {
//       properties: {
//         'aria-hidden': 'true',
//       },
//       content: '£',
//     },
//     ariaLabel: 'standard-input-suffix',
//     ariaRequired: 'true',
//   },
//   argTypes: { onChange: { action: 'onChange' } },
// };

// export const Hint = {
//   name: 'Hint',
//   render: InputStory,
//   args: {
//     name: 'text3',
//     type: 'text',
//     value: '',
//     hint: {
//       position: 'above',
//       text: 'this is an example hint',
//     },
//     ariaLabel: 'standard-input-validation',
//     ariaRequired: 'true',
//   },
//   argTypes: { onChange: { action: 'onChange' } },
// };

// export const StaticError = {
//   name: 'Static error after hint',
//   args: {
//     label: 'this is a label',
//     name: 'id',
//     inputProps: { id: 'id' },
//     type: 'text',
//     value: 'value',
//     ariaLabel: 'input-with-error',
//     ariaRequired: 'true',
//     hint: {
//       position: 'above',
//       text: 'My hint',
//       id: 'id_hint',
//     },
//     staticErrorMessage: 'some error appened here',
//     errorPosition: 'after-hint',
//     hiddenErrorText: 'Error:',
//   },
//   argTypes: { onChange: { action: 'onChange' } },
// };

// export const StaticErrorBottom = {
//   name: 'Static error bottom',
//   args: {
//     label: 'this is a label',
//     name: 'id',
//     inputProps: { id: 'id' },
//     type: 'text',
//     value: 'value',
//     ariaLabel: 'input-with-error',
//     ariaRequired: 'true',
//     hint: {
//       position: 'above',
//       text: 'My hint',
//       id: 'id_hint',
//     },
//     staticErrorMessage: 'some error appened here',
//     errorPosition: 'bottom',
//     hiddenErrorText: 'Error:',
//   },
// };

// export const StaticErrorBottomHint = {
//   name: 'Static error bottom',
//   args: {
//     label: 'this is a label',
//     name: 'id',
//     inputProps: { id: 'id' },
//     type: 'text',
//     value: 'value',
//     ariaLabel: 'input-with-error',
//     ariaRequired: 'true',
//     hint: {
//       position: 'bottom',
//       text: 'My hint',
//       id: 'id_hint',
//     },
//     staticErrorMessage: 'some error appened here',
//     errorPosition: 'bottom',
//     hiddenErrorText: 'Error:',
//   },
// };

// export const StaticErrorBottomHintAbove = {
//   name: 'Static error after-label',
//   args: {
//     label: 'this is a label',
//     name: 'id',
//     inputProps: { id: 'id' },
//     type: 'text',
//     value: 'value',
//     ariaLabel: 'input-with-error',
//     ariaRequired: 'true',
//     suffix: {
//       properties: {
//         'aria-hidden': 'true',
//       },
//       content: 'per item',
//     },
//     prefix: {
//       properties: {
//         'aria-hidden': 'true',
//       },
//       content: '£',
//     },
//     hint: {
//       position: 'bottom',
//       text: 'My hint',
//       id: 'id_hint',
//     },
//     staticErrorMessage: 'some error appened here',
//     errorPosition: 'after-label',
//     hiddenErrorText: 'Error:',
//   },
// };

// /**
//  * Note: to display the error message type a letter and remove it
//  */
// export const Error = {
//   name: 'Error',
//   render: (args) => {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [, setArgs] = useArgs();
//     const handleChange = (event) => {
//       setArgs({ value: event.currentTarget.value });
//     };
//     // eslint-disable-next-line no-console
//     const handleValidity = (valid) => console.log(valid);
//     return (
//       <FormInput {...args} onChange={handleChange} isValid={handleValidity} />
//     );
//   },
//   args: {
//     name: 'text3',
//     type: 'text',
//     value: '',
//     validation: {
//       rule: {
//         type: 'string',
//         minLength: 1,
//       },
//       message: 'Enter an event name',
//     },
//     errorPosition: 'before-label',
//     ariaLabel: 'standard-input-validation',
//     ariaRequired: 'true',
//   },
//   argTypes: { onChange: { action: 'onChange' } },
// };
