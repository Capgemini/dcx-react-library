/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/checkbox-group.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { CheckboxGroup } from '../../../src/checkboxGroup/CheckboxGroup';

export default {
  title: 'DCXLibrary/Form/CheckboxGroup/Design system',
  component: CheckboxGroup,
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
