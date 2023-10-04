import { Highlight } from '../../../src/highlight/Highlight';
/**
* Here we display the highlighted text, importing only the base Design System styles.
*/
export default {
  title:'DCXLibrary/Typography/Highlight/Design system/Default',
  component: Highlight,
  decorators:[
    (getStory) => {
      require('../../../dist/design-system/index.css');
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
    children: 'This is the content of the highlighted text.',
  },
};

