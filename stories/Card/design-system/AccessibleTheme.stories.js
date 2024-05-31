/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../themes/accessible.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
import {
  Card,
  CardActions,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from '../../../src/card';
import { Paragraph } from '../../../src/paragraph/Paragraph';
import { Button } from '../../../src/button';
import React from 'react';
import { Heading } from '../../../src/heading/Heading';

/**
 * This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
 */
export default {
  title: 'DCXLibrary/Layout/Card/Design system/Accessible',
  component: Card,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/accessible.theme.css');
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
  args: {
    variant: 'default',
    children: [
      <CardHeader>
        <Heading level="h3" label="John Doe" />
      </CardHeader>,
      <CardImage src="https://placehold.co/100" alt="" />,
      <CardContent>
        <Paragraph>
          Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
          nisl, egestas et elit et, interdum cursus massa.
        </Paragraph>
      </CardContent>,
      <CardActions>
        <Button>Share</Button>
      </CardActions>,
      <CardFooter>
        <Paragraph>12/02/2024</Paragraph>
      </CardFooter>,
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
          <Paragraph>
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </Paragraph>
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
      <CardHeader>
        <Heading level="h3" label="John Doe" />
      </CardHeader>,
      <CardImage src="https://placehold.co/200" alt="" />,
      <CardContent>
        <Paragraph>
          Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
          nisl, egestas et elit et, interdum cursus massa.
        </Paragraph>
      </CardContent>,
      <CardActions>
        <Button label="Read more" />
      </CardActions>,
      <CardFooter>
        <Paragraph>12/02/2024</Paragraph>
      </CardFooter>,
    ],
  },
};

export const HorizontalNoFooter = {
  name: 'Horizontal No Footer',
  args: {
    variant: 'default',
    layout: 'horizontal',
    children: [
      <CardHeader>
        <Heading level="h3" label="John Doe" />
      </CardHeader>,
      <CardImage src="https://placehold.co/200" alt="" />,
      <CardContent>
        <Paragraph>
          Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
          nisl, egestas et elit et, interdum cursus massa.
        </Paragraph>
      </CardContent>,
      <CardActions>
        <Button label="Read more" />
      </CardActions>,
    ],
  },
};

export const HorizontalNoFooterNoActions = {
  name: 'Horizontal without Footer and Actions',
  args: {
    variant: 'default',
    layout: 'horizontal',
    children: [
      <CardHeader>
        <Heading level="h3" label="John Doe" />
      </CardHeader>,
      <CardImage src="https://placehold.co/200" alt="" />,
      <CardContent>
        <Paragraph>
          Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
          nisl, egestas et elit et, interdum cursus massa.
        </Paragraph>
      </CardContent>,
    ],
  },
};

export const HorizontalNoHeader = {
  name: 'Horizontal No Header',
  args: {
    variant: 'default',
    layout: 'horizontal',
    children: [
      <CardImage src="https://placehold.co/200" alt="" />,
      <CardContent>
        <Paragraph>
          Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
          nisl, egestas et elit et, interdum cursus massa.
        </Paragraph>
      </CardContent>,
      <CardActions>
        <Button label="Read more" />
      </CardActions>,
      <CardFooter>
        <Paragraph>12/02/2024</Paragraph>
      </CardFooter>,
    ],
  },
};

export const HorizontalImageAndContent = {
  name: 'Horizontal with fee content',
  args: {
    variant: 'default',
    layout: 'horizontal',
    children: [
      <CardImage src="https://placehold.co/200" alt="" />,
      <CardContent>
        <Heading level="h3" label="John Doe" />
        <Paragraph>
          Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
          nisl, egestas et elit et, interdum cursus massa.
        </Paragraph>
        <Paragraph>12/02/2024</Paragraph>
      </CardContent>,
    ],
  },
};

export const HorizontalNoImage = {
  name: 'Horizontal No Imagel',
  args: {
    variant: 'default',
    layout: 'horizontal',
    children: [
      <CardHeader>
        <Heading level="h3" label="John Doe" />
      </CardHeader>,
      <CardContent>
        <Paragraph>
          Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
          nisl, egestas et elit et, interdum cursus massa.
        </Paragraph>
      </CardContent>,
      <CardActions>
        <Button label="Read more" />
      </CardActions>,
      <CardFooter>
        <Paragraph>12/02/2024</Paragraph>
      </CardFooter>,
    ],
  },
};
