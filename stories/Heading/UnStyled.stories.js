import { Heading } from '../../src/heading/Heading';

export default {
    title: 'DCXLibrary/Typography/Heading/Without style',
    component: Heading,
    parameters: {
        options: {
            showPanel: true,
        },
    },
};

export const Unstyled = {
    args: {
        label: 'This is the content of the heading.',
        level: '1'
    },
};