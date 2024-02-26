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
        <CardHeader className="card__header">John Doe</CardHeader>
        <CardImage
          className="card__image"
          src="https://placehold.co/100"
          alt=""
        />
        <CardContent className="card__content">
          Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
          nisl, egestas et elit et, interdum cursus massa.
        </CardContent>
        <CardActions className="card__actions">
          <button>Share</button>
        </CardActions>
        <CardFooter className="card__footer">12/02/2024</CardFooter>
      </>,
    ],
  },
};
