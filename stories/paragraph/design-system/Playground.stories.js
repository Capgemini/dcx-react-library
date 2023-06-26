import { Paragraph } from '../../../src/paragraph/Paragraph';

export default {
  title:'DCXLibrary/Typography/Paragraph/Design system',
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
  }
}


export const Playground = {
  name: 'Playground',
  args: {
    value: 'This is the content of the paragraph.',
  },
};