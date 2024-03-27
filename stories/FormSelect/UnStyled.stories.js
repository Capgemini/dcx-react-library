import { FormSelect } from '../../src/formSelect/FormSelect';

export default {
  title: 'DCXLibrary/Form/Select/Without style',
  component: FormSelect,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    label: 'Unstyled',
    labelProps: {
      style: {
        display: 'block',
        marginBottom: '5px',
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
    options: ['value1', 'value2'],
  },
};
