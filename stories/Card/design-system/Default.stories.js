import {
  CardActions,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from '../../../src/card';
import { Card } from '../../../src/card/Card';
import { Heading } from '../../../src/heading/Heading';
import { Button } from '../../../src/button/Button';
import { Paragraph } from '../../../src/paragraph/Paragraph';
import React from 'react';

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
        <CardHeader>
          <Heading level="h3" label="John Doe" />
        </CardHeader>
        <CardImage src="https://placehold.co/100" alt="" />
        <CardContent>
          <Paragraph>
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </Paragraph>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
        </CardActions>
        <CardFooter>
          <Paragraph>12/02/2024</Paragraph>
        </CardFooter>
      </>,
    ],
  },
};

export const InteractVariationSelectedEffect = {
  name: 'Interact Variation',
  render: function MyCard() {
    const [selected, setSelected] = React.useState(false);
    return (
      <Card
        selected={selected}
        variant="interact"
        onClick={() => setSelected(!selected)}
        tabIndex="1"
        aria-selected={selected}
      >
        <CardImage src="https://placehold.co/200x200" alt="alt card image" />
        <CardHeader>
          <Heading level="h3" label="John Doe" />
        </CardHeader>
        <CardContent>
          Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
          nisl, egestas et elit et, interdum cursus massa.
        </CardContent>
      </Card>
    );
  },
};

export const FullHorizontal = {
  name: 'Full horizontal',
  args: {
    variant: 'default',
    layout: 'horizontal',
    children: [
      <>
        <CardHeader>
          <Heading level="h3" label="John Doe" />
        </CardHeader>
        <CardImage src="https://placehold.co/200" alt="" />
        <CardContent>
          <Paragraph>
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </Paragraph>
        </CardContent>
        <CardActions>
          <Button label="Read more" />
        </CardActions>
        <CardFooter>
          <Paragraph>12/02/2024</Paragraph>
        </CardFooter>
      </>,
    ],
  },
};

export const HorizontalNoFooter = {
  name: 'Horizontal No Footer',
  args: {
    variant: 'default',
    layout: 'horizontal',
    children: [
      <>
        <CardHeader>
          <Heading level="h3" label="John Doe" />
        </CardHeader>
        <CardImage src="https://placehold.co/200" alt="" />
        <CardContent>
          <Paragraph>
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </Paragraph>
        </CardContent>
        <CardActions>
          <Button label="Read more" />
        </CardActions>
      </>,
    ],
  },
};

export const HorizontalNoFooterNoActions = {
  name: 'Horizontal without Footer and Actions',
  args: {
    variant: 'default',
    layout: 'horizontal',
    children: [
      <>
        <CardHeader>
          <Heading level="h3" label="John Doe" />
        </CardHeader>
        <CardImage src="https://placehold.co/200" alt="" />
        <CardContent>
          <Paragraph>
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </Paragraph>
        </CardContent>
      </>,
    ],
  },
};

export const HorizontalNoHeader = {
  name: 'Horizontal No Header',
  args: {
    variant: 'default',
    layout: 'horizontal',
    children: [
      <>
        <CardImage src="https://placehold.co/200" alt="" />
        <CardContent>
          <Paragraph>
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </Paragraph>
        </CardContent>
        <CardActions>
          <Button label="Read more" />
        </CardActions>
        <CardFooter>
          <Paragraph>12/02/2024</Paragraph>
        </CardFooter>
      </>,
    ],
  },
};

export const HorizontalImageAndCOntent = {
  name: 'Horizontal with fee content',
  args: {
    variant: 'default',
    layout: 'horizontal',
    children: [
      <>
        <CardImage src="https://placehold.co/200" alt="" />
        <CardContent>
          <Heading level="h3" label="John Doe" />
          <Paragraph>
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </Paragraph>
        </CardContent>
        <CardFooter>
          <Paragraph>12/02/2024</Paragraph>
        </CardFooter>
      </>,
    ],
  },
};

export const HorizontalNoImage = {
  name: 'Horizontal No Imagel',
  args: {
    variant: 'default',
    layout: 'horizontal',
    children: [
      <>
        <CardHeader>
          <Heading level="h3" label="John Doe" />
        </CardHeader>
        <CardContent>
          <Paragraph>
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </Paragraph>
        </CardContent>
        <CardActions>
          <Button label="Read more" />
        </CardActions>
        <CardFooter>
          <Paragraph>12/02/2024</Paragraph>
        </CardFooter>
      </>,
    ],
  },
};
