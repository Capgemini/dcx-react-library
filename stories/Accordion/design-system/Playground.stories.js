/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/accordion.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { Heading } from '../../../src/heading/Heading';
import {
  Accordion,
  AccordionContext,
  AccordionDetails,
  AccordionItem,
  AccordionItemContext,
  AccordionTitle,
} from '../../../src/accordion';
import { Paragraph } from '../../../src/paragraph/Paragraph';

export default {
  title: 'DCXLibrary/Layout/Accordion/Design system',
  component: Accordion,
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
      <AccordionItem title="Accordion Header" key="accordion-header">
        <AccordionTitle>
          <Heading level="h3" label="Accordion Header" />
        </AccordionTitle>
        <AccordionDetails>
          <Paragraph>
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </Paragraph>
        </AccordionDetails>
      </AccordionItem>,
      <AccordionItem title="Another Header" key="another-header">
        <AccordionTitle>
          <Heading level="h3" label="Another Header" />
        </AccordionTitle>
        <AccordionDetails>
          <Paragraph>
            Nullam sodales semper ipsum, et luctus lacus sodales in. Nulla nibh
            nisl, egestas et elit et, interdum cursus massa.
          </Paragraph>
        </AccordionDetails>
      </AccordionItem>,
    ],
  },
};
