import { RadioGroup } from '../../../src/radioGroup/RadioGroup';
import { LiveProvider, LiveEditor } from 'react-live';
// eslint-disable-next-line import/no-webpack-loader-syntax
import style from '!raw-loader!../../themes/material.theme.css';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This is a theme that showcases an appearance similar to Material UI can be achieved.
 * If you copy paste this snippet inside your css file you'll get a material design style
 */
export default {
  title: 'DCXLibrary/Form/RadioGroup/Design system/Material',
  component: RadioGroup,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/material.theme.css');
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
      code={StorybookUtils.getThemeCode('dcx-radio-button-group', style)}
      disabled={true}
      language="css"
    >
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  ),
};

export const Default = {
  name: 'Default',
  args: {
    name: 'waste',
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
    legend: {
      text: 'Which types of waste do you transport?',
      heading: {
        priority: 2,
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const Titled = {
  name: 'Titled',
  args: {
    name: 'waste-2',
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
    legend: {
      text: 'Which types of waste do you transport?',
      heading: {
        priority: 1,
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const Hint = {
  name: 'With hints',
  args: {
    name: 'nationality',
    items: [
      {
        label: 'British',
        value: 'british',
        id: 'nationality',
        hint: {
          text: 'including English, Scottish, Welsh and Northern Irish.',
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
    hint: {
      id: 'nationality-hint',
      text: 'If you have dual nationality, select all options that are relevant to you.',
    },
    itemsClasses: 'govuk-checkboxes',
    legend: {
      text: 'What is your nationality?',
      heading: {
        priority: 1,
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const Disabled = {
  name: 'Disabled item',
  args: {
    name: 'live-error',
    items: [
      {
        label: 'England',
        value: 'england',
        id: 'live-england-error',
        disabled: true,
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
    legend: {
      text: 'Where do you live?',
      heading: {
        priority: 1,
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const Error = {
  name: 'Error message',
  args: {
    name: 'live-error',
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
    error: {
      text: 'Please confirm where you live',
      id: 'changed-name-error',
      visuallyHiddenText: {
        text: 'Error:',
      },
    },
    legend: {
      text: 'Where do you live?',
      heading: {
        priority: 1,
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const TextDivider = {
  name: 'Text divider',
  args: {
    name: 'where-do-you-live-divider',
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
        text: 'or',
      },
      {
        label: 'I am a British citizen living abroad',
        value: 'living-abroad',
        id: 'where-do-you-live-divider-5',
      },
    ],
    legend: {
      text: 'Where do you live?',
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const ConditionalRevealing = {
  name: 'Conditionally revealing content',
  args: {
    name: 'contact',
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
          id: 'conditional-contact',
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
          id: 'conditional-contact-2',
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
          id: 'conditional-contact-3',
          inputId: 'contact-by-text',
          value: '',
        },
      },
    ],
    ariaDescribedBy: 'contact-hint',
    hint: {
      id: 'contact-hint',
      text: 'Select all options that are relevant to you.',
    },
    legend: {
      text: 'How would you prefer to be contacted?',
      heading: {
        priority: 1,
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};
