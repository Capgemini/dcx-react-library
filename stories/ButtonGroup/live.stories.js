import ButtonGroupLive from '../liveEdit/ButtonGroupLive';
import { ButtonGroup } from '../../src/buttonGroup/ButtonGroup';

export default {
    title: 'DCXLibrary/Form/ButtonGroup/Live',
    component: ButtonGroup,

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
    render: () => <ButtonGroupLive />
};