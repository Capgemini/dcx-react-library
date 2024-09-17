import { LoadingSpinner } from '../../src/spinner/LoadingSpinner';

export default {
  title: 'DCXLibrary/Form/LoadingSpinner/Class Based',
  component: LoadingSpinner,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Customised = {
  name: 'Loading with message',
  args: {
    message: 'Please wait....',
  },
};

export const UnCustomised = {
  name: 'Loading no message',
};

export const CustomisedColors = {
  name: 'Customised colors',
  args: {
    color: 'red',
    background: 'pink',
    message: 'Loading... ',
  },
};

export const CustomisedSpeed = {
  name: 'Customised speed',
  args: {
    speed: '0.5s'
  },
  
};