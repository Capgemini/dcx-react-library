import { ToolTip } from '../../src/tooltip/Tooltip';

export default {
  title: 'DCXLibrary/Form/Tooltip/Class based',
  component: ToolTip,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Bottom = {
  name: 'Bottom',
  render: function (args) {
    return (
      <div style={{ padding: '250px' }}>
        <ToolTip {...args}>
          <b> Testing tooltip for bottom position </b>
        </ToolTip>
      </div>
    );
  },
  args: {
    content: 'Here is tooltip for bottom.',
    width: '250px',
    background: '#706666',
    color: 'white',
    direction: 'bottom',
  },
};

export const Top = {
  name: 'Top',
  render: function (args) {
    return (
      <div style={{ padding: '250px' }}>
        <ToolTip {...args}>
          <b> Testing tooltip for top position </b>
        </ToolTip>
      </div>
    );
  },
  args: {
    content: 'Here is tooltip for top.',
    width: '250px',
    background: '#706666',
    color: 'white',
    direction: 'top',
  },
};

export const Right = {
  name: 'Right',
  render: function (args) {
    return (
      <div style={{ padding: '250px' }}>
        <ToolTip {...args}>
          <b> Testing tooltip for right position </b>
        </ToolTip>
      </div>
    );
  },
  args: {
    content: 'Here is tooltip for right.',
    width: '250px',
    background: '#706666',
    color: 'white',
    direction: 'right',
  },
};

export const Left = {
  name: 'Left',
  render: function (args) {
    return (
      <div style={{ padding: '250px' }}>
        <ToolTip {...args}>
          <b> Testing tooltip for left position </b>
        </ToolTip>
      </div>
    );
  },
  args: {
    content: 'Here is tooltip for left.',
    width: '250px',
    background: '#706666',
    color: 'white',
    direction: 'left',
  },
};
