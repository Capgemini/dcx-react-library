import { Heading } from '../../../src/heading/Heading';

export default {
    title: "DCXLibrary/Typography/Heading/Design system",
    component: Heading,
    decorators: [
        (getStory) => {
            require('../../../dist/design-system/index.css');
            return getStory();
        }
    ],
    parameters: {
        options: { showPanel: true },
        actions: { disable: true },
    }
}


export const Playground = {
    name: 'Playground',
    args: {
        label: "This is the content of the heading",
        level: 'h1',
    }
};
