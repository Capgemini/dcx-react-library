import { Link } from '../../../src/link/Link';

/**
 * Here we display the component in its natural form, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Typography/Link/Design system/Default',
  component: Link,
  decorators: [
    getStory => {
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
const timestamp = new Date().getTime();
const link = `#?time=${timestamp}`;

export const Default = {
  name: 'Default',
  args: {
    value: 'Default / Unvisited link',
    to: link,
    props: { target: '_self' },
  },
};

export const Visited = {
  name: 'Visited',
  args: {
    value: 'Visited link',
    to: link,
    props: { target: '_self' },
  },
};
