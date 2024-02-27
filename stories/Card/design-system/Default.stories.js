import {
  CardActions,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from '../../../src/card';
import { Card } from '../../../src/card/Card';
import { Button } from '@capgeminiuk/dcx-react-library';

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
          <Button label="Share" />
        </CardActions>
        <CardFooter>12/02/2024</CardFooter>
      </>,
    ],
  },
};
