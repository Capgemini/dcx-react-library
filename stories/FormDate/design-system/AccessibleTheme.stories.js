import { FormDate } from '../../../src/formDate';
// eslint-disable-next-line import/no-webpack-loader-syntax
import style from '!raw-loader!../../themes/accessible.theme.css';
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
      <pre>isValid: {isValid.toString()}</pre>
      <pre>date: {JSON.stringify(new Date(date))}</pre>
    </div>
  );
};
/**
 * This theme is aimed at easing the visualization of the different elements of the component to improve the experience for people with visual impairments.
 */
export default {
  title: 'DCXLibrary/Form/Date/Design system/Accessible',
  component: FormDate,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/accessible.theme.css');
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
        <pre>isValid: {isValid.toString()}</pre>
        <pre>date: {JSON.stringify(new Date(date))}</pre>
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
