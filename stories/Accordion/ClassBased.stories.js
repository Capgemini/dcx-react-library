import { Accordion, AccordionDetails, AccordionItem, AccordionTitle } from '../../src/accordion';

/**
 * In this section we are using the Accordion component providing the GovUk style passing the relative className. Feel free to use your own css and style the Accordion component as you prefer
 */
export default {
  title: 'DCXLibrary/Layout/Accordion/Class based',
  component: Accordion,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'] 
};

export const BasicAccordion = {
  name: 'Accordion component that does not allows multiple sections to be open at the same time.',
  render: function (args) {
    return (
      <Accordion className='govuk-accordion' {...args}>
      <AccordionItem className='govuk-accordion__section' title="1">
        <AccordionTitle>
          <h2 className="govuk-accordion__section-heading">
            <button 
              type="button" 
              className="govuk-accordion__section-button" 
            >
              <span className="govuk-accordion__section-heading-text">
                <span className="govuk-accordion__section-heading-text-focus">
                  Writing well for the web
                </span>
              </span>
            </button>
          </h2>
        </AccordionTitle>
        <AccordionDetails>
          <p class="govuk-body">This is the content for Writing well for the web.</p>
        </AccordionDetails>
      </AccordionItem>
      <AccordionItem className='govuk-accordion__section' title="2">
        <AccordionTitle>
          <h2 className="govuk-accordion__section-heading">
            <button 
              type="button" 
              className="govuk-accordion__section-button" 
            >
              <span className="govuk-accordion__section-heading-text">
                <span className="govuk-accordion__section-heading-text-focus">
                  Writing well for specialists
                </span>
              </span>
            </button>
          </h2>
        </AccordionTitle>
        <AccordionDetails>
          <p class="govuk-body">This is the content for writing well for specialists.</p>
        </AccordionDetails>
      </AccordionItem>
      <AccordionItem className='govuk-accordion__section' title="3">
        <AccordionTitle>
          <h2 className="govuk-accordion__section-heading">
            <button 
              type="button" 
              className="govuk-accordion__section-button" 
            >
              <span className="govuk-accordion__section-heading-text">
                <span className="govuk-accordion__section-heading-text-focus">
                  Know your audience
                </span>
              </span>
            </button>
          </h2>
        </AccordionTitle>
        <AccordionDetails>
          <p class="govuk-body">This is the content for Know your audience.</p>
        </AccordionDetails>
      </AccordionItem>
    </Accordion>
    );
  },
  args: {
    multipleOpen: true,
    titleClassName: 'govuk-accordion__section-header',
    detailsClassName: 'govuk-accordion__section-content',
    expandIcon:
    <span className="govuk-accordion__section-toggle">
      <span className="govuk-accordion__section-toggle-focus">
      <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"></span>
      <span className="govuk-accordion__section-toggle-text">Hide</span>
    </span>
  </span>,
  collapsedIcon:
  <span className="govuk-accordion__section-toggle">
  <span className="govuk-accordion__section-toggle-focus">
    <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--up"></span>
    <span className="govuk-accordion__section-toggle-text">Show</span>
  </span>
</span>
  },
};

export const multipleOpen = {
  name: 'Accordion component that allows multiple sections to be open at the same time.',
  render: function (args) {
    return (
      <Accordion className='govuk-accordion' {...args}>
      <AccordionItem className='govuk-accordion__section' title="1">
        <AccordionTitle>
          <h2 className="govuk-accordion__section-heading">
            <button 
              type="button" 
              className="govuk-accordion__section-button" 
            >
              <span className="govuk-accordion__section-heading-text">
                <span className="govuk-accordion__section-heading-text-focus">
                  Writing well for the web
                </span>
              </span>
            </button>
          </h2>
        </AccordionTitle>
        <AccordionDetails>
          <p class="govuk-body">This is the content for Writing well for the web.</p>
        </AccordionDetails>
      </AccordionItem>
      <AccordionItem className='govuk-accordion__section' title="2">
        <AccordionTitle>
          <h2 className="govuk-accordion__section-heading">
            <button 
              type="button" 
              className="govuk-accordion__section-button" 
            >
              <span className="govuk-accordion__section-heading-text">
                <span className="govuk-accordion__section-heading-text-focus">
                  Writing well for specialists
                </span>
              </span>
            </button>
          </h2>
        </AccordionTitle>
        <AccordionDetails>
          <p class="govuk-body">This is the content for writing well for specialists.</p>
        </AccordionDetails>
      </AccordionItem>
      <AccordionItem className='govuk-accordion__section' title="3">
        <AccordionTitle>
          <h2 className="govuk-accordion__section-heading">
            <button 
              type="button" 
              className="govuk-accordion__section-button" 
            >
              <span className="govuk-accordion__section-heading-text">
                <span className="govuk-accordion__section-heading-text-focus">
                  Know your audience
                </span>
              </span>
            </button>
          </h2>
        </AccordionTitle>
        <AccordionDetails>
          <p class="govuk-body">This is the content for Know your audience.</p>
        </AccordionDetails>
      </AccordionItem>
    </Accordion>
    );
  },
  args: {
    multipleOpen: true,
    titleClassName: 'govuk-accordion__section-header',
    detailsClassName: 'govuk-accordion__section-content',
    expandIcon:
    <span className="govuk-accordion__section-toggle">
      <span className="govuk-accordion__section-toggle-focus">
      <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"></span>
      <span className="govuk-accordion__section-toggle-text">Hide</span>
    </span>
  </span>,
  collapsedIcon:
  <span className="govuk-accordion__section-toggle">
  <span className="govuk-accordion__section-toggle-focus">
    <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--up"></span>
    <span className="govuk-accordion__section-toggle-text">Show</span>
  </span>
</span>
  },
};

