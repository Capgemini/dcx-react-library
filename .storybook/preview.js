// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import '../stories/govUkStyle.css';
export const parameters = {
  options: {
    storySort: {
      order: ['DCXLibrary', ['Introduction','Utils', 'Form', 'CopyToClipboard', 'Details', 'Tabs', 'Table', 'Changelog']]
    },
  },
};