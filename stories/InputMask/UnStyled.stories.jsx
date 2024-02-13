import { FormInputMasked } from '../../src/formInput/FormInputMasked';
import { useArgs } from '@storybook/preview-api';

export default {
  title: 'DCXLibrary/Form/InputMasked/Without style',
  component: FormInputMasked,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = event => {
      onChange(evt);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInputMasked {...args} onChange={handleChange} />;
  },
  args: {
    name:"maskInput",
    options:{
      mask: '£num',
      blocks: {
        num: {
          mask: Number,
          thousandsSeparator: ' ',
        },
      },
    },
    value:"",
    type:"text"
  },
  argTypes: { onChange: { action: 'onChange' } },
};