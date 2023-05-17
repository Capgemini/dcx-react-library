import { Link } from '../../src/link/Link';

/**
 * In this section we're using the Link component providing the **GovUk style** passing the relative className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Typography/Link/Class based',
  component: Link,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  args: {
    to: 'https://www.google.com/',
    value: 'Google',
    props: { target: '_blank' },
    className: 'govuk-link',
  },
};
