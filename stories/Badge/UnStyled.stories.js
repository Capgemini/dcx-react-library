import { Badge } from '../../src/badge/Badge';

export default {
  title: 'DCXLibrary/Form/Badge/Without style',
  component: Badge,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  argTypes: {
    children: {
      description: 'Allows you to add an element as children. They would be DOM siblings to the badge indicator itself.',
    },
  },
};

export const Unstyled = {
  args: {
    badgeContents: '5',
    badgeClassName: 'badge'
  },
};
