import { CodeSnippet } from '../../src/codesnippet/CodeSnippet';

export default {
  title: 'DCXLibrary/Typography/CodeSnippet/Without style',
  component: CodeSnippet,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    value: 'This is the content of the code snippet.'
  },
};
