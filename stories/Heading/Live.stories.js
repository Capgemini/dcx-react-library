import HeadingLive from '../liveEdit/HeadingLive';
import { Heading } from '../../src/heading/Heading';

export default {
    title: 'DCXLibrary/Typography/Heading/Live',
    component: Heading,

    parameters: {
        options: {
            showPanel: false,
        },
        viewMode: 'docs',
        previewTabs: {
            canvas: {
                hidden: true,
            },
        },
    },
};

export const Live = {
    render: () => <HeadingLive />
};