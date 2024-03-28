import { MultiUpload } from '../../src/multiUpload/MultiUpload';
/**
 * In this section we're using the button component providing the **GovUk style** passing the relative `className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Form/MultiUpload/Class Based',
  component: MultiUpload,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  render: function ({ onChange, ...args }) {
    const handleChange = (file) => {
      onChange(file);
      alert(
        `${file.name} was uploaded, it was last modified at ${new Date(file.lastModified).toLocaleDateString('en-us')}`
      );
    };
    return <MultiUpload {...args} onChange={handleChange} />;
  },
  args: {
    name: 'file-upload-1',
    label: 'Upload a file',
    id: 'file-upload-1',
    className: 'govuk-form-group',
    inputProperties: {
      className: 'govuk-file-upload',
    },
    labelProperties: {
      className: 'govuk-label',
    },
  },
  argTypes: { onChange: { action: 'onChange' } },
};

export const Hint = {
  name: 'Hint',
  render: function ({ onChange, ...args }) {
    const handleChange = (file) => {
      onChange(file);
      alert(
        `${file.name} was uploaded, it was last modified at ${new Date(file.lastModified).toLocaleDateString('en-us')}`
      );
    };
    return <MultiUpload {...args} onChange={handleChange} />;
  },
  args: {
    name: 'file-upload-2',
    label: 'Upload a file',
    id: 'file-upload-2',
    className: 'govuk-form-group',
    hint: {
      text: 'This can be in either JPG or PNG format',
      className: 'govuk-hint',
    },
    inputProperties: {
      className: 'govuk-file-upload',
    },
    labelProperties: {
      className: 'govuk-label',
    },
  },
  argTypes: { onChange: { action: 'onChange' } },
};

export const Error = {
  name: 'Error',
  render: function ({ onChange, ...args }) {
    const handleChange = (file) => {
      onChange(file);
      alert(
        `${file.name} was uploaded, it was last modified at ${new Date(file.lastModified).toLocaleDateString('en-us')}`
      );
    };
    return <MultiUpload {...args} onChange={handleChange} />;
  },
  args: {
    name: 'file-upload-3',
    label: 'Upload a file',
    id: 'file-upload-3',
    className: 'govuk-form-group govuk-form-group--error',
    acceptedFormats: '.jpg, .png',
    inputProperties: {
      className: 'govuk-file-upload govuk-file-upload--error',
      'aria-describedby': 'govuk-file-upload govuk-file-upload--error',
    },
    label: 'Upload a file',
    labelProperties: {
      className: 'govuk-label',
    },
    error: {
      text: 'The CSV must be smaller than 2MB',
      className: 'govuk-error-message',
      id: 'file-upload-1-error',
      visuallyHiddenText: {
        text: 'Error:',
        className: 'govuk-visually-hidden',
      },
    },
  },
  argTypes: { onChange: { action: 'onChange' } },
};
