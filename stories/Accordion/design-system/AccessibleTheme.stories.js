import style from '!raw-loader!../../themes/accessible.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
import React from 'react';
import { Heading } from '../../../src/heading/Heading';
import { Paragraph } from '../../../src/paragraph/Paragraph';
import {
  Accordion,
  AccordionContext,
  AccordionDetails,
  AccordionItem,
  AccordionItemContext,
  AccordionTitle,
} from '../../../src/accordion';

export default {
  title: 'DCXLibrary/Layout/Accordion/Design system/Accessible',
  component: Accordion,
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
      code={StorybookUtils.getThemeCode('dcx-accordion', style)}
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
