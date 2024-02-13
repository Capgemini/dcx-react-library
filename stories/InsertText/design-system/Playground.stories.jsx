import { InsertText } from '../../../src/insertText/InsertText';
import style from '../../../dist/design-system/insert-text.css?raw';
import TokensDecorator from '../../../core/storybook/TokensDecorator';

export default {
  title: 'DCXLibrary/Typography/InsertText/Design system',
  component: InsertText,
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
    value:
      'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.',
  },
};
