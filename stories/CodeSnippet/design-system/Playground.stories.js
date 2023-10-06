/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/code-snippet.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { CodeSnippet } from '../../../src/codesnippet/CodeSnippet';

export default {
  title: 'DCXLibrary/Typography/CodeSnippet/Design system',
  component: CodeSnippet,
  decorators: [
    (getStory) => (
      <TokensDecorator style={style}>
        {getStory()}
      </TokensDecorator>
    )
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  }
};

export const Default = {  
  name: 'Playground',
  args: {
    value: 'This is the content of the code snippet.',
  },
};
