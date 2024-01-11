import { ButtonGroup, Button } from '../../../src';

/**
 * Here we display the component in its natural `button` form default, importing only the base Design System styles.
 */
export default {
    title: 'DCXLibrary/Form/ButtonGroup/Design system/Default',
    component: ButtonGroup,
    decorators: [
        getStory => {
            require('../../../dist/design-system/index.css');
            return getStory();
        },
    ],
    parameters: {
        options: { showPanel: true },
        actions: { disable: true },
    },
    tags: ['autodocs'],
};

export const Default = {
    render: function () {
        return (
            <ButtonGroup buttonVariant="primary" layout="horizontal">
                <Button label="Button 1" />
                <Button label="Button 2" />
                <Button label="Button 3" />
            </ButtonGroup>
        );
    }
};

export const DefaultVertical = {
    name: 'Default Vertical',
    render: function () {
        return (
            <ButtonGroup buttonVariant="primary" layout="vertical">
                <Button label="Button 1" />
                <Button label="Button 2" />
                <Button label="Button 3" />
            </ButtonGroup>
        );
    }
};

export const DefaultDisabled = {
    name: 'Default Disabled',
    render: function () {
        return (
            <ButtonGroup buttonVariant="primary" layout="horizontal" disabled>
                <Button label="Button 1" />
                <Button label="Button 2" />
                <Button label="Button 3" />
            </ButtonGroup>
        );
    }
};
