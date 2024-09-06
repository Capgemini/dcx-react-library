import { Avatar } from '../../../src/avatar';

/**
 * Here we display the component in its natural `avatar` form default, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Form/Avatar/Design system/Default',
  component: Avatar,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
};

export const DefaultText = {
  name: 'Default Text',
  args: {
    children: 'JB'
  },
};

export const DefaultTextRounded = {
  name: 'Default Text rounded',
  args: {
    children: 'JB',
    shape:'rounded'
  },
};

export const DefaultTextSquare = {
  name: 'Default Text Square',
  args: {
    children: 'JB',
    shape: 'square'
  },
};

export const DefaultImage = {
  name: 'Default image',
  args: {
    src: 'https://www.capgemini.com/gb-en/wp-content/themes/capgemini-komposite/assets/images/logo.svg',
  },
};

export const DefaultImageRounded = {
  name: 'Default image rounded',
  args: {
    shape: 'rounded',
    src: 'https://www.capgemini.com/gb-en/wp-content/themes/capgemini-komposite/assets/images/logo.svg',
  },
};

export const DefaultImageSquare = {
  name: 'Default image square',
  args: {
    shape: 'square',
    src: 'https://www.capgemini.com/gb-en/wp-content/themes/capgemini-komposite/assets/images/logo.svg',
  },
};

export const CustomContent = {
  name: 'Custom Content',
  args: {
    children: [<a href="#">External link</a>],
  },
};
