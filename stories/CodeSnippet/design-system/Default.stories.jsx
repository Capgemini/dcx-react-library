import { CodeSnippet } from '../../../src/codesnippet/CodeSnippet';
/**
* Here we display the code snippet, importing only the base Design System styles.
*/
export default {
  title:'DCXLibrary/Typography/CodeSnippet/Design system/Default',
  component: CodeSnippet,
  decorators:[
    (getStory) => {
      '../../../dist/design-system/index.css';
      return getStory();
    }
  ],
  parameters:{
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'] 
};

export const Default = {  
  name: 'Default',
  args: {
    value: 'This is the content of the code snippet.',
  },
};

