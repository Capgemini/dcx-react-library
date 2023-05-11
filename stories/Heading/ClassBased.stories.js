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
        name: `Basic H${level}`,
        args: {
            className: 'govuk-body',
            label: `This is a Level ${level} Header`,
            level,
        },
    }
}

export const BasicH1 = createHeading('1')
export const BasicH2 = createHeading('2')
export const BasicH3 = createHeading('3')
export const BasicH4 = createHeading('4')
export const BasicH5 = createHeading('5')
export const BasicH6 = createHeading('6')