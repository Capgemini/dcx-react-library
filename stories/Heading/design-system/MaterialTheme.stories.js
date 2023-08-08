import { Heading } from '../../../src/heading/Heading';
import { LiveProvider, LiveEditor } from 'react-live';
import style from '!raw-loader!../../themes/material.theme.css';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This is a theme showcases an appearance similar to Material UI can be achieved.  
 * If you copy paste this snippet inside your css file you'll get a material design style
*/
export default {
    title: "DCXLibrary/Typography/Heading/Design system/Material",
    component: Heading,
    decorators: [
        (getStory) => {
            require('../../../dist/design-system/index.css');
            require('../../themes/material.theme.css');
            return getStory();
        }
    ],
    parameters: {
        options: { showPanel: true },
        actions: { disable: true },
    },
    tags: ['autodocs']
}


export const ShowCase = {
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#282c34' },
                { name: 'light', value: '#fff' },
            ],
        },
    },
    render: () => (
        <LiveProvider code={StorybookUtils.getThemeCode('dcx-heading', style)} disabled={true} language="css">
            <LiveEditor className="liveEditor" aria-label="editor" />
        </LiveProvider>
    )
}

export const Default = {
    name: 'Default',
    args: {
        label: "This is the content of the heading",
        level: 'h1',
    }
};

export const level_2 = {
    name: 'level_2',
    args: {
        label: "This is the content of the heading",
        level: 'h2',
        variant: 'level_2',
    }
};

export const level_3 = {
    name: 'level_3',
    args: {
        label: "This is the content of the heading",
        level: 'h3',
        variant: 'level_3',
    }
};

export const level_4 = {
    name: 'level_4',
    args: {
        label: "This is the content of the heading",
        level: 'h4',
        variant: 'level_4',
    }
};

export const level_5 = {
    name: 'level_5',
    args: {
        label: "This is the content of the heading",
        level: 'h5',
        variant: 'level_5',
    }
};

export const level_6 = {
    name: 'level_6',
    args: {
        label: "This is the content of the heading",
        level: 'h6',
        variant: 'level_6',
    }
};





