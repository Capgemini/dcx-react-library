import {
  CardActions,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from '../../../src/card';
import { Card } from '../../../src/card/Card';

/**
 * Here we display the component in its natural form, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Layout/Card/Design system/Default',
  component: Card,
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
    variant: 'default',
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

export const DefaultHorizontal = {
  name: 'Default horizontal',
  args: {
    variant: 'default',
    layout: 'horizontal',
    children: [
      <>
        <div>
          <CardHeader>Article title</CardHeader>
          <CardImage src="https://placehold.co/100" alt="" />
        </div>
        <div>
          <CardContent>
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </CardContent>
          <CardActions>
            <button>Share</button>
          </CardActions>
          <CardFooter>12/02/2024</CardFooter>
        </div>
      </>,
    ],
  },
};
