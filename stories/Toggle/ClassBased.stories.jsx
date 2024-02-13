import { Toggle } from '../../src/toggle/Toggle';
import React, {useState} from "react";
/**
 * In this section we're using the Toggle component providing  different colors and shapes.   
 */
export default {
  title: 'DCXLibrary/Form/Toggle/Class based',
  component: Toggle,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'] 
};

export const CustomStyle = {
  name: "custom style",
  render: function ({ onChange, ...args }) {
    const [checked, setChecked] = useState(args.checked);

    return <Toggle {...args} onChange={e => {
      onChange(e);
      setChecked(e);
    }} checked={checked} />;
  },
  args: {
    checked: false,
    onColor: "orange",
    offColor: "gray",
    customOnLabel: <div style={{
      fontSize: '12px',
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: '6px',
      alignItems: 'center',
      height: '100%',
      color: 'white',
      marginBottom: '4px'
    }}>on</div>,
    customOffLabel:<div style={{
      fontSize: '12px',
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: '6px',
      alignItems: 'center',
      height: '100%',
      color: 'white',
      marginBottom: '2px'
    }}>off</div>
  },
  argTypes: { onChange: { action: 'onChange' } },
}


export const Color = {
  name: "different color",
  render: function ({ onClick, ...args }) {
    const [checked, setChecked] = useState(args.checked);

    return <Toggle {...args} onChange={e => {
      onChange(e);
      setChecked(e);
    }} checked={checked} />;
  },
  args: {
    checked: false,
    onColor: "orange",
    offColor: "gray",
  },
  argTypes: { onChange: { action: 'onChange' } },
}

export const Disabled = {
  name: "disabled",
  render: function ({ onClick, ...args }) {
    const [checked, setChecked] = useState(args.checked);

    return <Toggle {...args} onChange={e => {
      onChange(e);
      setChecked(e);
    }} checked={checked} />;
  },
  args: {
    checked: false,
    onColor: "green",
    offColor: "gray",
    disabled: true
  },
  argTypes: { onChange: { action: 'onChange' } },
}

export const Shape = {
  name: "different shape",
  render: function ({ onClick, ...args }) {
    const [checked, setChecked] = useState(args.checked);

    return <Toggle {...args} onChange={e => {
      onChange(e);
      setChecked(e);
    }} checked={checked} />;
  },
  args: {
    checked: false,
    onColor: "orange",
    offColor: "gray",
    borderRadius:"0"
  },
  argTypes: { onChange: { action: 'onChange' } },
}