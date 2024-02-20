import {
  Card,
  CardActions,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from '../../src/card';
import './style.css';

/**
 * In this section we're using the Card component passing a custom css.
 * Feel free to use your own css to style the formInput as you prefer.
 */
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

export const Basic = {
  name: 'Basic',
  render: function () {
    return (
      <Card className="card" layout="vertical">
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
      </Card>
    );
  },
};

/**
 * In the following example we passing the property `layout` passing the value `horizontal`
 */
export const HorizontalLayout = {
  name: 'Horizontal Layout',
  render: function () {
    return (
      <Card className="card" layout="horizontal">
        <CardImage
          className="card__image"
          src="https://placehold.co/200x200"
          alt="alt card image"
        />
        <div className="text-wrapper">
          <CardHeader className="card__header">John Doe</CardHeader>
          <CardContent className="card__content">
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </CardContent>
          <CardActions className="card__actions">
            <button>See more</button>
          </CardActions>
        </div>
      </Card>
    );
  },
};

/**
 * In the following example we using the default layout
 */
export const InteractVariation = {
  name: 'Interact Variation',
  render: function () {
    return (
      <Card className="card">
        <CardImage
          className="card__image"
          src="https://placehold.co/200x200"
          alt="alt card image"
        />
        <div className="text-wrapper">
          <CardHeader className="card__header">John Doe</CardHeader>
          <CardContent className="card__content">
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </CardContent>
        </div>
      </Card>
    );
  },
};