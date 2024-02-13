import { Heading } from '../../src/heading/Heading';
/**
 * In this section we're using the heading component providing the **GovUk style** passing the relative className.
 * Feel free to use your own css to style the paragraph as you prefer.
 */
export default {
  title: 'DCXLibrary/Typography/Heading/Class based',
  component: Heading,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

function createHeading(level) {
  return {
    name: `${level} header`,
    args: {
      className: 'govuk-body',
      label: `This is an ${level} Header`,
      level,
    },
  };
}

export const H1 = createHeading('h1');
export const H2 = createHeading('h2');
export const H3 = createHeading('h3');
export const H4 = createHeading('h4');
export const H5 = createHeading('h5');
export const H6 = createHeading('h6');
