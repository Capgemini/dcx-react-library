import { Abbreviate } from '../../src/abbreviate/Abbreviate';
import './style.css';
/**
 * In this section we're using the Abbreviate component providing the relative `className, title and value` . Feel free to use your own css and style the Abbreviate as you prefer.
 */
export default {
  title: 'DCXLibrary/Typography/Abbreviate/Class based',
  component: Abbreviate,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  args: {
    className: 'abbreviate',
    title: 'Laugh Out Loud',
    value: 'LOL',
  },
};
