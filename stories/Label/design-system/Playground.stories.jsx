import { Label } from '../../../src/label/Label';
import style from '../../../dist/design-system/label.css?raw';
import TokensDecorator from '../../../core/storybook/TokensDecorator';

export default {
  title: 'DCXLibrary/Typography/Label/Design system',
  component: Label,
  decorators: [
    (getStory) => (
      <TokensDecorator style={style}>
        {getStory()}
      </TokensDecorator>
    )
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
};

export const Playground = {
  name: 'Playground',
  args: {
    value: 'Default label',
  },
};
