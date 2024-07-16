import {
  Accordion,
  AccordionContext,
  AccordionDetails,
  AccordionItem,
  AccordionItemContext,
  AccordionTitle,
} from '../../../src/accordion';
import { Heading } from '../../../src/heading/Heading';
import { Paragraph } from '../../../src/paragraph/Paragraph';
import React from 'react';

/**
 * Here we display the component in its natural form, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Layout/Accordion/Design system/Default',
  component: Accordion,
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
