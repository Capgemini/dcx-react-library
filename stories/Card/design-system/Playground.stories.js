/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/card.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { Card } from '../../../src/card/Card';
import { Heading } from '../../../src/heading/Heading';
import {
  CardActions,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from '../../../src/card';
import { Paragraph } from '../../../src/paragraph/Paragraph';
import { Button } from '../../../src/button';

export default {
  title: 'DCXLibrary/Layout/Card/Design system',
  component: Card,
  decorators: [
    (getStory) => <TokensDecorator style={style}>{getStory()}</TokensDecorator>,
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
};

export const Playground = {
  name: 'Playground',
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
