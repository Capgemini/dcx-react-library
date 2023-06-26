import { Label } from '../../../src/label/Label';
import style from '!raw-loader!../../themes/accessible.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';

/**
 * This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
 */
export default {
  title: 'DCXLibrary/Typography/Label/Design system/Accessible',
  component: Label,
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
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: () => {
    const componentStyle = /\.dcx-label {([\s\S]*)}/g.exec(style);
    let themeCode = '';
    if (componentStyle) {
      themeCode = `:root {${componentStyle[1]}}`;
    }
    return (
      <LiveProvider code={themeCode} disabled={true} language="css">
        <LiveEditor className="liveEditor" aria-label="editor" />
      </LiveProvider>
    );
  },
};

export const Default = {
  name: 'Default',
  args: {
    value: 'Default label',
  },
};

export const Error = {
  name: 'Error',
  args: {
    value: 'Error label',
    className: 'dcx-error-message',
  },
};

export const Filled = {
  name: 'Filled',
  args: {
    value: 'Filled label',
  },
};
