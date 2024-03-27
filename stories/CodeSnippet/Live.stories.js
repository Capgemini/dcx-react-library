import CodeSnippetLive from '../liveEdit/CodeSnippetLive';
import { CodeSnippet } from '../../src/codesnippet/CodeSnippet';

export default {
  title: 'DCXLibrary/Typography/CodeSnippet/Live',
  component: CodeSnippet,

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
  render: () => <CodeSnippetLive />,
};
