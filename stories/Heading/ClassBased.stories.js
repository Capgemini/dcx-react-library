import { Heading } from '../../src/heading/Heading';
/**
 * In this section we're using the heading component providing the **GovUk style** passing the relative `className.
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

export const Basic = {
    name: 'Basic',
    args: {
        className: 'govuk-body',
        label: 'This is the content of the Heading.',
        level: '1',
    },
};