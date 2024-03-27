import { RadioGroup } from '../../src/radioGroup/RadioGroup';

/**
 * In this section we're using the RadioGroup component providing the **GovUk style** passing the relative `className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Form/RadioGroup/Class based',
  component: RadioGroup,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const SharedStyle = {
  name: 'shared styles',
  args: {
    name: 'waste',
    inputClassName: 'govuk-radios__input',
    itemClassName: 'govuk-radios__item',
    labelClassName: 'govuk-label govuk-radios__label',
    items: [
      {
        label: 'Waste from animal carcasses',
        value: 'carcasses',
        id: 'waste',
      },
      {
        label: 'Waste from mines of quarries',
        value: 'mines',
        id: 'waste-2',
      },
      {
        label: 'Farm or agricultural waste',
        value: 'farm',
        id: 'waste-3',
      },
    ],
    ariaDescribedBy: 'changed-name-hint',
    groupClasses: 'govuk-form-group',
    fieldsetClasses: 'govuk-fieldset',
    itemsClasses: 'govuk-radios',
    legend: {
      text: 'Which types of waste do you transport?',
      className: 'govuk-fieldset__legend govuk-fieldset__legend--l',
      heading: {
        priority: 1,
        className: 'govuk-fieldset__heading',
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const Inline = {
  name: 'Inline',
  args: {
    name: 'waste',
    inputClassName: 'govuk-radios__input',
    itemClassName: 'govuk-radios__item',
    labelClassName: 'govuk-label govuk-radios__label',
    itemsClasses: 'govuk-radios govuk-radios--inline',
    items: [
      {
        label: 'Waste from animal carcasses',
        value: 'carcasses',
        id: 'waste',
      },
      {
        label: 'Waste from mines of quarries',
        value: 'mines',
        id: 'waste-2',
      },
    ],
    ariaDescribedBy: 'changed-name-hint',
    groupClasses: 'govuk-form-group',
    fieldsetClasses: 'govuk-fieldset',
    legend: {
      text: 'Which types of waste do you transport?',
      className: 'govuk-fieldset__legend govuk-fieldset__legend--l',
      heading: {
        priority: 1,
        className: 'govuk-fieldset__heading',
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const Titled = {
  name: 'Titled',
  args: {
    name: 'waste-2',
    inputClassName: 'govuk-radios__input',
    itemClassName: 'govuk-radios__item',
    labelClassName: 'govuk-label govuk-radios__label',
    items: [
      {
        label: 'Waste from animal carcasses',
        value: 'carcasses',
        id: 'waste',
      },
      {
        label: 'Waste from mines of quarries',
        value: 'mines',
        id: 'waste-2',
      },
      {
        label: 'Farm or agricultural waste',
        value: 'farm',
        id: 'waste-3',
      },
    ],
    groupClasses: 'govuk-form-group',
    fieldsetClasses: 'govuk-fieldset',
    itemsClasses: 'govuk-radios',
    legend: {
      text: 'Which types of waste do you transport?',
      className: 'govuk-fieldset__legend govuk-fieldset__legend',
      heading: {
        priority: 1,
        className: 'govuk-fieldset__heading',
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const Hint = {
  name: 'With hints',
  args: {
    name: 'nationality',
    inputClassName: 'govuk-radios__input',
    itemClassName: 'govuk-radios__item',
    labelClassName: 'govuk-label govuk-radios__label',
    items: [
      {
        label: 'British',
        value: 'british',
        id: 'nationality',
        hint: {
          text: 'including English, Scottish, Welsh and Northern Irish.',
          className: 'govuk-hint govuk-radios__hint',
          id: 'nationality-hint',
          position: 'below',
        },
        ariaDescribedBy: 'nationality-hint',
      },
      {
        label: 'Irish',
        value: 'irish',
        id: 'nationality-2',
      },
      {
        label: 'Citizen of another country',
        value: 'other',
        id: 'nationality-3',
      },
    ],
    ariaDescribedBy: 'nationality-hint',
    groupClasses: 'govuk-form-group',
    fieldsetClasses: 'govuk-fieldset',
    hint: {
      id: 'nationality-hint',
      text: 'If you have dual nationality, select all options that are relevant to you.',
      className: 'govuk-hint',
    },
    itemsClasses: 'govuk-radios',
    legend: {
      text: 'What is your nationality?',
      className: 'govuk-fieldset__legend govuk-fieldset__legend--l',
      heading: {
        priority: 1,
        className: 'govuk-fieldset__heading',
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const SmallRadios = {
  name: 'Small radios',
  args: {
    name: 'filter-change',
    inputClassName: 'govuk-radios__input',
    itemClassName: 'govuk-radios__item',
    labelClassName: 'govuk-label govuk-radios__label',
    items: [
      {
        label: 'Monthly',
        value: 'month',
        id: 'changed-name-month',
      },
      {
        label: 'Yearly',
        value: 'year',
        id: 'changed-name-year',
      },
    ],
    groupClasses: 'govuk-radios govuk-radios--small',
    fieldsetClasses: 'govuk-fieldset',
    itemsClasses: 'govuk-radios govuk-radios--small',
    legend: {
      text: 'Filter',
      className: 'govuk-fieldset__legend govuk-fieldset__legend--m',
      heading: {
        priority: 1,
        className: 'govuk-fieldset__heading',
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const Error = {
  name: 'Error message',
  args: {
    name: 'live-error',
    inputClassName: 'govuk-radios__input',
    itemClassName: 'govuk-radios__item',
    labelClassName: 'govuk-label govuk-radios__label',
    items: [
      {
        label: 'England',
        value: 'england',
        id: 'live-england-error',
      },
      {
        label: 'Ireland',
        value: 'ireland',
        id: 'live-ireland-error',
      },
      {
        label: 'Scotland',
        value: 'scotland',
        id: 'live-scotland-error',
      },
      {
        label: 'Wales',
        value: 'wales',
        id: 'live-wales-error',
      },
    ],
    ariaDescribedBy: 'changed-name-hint changed-name-error',
    groupClasses: 'govuk-form-group govuk-form-group--error',
    fieldsetClasses: 'govuk-fieldset',
    error: {
      text: 'Please confirm where you live',
      className: 'govuk-error-message',
      id: 'changed-name-error',
      visuallyHiddenText: {
        text: 'Error:',
        className: 'govuk-visually-hidden',
      },
    },
    itemsClasses: 'govuk-radios',
    legend: {
      text: 'Where do you live?',
      className: 'govuk-fieldset__legend govuk-fieldset__legend--l',
      heading: {
        priority: 1,
        className: 'govuk-fieldset__heading',
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const TextDivider = {
  name: 'Text divider',
  args: {
    name: 'where-do-you-live-divider',
    inputClassName: 'govuk-radios__input',
    itemClassName: 'govuk-radios__item',
    labelClassName: 'govuk-label govuk-radios__label',
    items: [
      {
        label: 'England',
        value: 'england',
        id: 'where-do-you-live-divider',
      },
      {
        label: 'Scotland',
        value: 'scotland',
        id: 'where-do-you-live-divider-2',
      },
      {
        label: 'Wales',
        value: 'wales',
        id: 'where-do-you-live-divider-3',
      },
      {
        label: 'Northern Ireland',
        value: 'northen-ireland',
        id: 'where-do-you-live-divider-4',
      },
      {
        className: 'govuk-radios__divider',
        text: 'or',
      },
      {
        label: 'I am a British citizen living abroad',
        value: 'living-abroad',
        id: 'where-do-you-live-divider-5',
      },
    ],
    groupClasses: 'govuk-form-group',
    fieldsetClasses: 'govuk-fieldset',
    itemsClasses: 'govuk-radios',
    legend: {
      text: 'Where do you live?',
      className: 'govuk-fieldset__legend govuk-fieldset__legend--l',
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const ConditionalRevealing = {
  name: 'Conditionally revealing content',
  args: {
    name: 'contact',
    inputClassName: 'govuk-radios__input',
    itemClassName: 'govuk-radios__item',
    labelClassName: 'govuk-label govuk-radios__label',
    items: [
      {
        label: 'Email',
        value: 'email',
        id: 'contact',
        selected: true,
        ariaDataControls: 'conditional-contact',
        conditional: {
          name: 'contact-by-email',
          label: 'Email address',
          type: 'email',
          className:
            'govuk-radios__conditional govuk-radios__conditional--hidden',
          groupClassName: 'govuk-form-group',
          id: 'conditional-contact',
          inputClassName: 'govuk-input govuk-!-width-one-third',
          inputId: 'contact-by-email',
          value: '',
        },
      },
      {
        label: 'Phone',
        value: 'phone',
        id: 'contact-2',
        selected: false,
        ariaDataControls: 'conditional-contact-2',
        conditional: {
          name: 'contact-by-phone',
          label: 'Phone number',
          type: 'tel',
          className:
            'govuk-radios__conditional govuk-radios__conditional--hidden',
          groupClassName: 'govuk-form-group',
          id: 'conditional-contact-2',
          inputClassName: 'govuk-input govuk-!-width-one-third',
          inputId: 'contact-by-phone',
          value: '',
        },
      },
      {
        label: 'Text message',
        value: 'text',
        id: 'contact-3',
        selected: false,
        ariaDataControls: 'conditional-contact-3',
        conditional: {
          name: 'contact-by-text',
          label: 'Mobile phone number',
          type: 'tel',
          className:
            'govuk-radios__conditional govuk-radios__conditional--hidden',
          groupClassName: 'govuk-form-group',
          id: 'conditional-contact-3',
          inputClassName: 'govuk-input govuk-!-width-one-third',
          inputId: 'contact-by-text',
          value: '',
        },
      },
    ],
    ariaDescribedBy: 'contact-hint',
    groupClasses: 'govuk-form-group',
    fieldsetClasses: 'govuk-fieldset',
    hint: {
      id: 'contact-hint',
      text: 'Select all options that are relevant to you.',
      className: 'govuk-hint',
    },
    itemsClasses: 'govuk-radios govuk-radios--conditional',
    legend: {
      text: 'How would you prefer to be contacted?',
      className: 'govuk-fieldset__legend govuk-fieldset__legend--l',
      heading: {
        priority: 1,
        className: 'govuk-fieldset__heading',
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};
