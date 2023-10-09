import { Link } from '../../../src/link/Link';

/**
 * Here we display the component in its natural form, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Typography/Link/Design system/Default',
  component: Link,
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
    value: 'Default / Unvisited link',
    to: 'https://www.google.com/',
  },
};

export const Visited = {
  name: 'Visited',
  args: {
    value: 'Visited link',
    className: 'dcx-link-visited',
    to: '#',
  },
};
