import { Heading } from '../../../src/heading/Heading';
import style from '!raw-loader!../../themes/dark.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This is a theme showcases how to customize the component, so it can be used on dark backgrounds.
 */
export default {
    title: 'DCXLibrary/Typography/Heading/Design system/Dark',
    component: Heading,
    decorators: [
        (getStory) => {
            require('../../../dist/design-system/index.css');
            require('../../themes/dark.theme.css');
            return getStory();
        },
    ],
    parameters: {
        options: { showPanel: true },
        actions: { disable: true },
    },
    tags: ['autodocs'],
};

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
        <LiveProvider
            code={StorybookUtils.getThemeCode('dcx-heading', style)}
            disabled={true}
            language="css"
        >
            <LiveEditor className="liveEditor" aria-label="editor" />
        </LiveProvider>
    ),
};

export const Default = {
    name: 'Default',
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#282c34' },
                { name: 'light', value: '#fff' },
            ],
        },
    },
    args: {
        label: "This is the content of the heading",
        level: 'h1',
    }
};

export const level_2 = {
    name: 'level_2',
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#282c34' },
                { name: 'light', value: '#fff' },
            ],
        },
    },
    args: {
        label: "This is the content of the heading",
        level: 'h2',
        variant: 'level_2',
    }
};

export const level_3 = {
    name: 'level_3',
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#282c34' },
                { name: 'light', value: '#fff' },
            ],
        },
    },
    args: {
        label: "This is the content of the heading",
        level: 'h3',
        variant: 'level_3',
    }
};

export const level_4 = {
    name: 'level_4',
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#282c34' },
                { name: 'light', value: '#fff' },
            ],
        },
    },
    args: {
        label: "This is the content of the heading",
        level: 'h4',
        variant: 'level_4',
    }
};

export const level_5 = {
    name: 'level_5',
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#282c34' },
                { name: 'light', value: '#fff' },
            ],
        },
    },
    args: {
        label: "This is the content of the heading",
        level: 'h5',
        variant: 'level_5',
    }
};

export const level_6 = {
    name: 'level_6',
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#282c34' },
                { name: 'light', value: '#fff' },
            ],
        },
    },
    args: {
        label: "This is the content of the heading",
        level: 'h6',
        variant: 'level_6',
    }
};