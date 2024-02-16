import {
  Card,
  CardActions,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from '../../src/card';
import './style.css';

export default {
  title: 'DCXLibrary/Layout/Card/Class based',
  component: Card,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

/**
 * In this section we're using the Card component passing the relative custom `className.
 * Feel free to use your own css to style the formInput as you prefer.
 */

export const VerticalVariation = {
  name: 'Vertical Variation',
  render: function () {
    return (
      <Card className="vertical-card" layout="vertical">
        <CardHeader className="vertical-card__header">John Doe</CardHeader>
        <CardImage
          className="vertical-card__image"
          src="https://placehold.co/100"
          alt=""
        />
        <CardContent className="vertical-card__content">
          Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
          nisl, egestas et elit et, interdum cursus massa.
        </CardContent>
        <CardActions className="vertical-card__actions">
          <button>Share</button>
        </CardActions>
        <CardFooter className="vertical-card__footer">12/02/2024</CardFooter>
      </Card>
    );
  },
};

export const HorizontalVariation = {
  name: 'Horizontal Variation',
  render: function () {
    return (
      <Card className="horizontal-card" layout="horizontal">
        <CardImage
          className="horizontal-card__image"
          src="https://placehold.co/200x200"
          alt="alt card image"
        />
        <div className="text-wrapper">
          <CardHeader className="horizontal-card__header">John Doe</CardHeader>
          <CardContent className="horizontal-card__content">
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </CardContent>
          <CardActions className="horizontal-card__actions">
            <button>See more</button>
          </CardActions>
        </div>
      </Card>
    );
  },
};
