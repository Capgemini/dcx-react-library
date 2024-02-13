import { FormSelect } from '../../../src/formSelect/FormSelect';
import { LiveProvider, LiveEditor } from 'react-live';
import style from '../../themes/material.theme.css?raw';

/**
 * This a theme showcases an appearance similar to Material UI can be achieved.  
 * If you copy paste this snippet inside your css file you'll get a material design style
*/
export default {
  title: "DCXLibrary/Form/Select/Design system/Material",
  component: FormSelect,
  decorators: [
    (getStory) => {
      '../../themes/design-system/index.css';
      '../../themes/material.theme.css';
      return getStory();
    }
  ],
  parameters: {
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
        { name: 'dark', value: '#282c34' },
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
    label: "My label",
    options: ['Option 1', 'Option 2'],
    nullOption: "Select an option...",
    variant: "floating"
  }
};

export const Hint = {
  name: 'Hint',
  args: {
    label: "My label",
    options: ['Option 1', 'Option 2'],
    nullOption: "Select an option...",
    hint: {
      text: 'This is and example of hintText/description of what we need from you',
    },
    variant: "floating"
  }
};

export const Error = {
  name: 'Error',
  args: {
    label: "My label",
    options: ['Option 1', 'Option 2'],
    nullOption: "Select an option...",
    errorMessage: "Some error",
    variant: "floating"
  }
};

export const HintAndError = {
  name: 'Hint and error',
  args: {
    label: "My label",
    options: ['Option 1', 'Option 2'],
    nullOption: "Select an option...",
    hint: {
      text: 'This is and example of hintText/description of what we need from you',
    },
    errorMessage: "Some error",
    variant: "floating"
  }
};

export const Value = {
  name: 'With Value',
  args: {
    label: "My label",
    options: ['Option 1', 'Option 2'],
    nullOption: "Select an option...",
    value: "Option 1",
    variant: "floating"
  }
};

