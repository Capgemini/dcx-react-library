import {
  Accordion,
  AccordionContext,
  AccordionDetails,
  AccordionItem,
  AccordionItemContext,
  AccordionTitle,
} from '../../../src/accordion';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
// eslint-disable-next-line import/no-webpack-loader-syntax
import style from '!raw-loader!../../themes/dark.theme.css';
import { Paragraph } from '../../../src/paragraph/Paragraph';
import { Heading } from '../../../src/heading/Heading';
import React from 'react';

/**
 * This a theme showcases how to customize the component so it can be used on dark backgrounds.
 */
export default {
  title: 'DCXLibrary/Layout/Accordion/Design system/Dark',
  component: Accordion,
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
      <AccordionItem title="Second Header" key="second-header">
        <AccordionTitle>
          <Heading level="h3" label="Second Header" />
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

export const MultipleExpanded = {
  name: 'MultipleExpanded',
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
    multipleOpen: true,
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
      <AccordionItem title="Second Header" key="second-header">
        <AccordionTitle>
          <Heading level="h3" label="Second Header" />
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

export const WithIcons = {
  name: 'With Icons',
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
    multipleOpen: true,
    expandIcon: <span style={{ color: 'white' }}>▲</span>,
    collapsedIcon: <span style={{ color: 'white' }}>▼</span>,
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
      <AccordionItem title="Second Header" key="second-header">
        <AccordionTitle>
          <Heading level="h3" label="Second Header" />
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
