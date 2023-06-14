import { FormSelect } from '../../../src/formSelect/FormSelect';
import style from '!raw-loader!../../themes/accessible.theme.css';
import { LiveProvider, LiveEditor} from 'react-live';

/**
* This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
*/
export default {
  title:"DCXLibrary/Form/Select/Design system/Accessible",
  component: FormSelect,
  decorators:[
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/accessible.theme.css');
      return getStory();
    }
  ],
  parameters:{
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'] 
}

export const ShowCase = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: () => (
    <LiveProvider code={style.replace('.dcx-formselect', ':root')} disabled={true} language="css">
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  )
}

export const Default = {  
  name: 'Default',
  args: {
    label:"My label",
    options:['Option 1', 'Option 2'],
    nullOption:"Select an option...",
  }
};

export const Hint = {  
  name: 'Hint',
  args: {
    label:"My label",
    options:['Option 1', 'Option 2'],
    nullOption:"Select an option...",
    hint:{
      text: 'This is and example of hintText/description of what we need from you',
    },
  }
};

export const Error = {  
  name: 'Error',
  args: {
    label:"My label",
    options:['Option 1', 'Option 2'],
    nullOption:"Select an option...",
    errorMessage:"Some error",
  }
};

export const HintAndError = {  
  name: 'Hint and error',
  args: {
    label:"My label",
    options:['Option 1', 'Option 2'],
    nullOption:"Select an option...",
    hint:{
      text: 'This is and example of hintText/description of what we need from you',
    },
    errorMessage:"Some error",

  }
};

export const Value = {  
  name: 'With Value',
  args: {
    label:"My label",
    options:['Option 1', 'Option 2'],
    nullOption:"Select an option...",
    value:"Option 1",
  }
};
