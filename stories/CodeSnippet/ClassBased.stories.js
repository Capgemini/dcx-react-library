import { CodeSnippet } from '../../src/codesnippet/CodeSnippet';
import './style.css';
/**
 * In this section we're using the CodeSnippet component providing the relative `className and value` . Feel free to use your own css and style the CodeSnippet as you prefer.
 */
export default {
  title: 'DCXLibrary/Typography/CodeSnippet/Class based',
  component: CodeSnippet,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  args: {
    className: 'codesnippet',
    value: 'This is the content of the code snippet.'
  },
};

