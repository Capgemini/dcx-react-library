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
};

export const VerticalVariation = {
  name: 'VerticalVariation',
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
