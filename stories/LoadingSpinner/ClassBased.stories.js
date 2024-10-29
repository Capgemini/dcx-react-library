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
    children: 'Please wait....',
  },
};

export const CustomisedValue = {
  name: 'Loading with message as a value',
  args: {
    value: 'Please wait....',
  },
};

export const UnCustomised = {
  name: 'Loading with no message',
};

export const CustomisedColors = {
  name: 'Customised colors',
  args: {
    color: 'red',
    background: 'pink',
    children: 'Please wait....',
  },
};

export const CustomisedSpeed = {
  name: 'Customised speed',
  args: {
    speed: '0.5s'
  },
};

export const CustomiseDiameter = {
  name: 'Customised diamter',
  args: {
    diameter: '100px'
  },
  
};