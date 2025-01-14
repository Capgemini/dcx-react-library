import { FormDate } from '../../../src/formDate';
// eslint-disable-next-line import/no-webpack-loader-syntax
import style from '!raw-loader!../../themes/dark.theme.css';

import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
import { useState } from 'react';

const DateStory = (args) => {
  const [isValid, setIsValid] = useState(false);
  const [date, setDate] = useState(0);
  const handleValidity = (valid, date) => {
    setIsValid(valid);
    setDate(date);
  };
  return (
    <div>
      <FormDate {...args} handleValidity={(v, d) => handleValidity(v, d)} />
      <pre style={{ color: 'white' }}>isValid: {isValid.toString()}</pre>
      <pre style={{ color: 'white' }}>
        date: {JSON.stringify(new Date(date))}
      </pre>
    </div>
  );
};

/**
 * This a theme showcases how to customize the component so it can be used on dark backgrounds.
 */
export default {
  title: 'DCXLibrary/Form/Date/Design system/Dark',
  component: FormDate,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/dark.theme.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
};

export const ShowCase = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: () => (
    <LiveProvider
      code={StorybookUtils.getThemeCode('dcx-form-date', style)}
      disabled={true}
      language="css"
    >
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  ),
};

export const PreSetDate = {
  name: 'Preset date',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: DateStory,
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
    },
  },
  argTypes: { onClick: { action: 'onClick' } },
};

export const PreSetDateDisabled = {
  name: 'Preset date disabled',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: DateStory,
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
    },
    disabled: true,
  },
  argTypes: { onClick: { action: 'onClick' } },
};

/**
 * In the following example we specified as format: `yyyy/mm/dd`
 */
export const CustomDate = {
  name: 'Custom date',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: DateStory,
  args: {
    dateFormat: 'yyyy/mm/dd',
    inputClass: 'govuk-date-input',
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
    },
  },
  argTypes: { onClick: { action: 'onClick' } },
};

export const ErrorMessage = {
  name: 'Error message',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: function ({ onChange, ...args }) {
    const [isValid, setIsValid] = useState(false);
    const [date, setDate] = useState(0);
    const [showError, setShowError] = useState(false);
    const handleValidity = (valid, date) => {
      setShowError(!valid);
      setIsValid(valid);
      setDate(date);
    };
    return (
      <div>
        <FormDate
          {...args}
          handleValidity={(v, d) => handleValidity(v, d)}
          displayError={showError}
          inputContainerClass={showError ? 'govuk-date-errorContainer' : ''}
          errorMessage={showError ? 'Enter a valid date' : null}
        />
        <pre style={{ color: 'white' }}>isValid: {isValid.toString()}</pre>
        <pre style={{ color: 'white' }}>
          date: {JSON.stringify(new Date(date))}
        </pre>
      </div>
    );
  },
  args: {
    dateFormat: 'dd/mm/yyyy',
    inputClass: 'govuk-date-input',
    errorPosition: 'top',
    errorClass: 'govuk-date-error',
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
    },
  },
  argTypes: { onClick: { action: 'onClick' } },
};
