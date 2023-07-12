import { Label } from '../../../src/label/Label';
import style from '!raw-loader!../../themes/dark.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';

/**
 * This a theme showcases how to customize the component so it can be used on dark backgrounds.
 */
export default {
  title: 'DCXLibrary/Typography/Label/Design system/Dark',
  component: Label,
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
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  args: {
    value: 'Default label',
  },
};

export const Error = {
  name: 'Error',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  args: {
    value: 'Error label',
    className: 'dcx-error-message',
  },
};

export const Filled = {
  name: 'Filled',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  args: {
    value: 'Filled label',
  },
};
