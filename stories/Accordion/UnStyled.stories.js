import { Accordion, AccordionDetails, AccordionItem, AccordionTitle } from '../../src/accordion';

export default {
  title: 'DCXLibrary/Layout/Accordion/Without style',
  component: Accordion,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function (args) {
    return (
      <Accordion {...args}>
    <AccordionItem title="1">
      <AccordionTitle>
        <>Frequently Asked Questions</>
      </AccordionTitle>
      <AccordionDetails>
        <p>Here you can find answers to the most commonly asked questions about our product.</p>
      </AccordionDetails>
    </AccordionItem>
    <AccordionItem title="2">
      <AccordionTitle>
        <>Contact Information</>
      </AccordionTitle>
      <AccordionDetails>
        <p>Here you can find various ways to get in touch with our support team.</p>
      </AccordionDetails>
    </AccordionItem>
  </Accordion>
    );
  },
  args: {
    expanded: ['1'],
    titleClassName: 'accordion',
    detailsClassName: 'panel',
    expandIcon: <span>&#x25B2;</span>,
    collapsedIcon: <span>&#x25BC;</span>,
    multipleOpen: false,
  },
};