import { Abbreviate } from '../../../src/abbreviate/Abbreviate';
import { Paragraph } from '../../../src/paragraph/Paragraph';
/**
 * Here we display the component in its natural abbreviate, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Typography/Abbreviate/Design system/Default',
  component: Abbreviate,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
};

export const Default = {
  name: 'Default',
  args: {
    title: 'As soon as possible',
    value: 'ASAP',
  },
  render: ({ title, value }) => (
    <Paragraph>
      Sorry, i call you <Abbreviate {...{ title, value }} />
    </Paragraph>
  ),
};
