import { FormSelect } from '../../../src/formSelect/FormSelect';

export default {
  title:"DCXLibrary/Form/Select/Design system",
  component:FormSelect,
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
    label:"My label",
    options:['Option 1', 'Option 2'],
    nullOption:"Select an option..."
  },
};