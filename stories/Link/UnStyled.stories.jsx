import { Link } from '../../src/link/Link';

export default {
  title: 'DCXLibrary/Typography/Link/Without style',
  component: Link,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    to: 'https://www.google.com/',
    value: 'Google',
  },
};
