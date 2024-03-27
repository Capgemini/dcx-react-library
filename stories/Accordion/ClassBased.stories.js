import {
  Accordion,
  AccordionDetails,
  AccordionItem,
  AccordionTitle,
} from '../../src/accordion';

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
  tags: ['autodocs'],
};

/**
 * By default Accordion is designed to have only one section expanded at the time
 */
export const BasicAccordion = {
  name: 'Basic',
  render: function (args) {
    return (
      <Accordion className="govuk-accordion" {...args}>
        <AccordionItem className="govuk-accordion__section" title="1">
          <AccordionTitle className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Writing well for the web
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails className="govuk-accordion__section-content">
            <p class="govuk-body">
              This is the content for Writing well for the web.
            </p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem className="govuk-accordion__section" title="2">
          <AccordionTitle className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Writing well for specialists
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails className="govuk-accordion__section-content">
            <p class="govuk-body">
              This is the content for writing well for specialists.
            </p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem className="govuk-accordion__section" title="3">
          <AccordionTitle className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Know your audience
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails className="govuk-accordion__section-content">
            <p class="govuk-body">
              This is the content for Know your audience.
            </p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
  },
  args: {
    multipleOpen: false,
    expanded: [],
    expandIcon: (
      <span className="govuk-accordion__section-toggle">
        <span className="govuk-accordion__section-toggle-focus">
          <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"></span>
          <span className="govuk-accordion__section-toggle-text">Hide</span>
        </span>
      </span>
    ),
    collapsedIcon: (
      <span className="govuk-accordion__section-toggle">
        <span className="govuk-accordion__section-toggle-focus">
          <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--up"></span>
          <span className="govuk-accordion__section-toggle-text">Show</span>
        </span>
      </span>
    ),
  },
};

/**
 * Passing the property *multipleOpen* we can keep all sections expanded upon clicking on them.
 */
export const multipleOpen = {
  name: 'Multiple sections expanded',
  render: function (args) {
    return (
      <Accordion className="govuk-accordion" {...args}>
        <AccordionItem className="govuk-accordion__section" title="1">
          <AccordionTitle className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Writing well for the web
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails className="govuk-accordion__section-content">
            <p class="govuk-body">
              This is the content for Writing well for the web.
            </p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem className="govuk-accordion__section" title="2">
          <AccordionTitle className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Writing well for specialists
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails className="govuk-accordion__section-content">
            <p class="govuk-body">
              This is the content for writing well for specialists.
            </p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem className="govuk-accordion__section" title="3">
          <AccordionTitle className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Know your audience
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails className="govuk-accordion__section-content">
            <p class="govuk-body">
              This is the content for Know your audience.
            </p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
  },
  args: {
    multipleOpen: true,
    expanded: [],
    expandIcon: (
      <span className="govuk-accordion__section-toggle">
        <span className="govuk-accordion__section-toggle-focus">
          <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"></span>
          <span className="govuk-accordion__section-toggle-text">Hide</span>
        </span>
      </span>
    ),
    collapsedIcon: (
      <span className="govuk-accordion__section-toggle">
        <span className="govuk-accordion__section-toggle-focus">
          <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--up"></span>
          <span className="govuk-accordion__section-toggle-text">Show</span>
        </span>
      </span>
    ),
  },
};

/**
 * Passing the property *expanded: [title]* and *multipleOpen: false* we have one section expanded by default upon initialization. Additionally, it allows only one section to be expanded at any given time.
 */
export const defaultExpandedAccordion = {
  name: 'Expanded by default one at a time',
  render: function (args) {
    return (
      <Accordion className="govuk-accordion" {...args}>
        <AccordionItem className="govuk-accordion__section" title="1">
          <AccordionTitle className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Writing well for the web
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails className="govuk-accordion__section-content">
            <p class="govuk-body">
              This is the content for Writing well for the web.
            </p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem className="govuk-accordion__section" title="2">
          <AccordionTitle className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Writing well for specialists
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails className="govuk-accordion__section-content">
            <p class="govuk-body">
              This is the content for writing well for specialists.
            </p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem className="govuk-accordion__section" title="3">
          <AccordionTitle className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Know your audience
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails className="govuk-accordion__section-content">
            <p class="govuk-body">
              This is the content for Know your audience.
            </p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
  },
  args: {
    multipleOpen: false,
    expanded: ['1'],
    expandIcon: (
      <span className="govuk-accordion__section-toggle">
        <span className="govuk-accordion__section-toggle-focus">
          <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"></span>
          <span className="govuk-accordion__section-toggle-text">Hide</span>
        </span>
      </span>
    ),
    collapsedIcon: (
      <span className="govuk-accordion__section-toggle">
        <span className="govuk-accordion__section-toggle-focus">
          <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--up"></span>
          <span className="govuk-accordion__section-toggle-text">Show</span>
        </span>
      </span>
    ),
  },
};

/**
 * Passing the property *expanded: [title]* and *multipleOpen: false* we have one section expanded by default with the capability to expand multiple sections simultaneously.
 */
export const defaultExpandedWithMultipleSectionsAllowed = {
  name: 'Expanded by default multiple sections open',
  render: function (args) {
    return (
      <Accordion className="govuk-accordion" {...args}>
        <AccordionItem className="govuk-accordion__section" title="1">
          <AccordionTitle className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Writing well for the web
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails className="govuk-accordion__section-content">
            <p class="govuk-body">
              This is the content for Writing well for the web.
            </p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem className="govuk-accordion__section" title="2">
          <AccordionTitle className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Writing well for specialists
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails className="govuk-accordion__section-content">
            <p class="govuk-body">
              This is the content for writing well for specialists.
            </p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem className="govuk-accordion__section" title="3">
          <AccordionTitle className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Know your audience
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails className="govuk-accordion__section-content">
            <p class="govuk-body">
              This is the content for Know your audience.
            </p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
  },
  args: {
    multipleOpen: true,
    expanded: ['1'],
    expandIcon: (
      <span className="govuk-accordion__section-toggle">
        <span className="govuk-accordion__section-toggle-focus">
          <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"></span>
          <span className="govuk-accordion__section-toggle-text">Hide</span>
        </span>
      </span>
    ),
    collapsedIcon: (
      <span className="govuk-accordion__section-toggle">
        <span className="govuk-accordion__section-toggle-focus">
          <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--up"></span>
          <span className="govuk-accordion__section-toggle-text">Show</span>
        </span>
      </span>
    ),
  },
};

/**
 * Passinf *titleClassName* and *detailsClassName* as props at the root level will allow for custom styling of the title and details sections of the accordion.
 */
export const definedTitleAndDetailsClassNames = {
  name: 'Global classNames',
  render: function (args) {
    return (
      <Accordion className="govuk-accordion" {...args}>
        <AccordionItem className="govuk-accordion__section" title="1">
          <AccordionTitle>
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Writing well for the web
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails>
            <p class="govuk-body">
              This is the content for Writing well for the web.
            </p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem className="govuk-accordion__section" title="2">
          <AccordionTitle>
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Writing well for specialists
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails>
            <p class="govuk-body">
              This is the content for writing well for specialists.
            </p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem className="govuk-accordion__section" title="3">
          <AccordionTitle>
            <h2 className="govuk-accordion__section-heading">
              <button type="button" className="govuk-accordion__section-button">
                <span className="govuk-accordion__section-heading-text">
                  <span className="govuk-accordion__section-heading-text-focus">
                    Know your audience
                  </span>
                </span>
              </button>
            </h2>
          </AccordionTitle>
          <AccordionDetails>
            <p class="govuk-body">
              This is the content for Know your audience.
            </p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    );
  },
  args: {
    multipleOpen: false,
    expanded: [],
    titleClassName: 'govuk-accordion__section-header',
    detailsClassName: 'govuk-accordion__section-content',
    expandIcon: (
      <span className="govuk-accordion__section-toggle">
        <span className="govuk-accordion__section-toggle-focus">
          <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"></span>
          <span className="govuk-accordion__section-toggle-text">Hide</span>
        </span>
      </span>
    ),
    collapsedIcon: (
      <span className="govuk-accordion__section-toggle">
        <span className="govuk-accordion__section-toggle-focus">
          <span className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--up"></span>
          <span className="govuk-accordion__section-toggle-text">Show</span>
        </span>
      </span>
    ),
  },
};
