import {
  Card,
  CardActions,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from '../../src/card';

export default {
  title: 'DCXLibrary/Layout/Card/Without style',
  component: Card,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function () {
    return (
      <Card className="dcx-card" layout="vertical">
        <CardHeader>Hello header</CardHeader>
        <CardContent>Content</CardContent>
        <CardImage src="https://placehold.co/100" alt="" />
        <CardActions>
          <button>Button</button>
        </CardActions>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
  },
};
