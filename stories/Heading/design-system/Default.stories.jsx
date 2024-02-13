import { Heading } from '../../../src/heading/Heading';

/**
* Here we display the component in its natural form, importing only the base Design System styles.
*/
export default {
  title: 'DCXLibrary/Typography/Heading/Design system/Default',
  component: Heading,
  decorators: [
    (getStory) => {
      '../../themes/design-system/index.css';
      return getStory();
    }
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs']
};

export const Default = {
  name: 'Default',
  args: {
    label: 'This is the content of the heading',
    level: 'h1',
  }
};

export const level2 = {
  name: 'level_2',
  args: {
    label: 'This is the content of the heading',
    level: 'h2',
    variant: 'level_2',
  }
};

export const level3 = {
  name: 'level_3',
  args: {
    label: 'This is the content of the heading',
    level: 'h3',
    variant: 'level_3',
  }
};

export const level4 = {
  name: 'level_4',
  args: {
    label: 'This is the content of the heading',
    level: 'h4',
    variant: 'level_4',
  }
};

export const level5 = {
  name: 'level_5',
  args: {
    label: 'This is the content of the heading',
    level: 'h5',
    variant: 'level_5',
  }
};

export const level6 = {
  name: 'level_6',
  args: {
    label: 'This is the content of the heading',
    level: 'h6',
    variant: 'level_6',
  }
};
