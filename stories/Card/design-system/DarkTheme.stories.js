import {
  CardActions,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from '../../../src/card';
import { Card } from '../../../src/card/Card';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
import style from '!raw-loader!../../themes/dark.theme.css';

/**
 * This a theme showcases how to customize the component so it can be used on dark backgrounds.
 */
export default {
  title: 'DCXLibrary/Layout/Card/Design system/Dark',
  component: Card,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/dark.theme.css');
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
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: () => (
    <LiveProvider
      code={StorybookUtils.getThemeCode('dcx-card', style)}
      disabled={true}
      language="css"
    >
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  ),
};

export const Default = {
  name: 'Default',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  args: {
    children: [
      <>
        <CardHeader>John Doe</CardHeader>
        <CardImage src="https://placehold.co/100" alt="" />
        <CardContent>
          Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
          nisl, egestas et elit et, interdum cursus massa.
        </CardContent>
        <CardActions>
          <button>Share</button>
        </CardActions>
        <CardFooter>12/02/2024</CardFooter>
      </>,
    ],
  },
};
