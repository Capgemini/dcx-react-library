/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/radio-button-group.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { RadioGroup } from '../../../src/radioGroup/RadioGroup';

export default {
  title: 'DCXLibrary/Form/RadioGroup/Design system',
  component: RadioGroup,
  decorators: [
    (getStory) => <TokensDecorator style={style}>{getStory()}</TokensDecorator>,
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
};

export const Playground = {
  name: 'Playground',
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
        priority: 1,
      },
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};
