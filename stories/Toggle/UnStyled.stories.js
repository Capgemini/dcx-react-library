import { Toggle } from '../../src/toggle/Toggle';
import React, {useState} from 'react';
export default {
  title: 'DCXLibrary/Form/Toggle/Without style',
  component: Toggle,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

/**
 * For a list of all the possible usage please look the Class based folder
 */
export const Unstyled = {
  render: function ({ onChange, ...args }) {
    const [checked, setChecked] = useState(args.checked);

    return <Toggle {...args} onChange={e => {
      onChange(e);
      setChecked(e);
    }} checked={checked} />;
  },
  args: {
    checked: false,
    onColor: "green",
    offColor: "gray"
  },
  argTypes: { onChange: { action: 'onChange' } },
}

