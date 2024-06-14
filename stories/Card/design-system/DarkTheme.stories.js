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
// eslint-disable-next-line import/no-webpack-loader-syntax
import style from '!raw-loader!../../themes/dark.theme.css';
import { Paragraph } from '../../../src/paragraph/Paragraph';
import { Heading } from '../../../src/heading/Heading';
import { Button } from '../../../src/button';
import React from 'react';

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
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
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
