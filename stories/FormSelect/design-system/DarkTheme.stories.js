import { FormSelect } from '../../../src/formSelect/FormSelect';
import style from '!raw-loader!../../themes/dark.theme.css';
import { LiveProvider, LiveEditor} from 'react-live';

/**
* This a theme showcases how to customize the component so it can be used on dark backgrounds.
*/
export default {
  title:"DCXLibrary/Form/Select/Design system/Dark",
  component: FormSelect,
  decorators:[
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/dark.theme.css');
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
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  args: {
    label:"My label",
    options:['Option 1', 'Option 2'],
    nullOption:"Select an option...",
  }
};

export const Hint = {  
  name: 'Hint',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
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
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  args: {
    label:"My label",
    options:['Option 1', 'Option 2'],
    nullOption:"Select an option...",
    errorMessage:"Some error",
  }
};

export const HintAndError = {  
  name: 'Hint and error',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
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
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  args: {
    label:"My label",
    options:['Option 1', 'Option 2'],
    nullOption:"Select an option...",
    value:"Option 1",
  }
};

