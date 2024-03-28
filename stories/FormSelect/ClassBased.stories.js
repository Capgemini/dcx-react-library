import { FormSelect } from '../../src/formSelect/FormSelect';

/**
 * In this section we're using the button component providing the **GovUk style** passing the relative `className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Form/Select/Class based',
  component: FormSelect,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  args: {
    containerClassName: 'govuk-form-group',
    value: 'updated',
    selectClassName: 'govuk-select',
    labelClassName: 'govuk-label',
    id: 'sort',
    label: 'Sort by',
    name: 'sort',
    options: [
      'Recently published',
      'Recently updated',
      'Most views',
      'Most comments',
    ],
  },
};

export const Advanced = {
  name: 'Advanced',
  args: {
    containerClassName: 'govuk-form-group',
    value: 'updated',
    selectClassName: 'govuk-select',
    labelClassName: 'govuk-label',
    id: 'sort',
    label: 'Sort by',
    name: 'sort',
    options: [
      { label: 'Recently published', value: 'published' },
      { label: 'Recently updated', value: 'updated' },
      { label: 'Most views', value: 'views' },
      { label: 'Most comments', value: 'comments' },
    ],
  },
};

export const Hint = {
  name: 'Hint',
  args: {
    containerClassName: 'govuk-form-group',
    selectClassName: 'govuk-select',
    labelClassName: 'govuk-label',
    id: 'sort-2',
    label: 'Sort by',
    name: 'sort-2',
    options: [
      { label: 'Recently published', value: 'published' },
      { label: 'Recently updated', value: 'updated' },
      { label: 'Most views', value: 'views' },
      { label: 'Most comments', value: 'comments' },
    ],
    hint: {
      text: 'This is and example of hintText/description of what we need from you',
      className: 'govuk-hint',
    },
  },
};

export const NullOption = {
  name: 'Null Option',
  args: {
    containerClassName: 'govuk-form-group',
    nullOption: 'Select...',
    selectClassName: 'govuk-select',
    labelClassName: 'govuk-label',
    id: 'sort-3',
    label: 'Sort by',
    name: 'sort-3',
    options: [
      { label: 'Recently published', value: 'published' },
      { label: 'Recently updated', value: 'updated' },
      { label: 'Most views', value: 'views' },
      { label: 'Most comments', value: 'comments' },
    ],
  },
};

export const WithValue = {
  name: 'With Value',
  args: {
    containerClassName: 'govuk-form-group',
    value: 'comments',
    selectClassName: 'govuk-select',
    labelClassName: 'govuk-label',
    id: 'sort-4',
    label: 'Sort by',
    name: 'sort-4',
    options: [
      { label: 'Recently published', value: 'published' },
      { label: 'Recently updated', value: 'updated' },
      { label: 'Most views', value: 'views' },
      { label: 'Most comments', value: 'comments' },
    ],
  },
};

export const WithError = {
  name: 'With Error',
  args: {
    containerClassName: 'govuk-form-group',
    selectClassName: 'govuk-select govuk-select--error',
    labelClassName: 'govuk-label',
    options: [
      { label: 'Recently published', value: 'published' },
      { label: 'Recently updated', value: 'updated' },
      { label: 'Most views', value: 'views' },
      { label: 'Most comments', value: 'comments' },
    ],
    id: 'sort-5',
    label: 'Sort by',
    name: 'sort-5',
    errorMessage: 'Select an option',
    errorMessageClassName: 'govuk-error-message',
    errorVisuallyHidden: {
      text: 'Error:',
      className: 'govuk-visually-hidden',
    },
  },
};

export const WithDefaultValue = {
  name: 'With Default value selected',
  args: {
    containerClassName: 'govuk-form-group',
    selectClassName: 'govuk-select govuk-select--error',
    labelClassName: 'govuk-label',
    options: [
      { label: 'Recently published', value: 'published' },
      { label: 'Recently updated', value: 'updated' },
      { label: 'Most views', value: 'views' },
      { label: 'Most comments', value: 'comments' },
    ],
    id: 'sort-5',
    label: 'Sort by',
    name: 'sort-5',
    errorMessage: 'Select an option',
    errorMessageClassName: 'govuk-error-message',
    errorVisuallyHidden: {
      text: 'Error:',
      className: 'govuk-visually-hidden',
    },
    defaultValue: 'views',
  },
};
