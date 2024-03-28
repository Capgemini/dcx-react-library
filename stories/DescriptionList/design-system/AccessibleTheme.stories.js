/* eslint-disable import/no-webpack-loader-syntax */
import { DescriptionList, Term, Detail } from '../../../src/descriptionList';
import style from '!raw-loader!../../themes/accessible.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
 */
export default {
  title: 'DCXLibrary/Typography/DescriptionList/Design system/Accessible',
  component: DescriptionList,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/accessible.theme.css');
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
      default: 'light',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: () => (
    <LiveProvider
      code={StorybookUtils.getThemeCode('dcx-description-list', style)}
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
    options: { showPanel: true },
    actions: { disable: true },
  },
  args: {
    label: 'Description',
    variant: 'primary',
    children: (
      <>
        <Term className="myStyle">Coffee</Term>
        <Detail className="myStyle">black hot drink</Detail>
        <Term className="myStyle">Milk</Term>
        <Detail className="myStyle">white cold drink</Detail>
      </>
    ),
  },
};
