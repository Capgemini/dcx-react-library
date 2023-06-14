import { FormCheckbox } from '../../src/formCheckbox/FormCheckbox';
import { useArgs } from '@storybook/preview-api';

export default {
  title: 'DCXLibrary/Form/Checkbox/Without style',
  component: FormCheckbox,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const checkboxHandler = (evt, conditional) => {
      onChange(evt);
      if (conditional) {
        console.log(conditional);
        return;
      }
      setArgs({ value: evt.currentTarget.value, selected:  evt.currentTarget.checked});
      setTimeout(() => setArgs({ isLoading: false }), 2000);
    };
    return <FormCheckbox {...args} onChange={checkboxHandler} />;
  },
  args: {
    label:"checkbox label",
    value:'',
    id:"checkbox-6",
    inputProps:{
      name: 'checkbox-6',
    },
    selected:false,
    conditional:{
      value: '',
      name: 'conditional-6',
      label: 'condition label',
      type: 'text',
      id: 'checkbox-6',
      inputId: 'input-6',
    }
  },
  argTypes: { onChange: { action: 'changed' } },
};
