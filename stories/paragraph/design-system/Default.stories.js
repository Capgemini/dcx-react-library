import { Paragraph } from '../../../src/paragraph/Paragraph';
/**
* Here we display the component in its natural paragraph, importing only the base Design System styles.
*/
export default {
  title:'DCXLibrary/Typography/Paragraph/Design system/Default',
  component: Paragraph,
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
}

export const Default = {  
  name: 'Default',
  args: {
    value: 'This is the content of the paragraph.',
  },
};

